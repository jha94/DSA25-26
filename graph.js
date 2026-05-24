const buildAdjList = (edges) => {
  const adjList = {};
  for (let edge of edges) {
    const [key, value] = edge;
    if (adjList[key]) {
      adjList[key].push(value);
    } else {
      adjList[key] = [value];
    }
  }
  return adjList;
};

const adjList = buildAdjList([
  [0, 1],
  [2, 3],
  [0, 4],
]);
// console.log(adjList);

const graphBfs = (edges) => {
  let visited = {};
  let queue = [];
  let result = [];
  for (let index in edges) {
    if (!visited[index]) {
      bfs(index);
    }
  }
  function bfs(index) {
    visited[index] = true;
    queue.push(index);
    result.push(index);
    while (queue.length) {
      const current = queue.shift();
      for (let neighbour of edges[current]) {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          result.push(neighbour);
          queue.push(neighbour);
        }
      }
    }
  }
  return result;
};
const result = graphBfs([[2, 3, 1], [0], [0, 4], [0], [4]]);
// console.log(result);

const graphDfs = (edges) => {
  let visited = {};
  let result = [];
  function dfs(index) {
    visited[index] = true;
    result.push(index);
    for (let neighbour of edges[index]) {
      if (!visited[neighbour]) {
        dfs(neighbour);
      }
    }
  }
  dfs(0);
  return result;
};
const res = graphDfs([[2, 3, 1], [0], [0, 4], [0], [2]]);
// console.log(res);

const findJudge = (n, edges) => {
  let incoming = {};
  let outgoing = {};
  for (let index = 1; index <= n; index++) {
    incoming[index] = 0;
    outgoing[index] = 0;
  }
  for (let edge of edges) {
    const [src, dest] = edge;
    incoming[dest]++;
    outgoing[src]++;
  }
  for (let [key, value] of Object.entries(incoming)) {
    if (value === n - 1 && outgoing[key] === 0) {
      return key;
    }
  }
  return -1;
};
const judge = findJudge(4, [
  [1, 3],
  [4, 3],
  [2, 3],
]);
console.log(judge);

const countServers = (grid) => {
  const rows = grid.length;
  const column = grid[0].length;

  const rowArr = new Array(rows).fill(0);
  const colArr = new Array(column).fill(0);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j] === 1) {
        rowArr[i]++;
        colArr[j]++;
      }
    }
  }

  let res = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j] === 1 && Math.max(rowArr[i], colArr[j]) > 1) {
        res++;
      }
    }
  }
  return res;
};
const servers = countServers([
  [1, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
]);
// console.log(servers);

const numIslands = (grid) => {
  if (!grid || grid.length === 0) return 0;

  const dfs = (grid, i, j) => {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[i].length ||
      grid[i][j] === "0"
    ) {
      return 0;
    }
    grid[i][j] = "0";
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
    return 1;
  };

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

const numOfIsland = numIslands([
  ["1", "1", "0", "0", "1"],
  ["1", "1", "0", "0", "1"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
]);
// console.log(numOfIsland);

const maxAreaOfIsland = (grid) => {
  let maxArea = 0;
  const dfs = (i, j) => {
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[0].length ||
      grid[i][j] === 0
    )
      return 0;
    grid[i][j] = 0;
    let count = 1;
    count += dfs(i + 1, j);
    count += dfs(i - 1, j);
    count += dfs(i, j + 1);
    count += dfs(i, j - 1);
    return count;
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(maxArea, dfs(i, j));
      }
    }
  }
  return maxArea;
};

const maxArea = maxAreaOfIsland([
  [0, 1, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [0, 1, 1, 0, 1],
  [0, 1, 0, 0, 1],
]);
// console.log(maxArea);

const closedIsland = (grid) => {
  let count = 0;
  const dfs = (i, j) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) {
      return 0;
    }
    if (grid[i][j] === 1) {
      return 1;
    }
    grid[i][j] = 1;
    const up = dfs(i + 1, j);
    const down = dfs(i - 1, j);
    const left = dfs(i, j + 1);
    const right = dfs(i, j - 1);
    return up && down && left && right;
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0) {
        count += dfs(i, j);
      }
    }
  }
  return count || -1;
};
const numOfClosedIsland = closedIsland([
  [0, 0, 1, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 1, 1, 0],
]);
// console.log("numOfClosedIsland", numOfClosedIsland);
