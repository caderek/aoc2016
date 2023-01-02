function* line({ start, end }) {
  if (start.x === end.x && start.y === end.y) {
    return
  }

  const deltaX = end.x - start.x
  const deltaY = end.y - start.y
  const steps = Math.max(Math.abs(deltaX), Math.abs(deltaY))

  const incrementX = deltaX / steps
  const incrementY = deltaY / steps

  for (let i = 0; i <= steps; i++) {
    yield {
      x: start.x + Math.round(incrementX * i),
      y: start.y + Math.round(incrementY * i),
    }
  }
}

const path = [...line({ start: { x: 2, y: 2 }, end: { x: 0, y: 6 } })]

console.log(path)

const path2 = [...line({ start: { x: 2, y: 2 }, end: { x: 3, y: 4 } })]

console.log(path2)
