import run from "aocrunner";
const parseInput = (rawInput) => rawInput.split("\n").map((line) => {
  const chunks = line.match(/[a-z]+/g) ?? [];
  const supernet = [];
  const hypernet = [];
  for (const [index, val] of chunks == null ? void 0 : chunks.entries()) {
    if (index % 2 === 0) {
      supernet.push(val);
    } else {
      hypernet.push(val);
    }
  }
  return { supernet, hypernet };
});
const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  const ABBA_REGEX = /([a-z])((?!\1)[a-z])\2\1/g;
  return input.filter(({ supernet, hypernet }) => {
    const matchingSuper = supernet.map((v) => v.match(ABBA_REGEX) ?? []).flat();
    const matchingHyper = hypernet.map((v) => v.match(ABBA_REGEX) ?? []).flat();
    return matchingSuper.length > 0 && matchingHyper.length === 0;
  }).length;
};
const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  const ABA_REGEX = /(?=(([a-z])((?!\2)[a-z])\2))/g;
  return input.filter(({ supernet, hypernet }) => {
    const matchingSuper = supernet.map((v) => [...v.matchAll(ABA_REGEX)].map((v2) => v2[1])).flat();
    const matchingHyper = hypernet.map((v) => [...v.matchAll(ABA_REGEX)].map((v2) => v2[1])).flat();
    return matchingSuper.some(
      (v) => matchingHyper.includes(`${v[1]}${v[0]}${v[1]}`)
    );
  }).length;
};
const testInput = `
abba[mnop]qrst
abcd[bddb]xyyx
aaaa[qwer]tyui
ioxxoj[asdfgh]zxcvbn
`;
const testInput2 = `
aba[bab]xyz
xyx[xyx]xyx
aaa[kek]eke
zazbz[bzb]cdb
`;
run({
  part1: {
    tests: [{ input: testInput, expected: 2 }],
    solution: part1
  },
  part2: {
    tests: [{ input: testInput2, expected: 3 }],
    solution: part2
  }
});
//# sourceMappingURL=index.js.map
