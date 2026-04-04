const buildAdjList = (n, edges) => {
  const adjList = Array.from({ length: n }, () => []);
  for (let edge of edges) {
    const [src, dest] = edge;
    adjList[src].push(dest);
    adjList[dest].push(src);
  }
  return adjList;
};

const bfs = (index, adjList, visited) => {
  const queue = [index];
  visited[index] = true;
  while (queue.length) {
    const curr = queue.shift();
    for (let neighbor of adjList[curr]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }
};

const countComponents = (n, edges) => {
  const adjList = buildAdjList(n, edges);
  const visited = {};
  let numComponents = 0;
  for (let index = 0; index < adjList.length; index++) {
    if (!visited[index]) {
      numComponents++;
      bfs(index, adjList, visited);
    }
  }
  return numComponents;
};

// console.log(
//   countComponents(5, [
//     [0, 1],
//     [1, 2],
//     [3, 4],
//   ]),
// );

const dfs = (grid, i, j) => {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[i].length ||
    grid[i][j] === "0"
  ) {
    return "0";
  }
  grid[i][j] = "0";
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
  return 1;
};

const numIslands = (grid) => {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count += dfs(grid, i, j);
      }
    }
  }
  return count;
};

console.log(
  numIslands([
    ["1", "1", "0", "0", "1"],
    ["1", "1", "0", "0", "1"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ]),
);
