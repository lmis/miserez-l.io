"use server";

import { Hint } from "@/puzzle/domain-model";
import { readJwtContent } from "@/puzzle/server/service/jwt";

export const validateToken = async (
  token: string | null,
  stored: { key: number; hints: Hint[] },
): Promise<boolean> => {
  const content = readJwtContent(token);

  if (
    stored.key !== content?.key ||
    stored.hints.some((h) => h.key > content.key)
  ) {
    return false;
  }

  return stored.hints.every(
    (h) => h.key !== content.key || h.number <= (content.hint ?? -1),
  );
};
