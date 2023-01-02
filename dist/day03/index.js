import run from "aocrunner";
const parseInput = (rawInput) => rawInput.split("\n").map(
  (x) => x.trim().split(/\s+/).map(Number).sort((a, b) => a - b)
);
const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  return input.filter(([a, b, c]) => a + b > c).length;
};
const part2 = (rawInput) => {
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
    solution: part1
  },
  part2: {
    solution: part2
  },
  trimTestInputs: true
});
//# sourceMappingURL=index.js.map
