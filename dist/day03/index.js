import run from "aocrunner";
const parseInput = (rawInput) => rawInput.split("\n").map((x) => x.trim().split(/\s+/).map(Number).sort((a, b) => a - b));
const solution1 = async (rawInput) => {
  const input = parseInput(rawInput);
  return input.filter(([a, b, c]) => a + b > c).length;
};
const solution2 = async (rawInput) => {
  const input = parseInput(rawInput);
  return;
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
    solution: solution1
  },
  part2: {
    solution: solution2
  },
  trimTestInputs: true
});
//# sourceMappingURL=index.js.map
