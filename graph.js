const floodFill = (image, sr, sc, color) => {
  let originalColor = image[sr][sc];
  if (originalColor === color) return image;
  const dfs = (i, j) => {
    if (
      i < 0 ||
      i >= image.length ||
      j < 0 ||
      j >= image[0].length ||
      image[i][j] !== originalColor
    )
      return image;
    image[i][j] = color;
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };
  dfs(sr, sc);
  return image;
};
const imageRes = floodFill(
  [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  1,
  1,
  2,
);
console.log(imageRes);
