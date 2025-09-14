import { CONGRATULATIONS_KEY, TerminalItem } from "@/puzzle/domain-model";

export const limitLineWidth = <T extends TerminalItem>(
  width: number,
  item: T,
): T => {
  return {
    ...item,
    content: item.content
      .split("\n")
      .map((line) => {
        const [first, ...rest] = line.split(" ");
        let res = first;
        let count = first.length;
        for (const word of rest) {
          if (count + word.length < width) {
            res += " " + word;
            count += word.length + 1;
          } else {
            res += "\n" + word;
            count = word.length;
          }
        }
        return res;
      })
      .join("\n"),
  };
};

export const isCongratulations = (item: TerminalItem | null | undefined) =>
  item?.key === CONGRATULATIONS_KEY;
