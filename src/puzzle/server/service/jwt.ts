import jwt from "jsonwebtoken";

import { JWT_SECRET } from "@/puzzle/server/env";

export type JWTContent = { key: number; hint: number | null };

export const readJwtContent = (token: string | null): JWTContent | null => {
  if (!token) {
    return null;
  }
  return jwt.verify(token, JWT_SECRET) as JWTContent;
};

export const createJwt = (content: JWTContent): string =>
  jwt.sign(content, JWT_SECRET);
