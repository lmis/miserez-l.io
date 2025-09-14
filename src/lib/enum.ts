export const inexhaustive = (value: never): never => {
  throw new Error(`Unexpected value: ${value}`);
};
