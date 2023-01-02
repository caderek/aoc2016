import run from "aocrunner"

type RoomData = {
  name: string
  checksum: string
  id: number
}

const parseInput = (rawInput: string) => {
  const lines = rawInput.split("\n")

  const entries = lines.map((line) => {
    const chunks = line.match(/[a-z]+/g)
    const name = chunks?.slice(0, -1).join("-") as string
    const checksum = chunks?.slice(-1)[0] as string
    const id = Number((line.match(/\d+/) ?? [])[0])

    return { name, checksum, id }
  })

  return entries
}

const getRealRooms = (input: RoomData[]) => {
  return input.filter(({ name, checksum }) => {
    const occurrences = new Map<string, number>()

    const letters = name.replace(/\-/g, "")

    for (const letter of letters) {
      occurrences.set(letter, (occurrences.get(letter) ?? 0) + 1)
    }

    const actualChecksum = [...occurrences.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([k]) => k)
      .slice(0, 5)
      .join("")

    return actualChecksum === checksum
  })
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)

  return getRealRooms(input).reduce((acc, { id }) => acc + id, 0)
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const ALPHABET_LENGTH = 26
  const ASCII_OFFSET = 97

  for (const { name, id } of getRealRooms(input)) {
    const realName = [...name]
      .map((v) =>
        v === "-"
          ? " "
          : String.fromCharCode(
              ((v.charCodeAt(0) - ASCII_OFFSET + id) % ALPHABET_LENGTH) +
                ASCII_OFFSET,
            ),
      )
      .join("")

    if (realName.includes("north")) {
      return id
    }
  }
}

const testInput = `
  aaaaa-bbb-z-y-x-123[abxyz]
  a-b-c-d-e-f-g-h-987[abcde]
  not-a-real-room-404[oarel]
  totally-real-room-200[decoy]
`

run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: 1514,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
        qzmt-zixmtkozy-ivhz-343[zimth]
        north-pole-26[oehln]
      `,
        expected: 26,
      },
    ],
    solution: part2,
  },
})
