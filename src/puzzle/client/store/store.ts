import { create } from "zustand";

import { GameSlice, gameSlice } from "@/puzzle/client/store/game-slice";
import {
  TerminalSlice,
  terminalSlice,
} from "@/puzzle/client/store/terminal-slice";

export type Store = GameSlice & TerminalSlice;
export const useStore = create<Store>((...a) => ({
  ...gameSlice(...a),
  ...terminalSlice(...a),
}));
