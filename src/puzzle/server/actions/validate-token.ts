"use server";

import { Hint } from "@/puzzle/domain-model";
import { readJwtContent } from "@/puzzle/server/service/jwt";

export const validateToken = async (
  token: string | null,
  stored: { key: number; hints: Hint[] },
): Promise<boolean> => {
  const { key = 0, hint = null } = readJwtContent(token) ?? {};

  if (stored.key !== key || stored.hints.some((h) => h.key > key)) {
    return false;
  }

  return stored.hints.every((h) => h.key !== key || h.number <= (hint ?? -1));
};
