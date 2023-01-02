import run from "aocrunner";
import { chunk_ } from "@arrows/array";
import { rotate } from "../utils/grid.js";
const parseInputPart1 = (rawInput) => rawInput.split("\n").map(
  (x) => x.trim().split(/\s+/).map(Number).sort((a, b) => a - b)
);
const parseInputPart2 = (rawInput) => chunk_(
  3,
  rotate.left(rawInput.split("\n").map((x) => x.trim().split(/\s+/).map(Number))).reverse().flat()
).map((x) => x.sort((a, b) => a - b));
const solve = (parsingFn) => (rawInput) => {
  return parsingFn(rawInput).filter(([a, b, c]) => a + b > c).length;
};
run({
  part1: {
    tests: [
      {
        input: `
          5 10 25
          5 6 9 
        `,
        expected: 1
      }
    ],
    solution: solve(parseInputPart1)
  },
  part2: {
    tests: [
      {
        input: `
          2 5 8
          3 6 9
          4 7 1
        `,
        expected: 2
      }
    ],
    solution: solve(parseInputPart2)
  }
});
//# sourceMappingURL=index.js.map
