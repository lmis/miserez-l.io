export const inexhaustive = (value: never): never => {
  throw new Error(`Unexpected value: ${value}`);
};

export const enumValues = <T extends Record<string, unknown>>(
  enumObj: T,
): T[keyof T][] => {
  return Object.values(enumObj).filter(
    (v) => typeof v === "number",
  ) as T[keyof T][];
};
