import { StateCreator } from "zustand/vanilla";

import type { Store } from "@/puzzle/client/store/store";
import { isCongratulations, limitLineWidth } from "@/puzzle/client/store/util";
import { GameLocation, Hint, TerminalItem } from "@/puzzle/domain-model";
import { getNextHint } from "@/puzzle/server/actions/get-next-hint";
import { validateToken } from "@/puzzle/server/actions/validate-token";

interface GameState {
  token: string | null;
  riddleKey: number;
  hints: Hint[];
  gameLocation: GameLocation;
  locationHistory: GameLocation[];
  terminalItems: TerminalItem[];
}

interface GameActions {
  back: () => void;
  navigate: (location: GameLocation) => void;
  requestNextHint: () => Promise<void>;
  storeGameState: () => void;
  initialize: (lineWidth: number, initialItem: TerminalItem) => Promise<void>;
}

export type GameSlice = GameState & GameActions;

const GAME_STATE_KEY = "game-state";
const loadGameState = (): GameState | null => {
  const gameStateLocalStorage: string | null =
    localStorage.getItem(GAME_STATE_KEY);
  if (!gameStateLocalStorage) {
    return null;
  }
  return JSON.parse(gameStateLocalStorage);
};

export const gameSlice: StateCreator<Store, [], [], GameSlice> = (
  set,
  get,
) => ({
  token: null,
  riddleKey: 0,
  gameLocation: GameLocation.HEALTH_WARNING_AND_PRIVACY,
  locationHistory: [GameLocation.HEALTH_WARNING_AND_PRIVACY],
  hints: [],
  terminalItems: [],
  storeGameState: () => {
    const {
      riddleKey,
      gameLocation,
      locationHistory,
      hints,
      terminalItems,
      token,
    } = get();
    // Explicitly copying into a new typed object to avoid storing unwanted properties
    const payload: GameState = {
      token,
      riddleKey,
      gameLocation,
      locationHistory,
      hints,
      terminalItems,
    };
    localStorage.setItem(GAME_STATE_KEY, JSON.stringify(payload));
  },
  initialize: async (lineWidth: number, initialItem: TerminalItem) => {
    const storedState = loadGameState();

    if (
      !storedState ||
      !(await validateToken(storedState.token, {
        key: storedState.riddleKey,
        hints: storedState.hints,
      }))
    ) {
      set((state) => ({
        ...state,
        token: null,
        riddleKey: 0,
        gameLocation: GameLocation.HEALTH_WARNING_AND_PRIVACY,
        locationHistory: [GameLocation.HEALTH_WARNING_AND_PRIVACY],
        hints: [],
        terminalItems: [initialItem],
        lineWidth,
        queue: [initialItem],
      }));
    } else {
      set((state) => ({
        ...state,
        ...storedState,
        lineWidth,
        display: storedState.terminalItems.map((i) =>
          limitLineWidth(lineWidth, i),
        ),
        acceptsInput: !isCongratulations(
          storedState.terminalItems[storedState.terminalItems.length - 1],
        ),
      }));
    }
  },
  requestNextHint: async () => {
    const res = await getNextHint(get().token);
    if (res === null) {
      return;
    }
    set((state) => ({
      ...state,
      token: res.token,
      hints: [...state.hints, res.hint],
    }));
    get().storeGameState();
  },
  back: () => {
    set((state) => {
      if (state.locationHistory.length <= 1) {
        return state;
      }
      return {
        ...state,
        locationHistory: state.locationHistory.slice(1),
        gameLocation: state.locationHistory[1],
      };
    });
    get().storeGameState();
  },
  navigate: (location: GameLocation) => {
    set((state) => ({
      ...state,
      locationHistory: [location, ...state.locationHistory],
      gameLocation: location,
    }));
    get().storeGameState();
  },
});
