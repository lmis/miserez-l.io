"use server";

import { RiddleResult } from "@/puzzle/domain-model";
import { createJwt, readJwtContent } from "@/puzzle/server/service/jwt";
import {
  check,
  getNextQuestionOrCongratulations,
} from "@/puzzle/server/service/riddles";

export const submitAnswer = async (
  answer: string,
  token: string | null,
): Promise<RiddleResult> => {
  const { key: currentKey = 0 } = readJwtContent(token) ?? {};

  if (!check(currentKey, answer)) {
    return { correct: false };
  }

  const key = currentKey + 1;
  const newToken = createJwt({ key, hint: null });

  return {
    correct: true,
    next: getNextQuestionOrCongratulations(key),
    token: newToken,
  };
};
