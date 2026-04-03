let buildAdjList = (n, edges) => {
  let adjList = Array.from({ length: n }, () => []);
  for (let edge of edges) {
    let [src, dest] = edge;
    adjList[src].push(dest);
    adjList[dest].push(src);
  }
  return adjList;
};

const bfs = (index, visited, adjList) => {
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

let countComponents = (n, edges) => {
  const adjList = buildAdjList(n, edges);
  const visited = {};
  let numComponents = 0;
  for (let index = 0; index < adjList.length; index++) {
    if (!visited[index]) {
      numComponents++;
      bfs(index, visited, adjList);
    }
  }
  return numComponents;
};

console.log(
  countComponents(5, [
    [0, 1],
    [1, 2],
    [3, 4],
  ]),
);
