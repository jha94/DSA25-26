const buildAdjList = (n, edges) => {
  const adjList = Array.from({ length: n }, () => []);
  for (let edge of edges) {
    let [src, dest] = edge;
    adjList[src].push(dest);
    adjList[dest].push(src);
  }
  return adjList;
};

const bfs = (node, adjList, visited) => {
  const queue = [node];
  visited[node] = true;
  while (queue.length) {
    let curr = queue.shift();
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
  for (let vertex = 0; vertex < adjList.length; vertex++) {
    if (!visited[vertex]) {
      numComponents++;
      bfs(vertex, adjList, visited);
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
