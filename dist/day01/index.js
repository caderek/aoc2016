import run from "aocrunner";
const parseInput = (rawInput) => rawInput.split(",").map((x) => {
  const trimmed = x.trim();
  return [trimmed[0], Number(trimmed.slice(1))];
});
const dirs = [
  { x: 0, y: -1 },
  { x: 1, y: 0 },
  { x: 0, y: 1 },
  { x: -1, y: 0 }
];
const mod = (a, b) => {
  const x = a % b;
  return x < 0 ? x + b : x;
};
const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  let x = 0;
  let y = 0;
  let dirIndex = 0;
  for (const [dir, steps] of input) {
    dirIndex = mod(dirIndex + (dir === "R" ? 1 : -1), dirs.length);
    x += dirs[dirIndex].x * steps;
    y += dirs[dirIndex].y * steps;
  }
  return Math.abs(x) + Math.abs(y);
};
const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  let x = 0;
  let y = 0;
  let dirIndex = 0;
  const locations = /* @__PURE__ */ new Set(["0,0"]);
  for (const [dir, steps] of input) {
    dirIndex = mod(dirIndex + (dir === "R" ? 1 : -1), dirs.length);
    for (let i = 0; i < steps; i++) {
      x += dirs[dirIndex].x;
      y += dirs[dirIndex].y;
      if (locations.has(`${x},${y}`)) {
        return Math.abs(x) + Math.abs(y);
      }
      locations.add(`${x},${y}`);
    }
  }
};
run({
  part1: {
    tests: [
      { input: `R2, L3`, expected: 5 },
      { input: `R2, R2, R2`, expected: 2 },
      { input: `R5, L5, R5, R3`, expected: 12 }
    ],
    solution: part1
  },
  part2: {
    tests: [{ input: `R8, R4, R4, R8`, expected: 4 }],
    solution: part2
  },
  trimTestInputs: true
});
//# sourceMappingURL=index.js.map
