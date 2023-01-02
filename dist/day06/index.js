import run from "aocrunner";
const parseInput = (rawInput) => rawInput.split("\n");
const solve = (compareFn) => (rawInput) => {
  const input = parseInput(rawInput);
  const occurrences = Array.from(
    { length: input[0].length },
    () => /* @__PURE__ */ new Map()
  );
  for (const line of input) {
    for (let i = 0; i < line.length; i++) {
      occurrences[i].set(line[i], (occurrences[i].get(line[i]) ?? 0) + 1);
    }
  }
  return occurrences.map((v) => Array.from(v).sort(compareFn)[0][0]).join("");
};
const testInput = `
  eedadn
  drvtee
  eandsr
  raavrd
  atevrs
  tsrnev
  sdttsa
  rasrtv
  nssdts
  ntnada
  svetve
  tesnvt
  vntsnd
  vrdear
  dvrsen
  enarar
`;
run({
  part1: {
    tests: [{ input: testInput, expected: "easter" }],
    solution: solve((a, b) => b[1] - a[1])
  },
  part2: {
    tests: [{ input: testInput, expected: "advent" }],
    solution: solve((a, b) => a[1] - b[1])
  }
});
//# sourceMappingURL=index.js.map
