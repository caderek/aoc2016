import run from "aocrunner";
import { createHash } from "node:crypto";
const parseInput = (rawInput) => rawInput;
const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  let i = 0;
  const letters = [];
  while (letters.length < 8) {
    const hashed = createHash("md5").update(`${input}${i}`).digest("hex");
    if (hashed.startsWith("00000")) {
      letters.push(hashed[5]);
    }
    i++;
  }
  return letters.join("");
};
const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  let i = 0;
  const ready = /* @__PURE__ */ new Set();
  const letters = [];
  while (ready.size < 8) {
    const hashed = createHash("md5").update(`${input}${i}`).digest("hex");
    const pos = Number(hashed[5]);
    if (pos >= 0 && pos <= 7 && !ready.has(pos) && hashed.startsWith("00000")) {
      letters[pos] = hashed[6];
      ready.add(pos);
    }
    i++;
  }
  return letters.join("");
};
run({
  part1: {
    solution: part1
  },
  part2: {
    solution: part2
  }
});
//# sourceMappingURL=index.js.map
