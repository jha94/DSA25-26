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
  let visited = {};
  let ans = [];
  let queue = [];

  for (let node in adj) {
    console.log('node', node);
    
    if (!visited[node]) {
      bfs(node);
    }
  }
    function bfs(node)  {
    visited[node] = true;
    ans.push(node);
    queue.push(node);

    while (queue.length) {
      const current = queue.shift();
      for (let neighor of adj[current]) {
        if (!visited[neighor]) {
          visited[neighor] = true;
          ans.push(neighor);
          queue.push(neighor);
        }
      }
    }
  };
  return ans;
};
console.log(graphBfs([[2, 3, 1], [0], [0, 4], [0], [4]]));
