const buildAdjList = (list) => {
  const adjList = {};
  for (let edge of list) {
    const [src, dest] = edge;
    if (adjList[src]) {
      adjList[src].push(dest);
    } else {
      adjList[src] = [dest];
    }
  }
  return adjList;
};
// console.log(buildAdjList([[0,1], [2, 3], [0,4]]))

const graphBfs = (adjList) => {
  let visited = {};
  let queue = [];
  let result = [];
  for (let index in adjList) {
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
// console.log(graphBfs([[2, 3, 1], [0], [0, 4], [0], [4]]));

const graphDfs = (adjList) => {
  let visited = {};
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
// console.log(graphDfs([[2, 3, 1], [0], [0, 4], [0], [2]]));

const findJudge = (n, trust) => {
  let incoming = {};
  let outgoing = {};
  for (let index = 1; index <= n; index++) {
    incoming[index] = 0;
    outgoing[index] = 0;
  }
  for (let edge of trust) {
    const [src, dest] = edge;
    outgoing[src] += 1;
    incoming[dest] += 1;
  }
  for (let [key, value] of Object.entries(incoming)) {
    if (value === n - 1 && outgoing[key] === 0) {
      return key;
    }
  }
  return -1;
};
// const judge = findJudge(4, [
//   [1, 3],
//   [4, 3],
//   [2, 3],
// ]);

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
console.log(servers);
