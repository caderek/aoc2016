import run from "aocrunner";
const parseInput = (rawInput) => rawInput.split("\n").map((x) => x.split(""));
const dirs = {
  U: [0, -1],
  R: [1, 0],
  D: [0, 1],
  L: [-1, 0]
};
const keypad = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const keypad2 = [
  [0, 0, 1, 0, 0],
  [0, 2, 3, 4, 0],
  [5, 6, 7, 8, 9],
  [0, "A", "B", "C", 0],
  [0, 0, "D", 0, 0]
];
const solution = (keypad3, startX, startY) => async (rawInput) => {
  const input = parseInput(rawInput);
  let x = startX;
  let y = startY;
  const nums = input.map((line) => {
    var _a;
    for (const move of line) {
      const [dX, dY] = dirs[move];
      const newX = x + dX;
      const newY = y + dY;
      if ((_a = keypad3[newY]) == null ? void 0 : _a[newX]) {
        x = newX;
        y = newY;
      }
    }
    return keypad3[y][x];
  });
  return nums.join("");
};
run({
  part1: {
    tests: [
      {
        input: `
          ULL
          RRDDD
          LURDL
          UUUUD
        `,
        expected: "1985"
      }
    ],
    solution: solution(keypad, 1, 1)
  },
  part2: {
    tests: [
      {
        input: `
          ULL
          RRDDD
          LURDL
          UUUUD
        `,
        expected: "5DB3"
      }
    ],
    solution: solution(keypad2, 0, 2)
  },
  trimTestInputs: true
});
//# sourceMappingURL=index.js.map
