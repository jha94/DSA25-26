const buildAdjList = (edges) => {
  const adjList = {};
  for (let edge of edges) {
    const [src, dest] = edge;
    if (adjList[src]) {
      adjList[src].push(dest);
    } else {
      adjList[src] = [dest];
    }
  }
  return adjList;
};
// const adjList = buildAdjList([
//   [0, 1],
//   [2, 3],
//   [0, 4],
// ]);
// console.log(adjList);

const graphBfs = (adjList) => {
  let visited = {};
  let queue = [];
  let result = [];
  for (let edge in adjList) {
    if (!visited[edge]) {
      bfs(edge);
    }
  }
  function bfs(edge) {
    visited[edge] = true;
    result.push(edge);
    queue.push(edge);
    while (queue.length) {
      const current = queue.shift();
      for (let neighbour of adjList[current]) {
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

const graphDfs = (adjList) => {
  const visited = {};
  let result = [];
  const dfs = (index) => {
    visited[index] = true;
    result.push(index);
    for (let neighbour of adjList[index]) {
      if (!visited[neighbour]) {
        dfs(neighbour);
      }
    }
  };
  dfs(0);
  return result;
};
const res = graphDfs([[2, 3, 1], [0], [0, 4], [0], [2]]);
// console.log(res);

const findJudge = (n, trust) => {
  let incoming = {};
  let outgoing = {};
  for (let index = 1; index <= n; index++) {
    incoming[index] = 0;
    outgoing[index] = 0;
  }
  for (let edge of trust) {
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
// console.log(judge);

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
