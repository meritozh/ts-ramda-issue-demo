import * as R from "ramda";

interface Props {
  content?: string;
}

const input = ["abcd", "ab", "cd"];

const pattern: Props = { content: "a" };

export const patternMatch = R.findIndex(
  // Need pass `pattern.content!`.
  R.includes(pattern.content),
  R.map((n: string) => n)(input)
);
