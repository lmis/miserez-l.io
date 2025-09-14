"use server";

import { HintResult } from "@/puzzle/domain-model";
import { createJwt, readJwtContent } from "@/puzzle/server/service/jwt";
import { getHintContent } from "@/puzzle/server/service/riddles";

export const getNextHint = async (
  token: string | null,
): Promise<HintResult | null> => {
  const { key = 0, hint: currentHintNumber = null } =
    readJwtContent(token) ?? {};

  const hint = currentHintNumber === null ? 0 : currentHintNumber + 1;
  const hintContent = getHintContent(key, hint);

  if (hintContent === null) {
    return null;
  }

  return {
    hint: hintContent,
    token: createJwt({ key, hint }),
  };
};
