// const buildAdjMatrix = (edges, numOfNodes) =>{
//   const adjMat = Array.from({length:numOfNodes}, ()=>[])
//   for(let edge of edges){
//     const [src, dest] = edge
//     adjMat[src][dest] = true
//   }
//   console.log(adjMat);
// }
// buildAdjMatrix([[0,1], [2, 3], [0,4]], 5)

// const buildAdjList = (adj) => {
//   const visited = {}
//   for(let edge of adj){
//     const [src, dest] = edge
//     if(visited[src]){
//       visited[src].push(dest)
//     } else{
//       visited[src] = [dest]
//     }
//   }
//   return visited
// }
// console.log(buildAdjList([[0,1], [2, 3], [0,4]]))

// const graphBfs = (adj) => {
//   const visited = {};
//   const res = [];
//   const queue = [];
//   for (let index in adj) {
//     if (!visited[index]) {
//       bfs(index);
//     }
//   }
//   function bfs(index) {
//     visited[index] = true;
//     res.push(index);
//     queue.push(index);
//     while (queue.length) {
//       const current = queue.shift();
//       for (let neighbour of adj[current]) {
//         if (!visited[neighbour]) {
//           visited[neighbour] = true;
//           res.push(neighbour);
//           queue.push(neighbour);
//         }
//       }
//     }
//   }
//   return res;
// };

// console.log(graphBfs([[2, 3, 1], [0], [0, 4], [0], [4]]));

const graphDfs = (adj) => {
  const answer = []
  const visited = {}
  const dfs = (index) => {
    visited[index] = true
    answer.push(index)
    for(let neighbour of adj[index]){
      if(!visited[neighbour]){
        dfs(neighbour)
      }
    }
  }
  dfs(0)
  return answer
}
console.log(graphDfs([[2, 3, 1], [0], [0, 4], [0], [2]]));
