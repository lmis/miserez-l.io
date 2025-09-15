export type RiddleResult =
  | {
      correct: false;
    }
  | {
      correct: true;
      next: TerminalItem;
      token: string;
    };

export interface Hint {
  key: number;
  number: number;
  content: string;
  last?: true;
  link?: string;
}

export interface HintResult {
  token: string;
  hint: Hint;
}

export enum GameLocation {
  HEALTH_WARNING_AND_PRIVACY,
  LEGAL_NOTICE,
  GAME_RULES,
  PROLOGUE,
  SAFEHOUSE,
  TERMINAL,
  ASHTRAY,
  COFFE_CUP,
  BRIEFCASE,
  AGENTS,
  AGENT_BRAUTKLEID,
  AGENT_STOPPSCHILD,
  HELP,
}

export type TerminalItem = {
  key: string;
  content: string;
  input?: boolean;
};

export const CONGRATULATIONS_KEY = "congratulations";
