// const buildAdjMatrix = (edges, numOfNodes) =>{
//   const adjMat = Array.from({length:numOfNodes}, ()=>[])
//   for(let edge of edges){
//     const [src, dest] = edge
//     adjMat[src][dest] = true
//   }
//   console.log(adjMat);
// }
// buildAdjMatrix([[0,1], [2, 3], [0,4]], 5)

// const buildAdjList = (edges) => {
//   const adjList = {}
//   for(let edge of edges){
//     const [src, dest] = edge
//     if(adjList[src]){
//       adjList[src].push(dest)
//     } else{
//       adjList[src] = [dest]
//     }
//   }
//   console.log(adjList);

// }
// buildAdjList([[0,1], [2, 3], [0,4]])

const graphBfs = (adj) => {
  const visited = {};
  const res = [];
  const queue = [];
  for (let index in adj) {
    if (!visited[index]) {
      bfs(index);
    }
  }
  function bfs(index) {
    visited[index] = true;
    res.push(index);
    queue.push(index);
    while (queue.length) {
      const current = queue.shift();
      for (let neighbour of adj[current]) {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          res.push(neighbour);
          queue.push(neighbour);
        }
      }
    }
  }
  return res;
};

console.log(graphBfs([[2, 3, 1], [0], [0, 4], [0], [4]]));
