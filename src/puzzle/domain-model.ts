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
  TERMINAL,
  SAFEHOUSE,
  AGENTS,
  HEALTH_WARNING_AND_PRIVACY,
  LEGAL_NOTICE,
  PROLOGUE,
  GAME_RULES,
  HELP,
  ASHTRAY,
  COFFE_CUP,
  BRIEFCASE,
  AGENT_BRAUTKLEID,
  AGENT_STOPPSCHILD,
}

export type TerminalItem = {
  key: string;
  content: string;
  input?: boolean;
};

export const CONGRATULATIONS_KEY = "congratulations";
