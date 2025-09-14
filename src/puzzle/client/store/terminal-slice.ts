import { StateCreator } from "zustand/vanilla";

import { wait } from "@/lib/time";
import type { Store } from "@/puzzle/client/store/store";
import { isCongratulations, limitLineWidth } from "@/puzzle/client/store/util";
import { TerminalItem } from "@/puzzle/domain-model";
import { submitAnswer } from "@/puzzle/server/actions/submit-answer";

interface QueueItem extends TerminalItem {
  partiallyRendered?: boolean;
}

interface TerminalState {
  lineWidth: number;
  queue: QueueItem[];
  display: TerminalItem[];
  userInput: string | null;
  isAnimating: boolean;
  acceptsInput: boolean;
  scrollCallback: ((height: number) => void) | null;
}

interface TerminalActions {
  scroll: (height: number) => void;
  setScrollCallback: (scrollCallback: (height: number) => void) => void;
  startAnimation: () => Promise<void>;
  handleKeypress: (key: string) => void;
  submitLastInput: () => Promise<void>;
  setUserInput: (input: string | null) => void;
}

export type TerminalSlice = TerminalState & TerminalActions;

const CRT_CHAR_DELAY = 15;
const CRT_LINE_DELAY = 15;
const INPUT_MIN_DELAY = 20;
const INPUT_MAX_DELAY = 80;

export const terminalSlice: StateCreator<Store, [], [], TerminalSlice> = (
  set,
  get,
) => ({
  lineWidth: 80,
  queue: [],
  display: [],
  userInput: null,
  isAnimating: false,
  acceptsInput: false,
  scrollCallback: null,
  setScrollCallback: (scrollCallback) => set({ scrollCallback }),
  scroll: (height: number) => {
    const { isAnimating, scrollCallback } = get();
    if (!isAnimating) {
      scrollCallback?.(height);
    }
  },
  setUserInput: (input: string | null) => set({ userInput: input }),
  startAnimation: async () => {
    if (get().isAnimating || get().queue.length === 0) {
      return;
    }
    set((state) => ({
      ...state,
      isAnimating: true,
      acceptsInput: false,
      queue: state.queue.map((i) => limitLineWidth(state.lineWidth, i)),
    }));
    let running = true;
    while (running) {
      let waitTime: number = 0;
      set((state) => {
        if (state.queue.length === 0) {
          running = false;
          return state;
        }
        const item = state.queue[0];
        const nextCharacter = item.content[0];
        const newDisplay = [...state.display];
        if (item.partiallyRendered) {
          const lastItem = { ...newDisplay[newDisplay.length - 1] };
          lastItem.content += nextCharacter;
          newDisplay[newDisplay.length - 1] = lastItem;
        } else {
          newDisplay.push({ ...item, content: nextCharacter });
        }

        const itemDone = item.content.length === 1;
        let newQueue = state.queue.slice(1);
        if (!itemDone) {
          const newItem: QueueItem = {
            ...item,
            content: item.content.slice(1),
            partiallyRendered: true,
          };
          newQueue = [newItem, ...newQueue];
        }

        if (item.input) {
          waitTime =
            INPUT_MIN_DELAY +
            Math.random() * (INPUT_MAX_DELAY - INPUT_MIN_DELAY);
        } else {
          waitTime = nextCharacter === "\n" ? CRT_LINE_DELAY : CRT_CHAR_DELAY;
        }

        return {
          ...state,
          display: newDisplay,
          queue: newQueue,
        };
      });

      await wait(waitTime);
    }
    set((state) => {
      const lastDisplayItem = state.display[state.display.length - 1];
      return {
        ...state,
        isAnimating: false,
        acceptsInput:
          state.queue.length === 0 && !isCongratulations(lastDisplayItem),
      };
    });
  },
  handleKeypress: async (key: string) => {
    set((state) => {
      if (!state.acceptsInput) {
        return state;
      }
      if (key === "Enter" && state.userInput !== null) {
        return {
          ...state,
          display: [
            ...state.display,
            {
              key: `user-input-${Date.now()}`,
              content: state.userInput,
              input: true,
            },
          ],
          userInput: null,
          skipAnimation: false,
          acceptsInput: false,
        };
      }
      if (key === "Backspace" && state.userInput !== null) {
        return {
          ...state,
          userInput: state.userInput.slice(0, -1) ?? null,
        };
      }
      if (key.length === 1) {
        return {
          ...state,
          userInput: (state.userInput ?? "") + key,
        };
      }
      return state;
    });

    if (key === "Enter") {
      await get().submitLastInput();
    }
  },
  submitLastInput: async () => {
    const { display, token } = get();
    const item = display[display.length - 1];
    if (!item?.input) {
      return;
    }
    const res = await submitAnswer(item.content, token);
    if (res.correct) {
      set((state) => ({
        ...state,
        token: res.token,
        riddleKey: state.riddleKey + 1,
        queue: [...state.queue, res.next],
        terminalItems: [...state.terminalItems, res.next],
        acceptsInput: false,
      }));
      get().storeGameState();
      return;
    }

    set((state) => ({
      ...state,
      queue: [
        ...state.queue,
        {
          key: `wrong-answer-${Date.now()}`,
          content: "Falsche Antwort. Versuche es erneut.",
        },
      ],
      acceptsInput: false,
    }));
  },
});
