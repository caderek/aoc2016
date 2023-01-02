const rotate = {
  right(arr) {
    const width = arr[0].length;
    const height = arr.length;
    const rotated = Array.from({ length: width }, () => new Array(height));
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        rotated[x][height - y - 1] = arr[y][x];
      }
    }
    return rotated;
  },
  left(arr) {
    const width = arr[0].length;
    const height = arr.length;
    const rotated = Array.from({ length: width }, () => new Array(height));
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        rotated[width - x - 1][y] = arr[y][x];
      }
    }
    return rotated;
  },
  by180(arr) {
    return arr.reverse().map((row) => row.reverse());
  }
};
const flip = {
  vertically(arr) {
    return arr.reverse();
  },
  horizontally(arr) {
    return arr.map((row) => row.reverse());
  }
};
var grid_default = {
  rotate,
  flip
};
export {
  grid_default as default,
  flip,
  rotate
};
//# sourceMappingURL=grid.js.map
