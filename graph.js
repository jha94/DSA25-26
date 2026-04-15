// const buildAdjList = (list) => {
//   const adjList = {}
//   list.map((value)=>{
//     const [src, dest] = value
//     if(adjList[src]){
//       adjList[src].push(dest)
//     } else{
//       adjList[src] = [dest]
//     }
//   })
//   return adjList
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

// const graphDfs = (list) => {
//   const answer = [];
//   const visited = {}
//   const dfs = (index) => {
//     answer.push(index)
//     visited[index]=true
//     for(let neighbour of list[index]){
//       if(!visited[neighbour]){
//         dfs(neighbour)
//       }
//     }
//   }
//   dfs(0)
//   return answer
// }
// console.log(graphDfs([[2, 3, 1], [0], [0, 4], [0], [2]]));

const findJudge = (n, trust) => {
  const incoming = {};
  const outgoing = {};
  for (let index = 1; index <= n; index++) {
    incoming[index] = 0;
    outgoing[index] = 0;
  }
  for (let value of trust) {
    const [src, dest] = value;
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

const judge = findJudge(3, [
  [1, 3],
  [2, 3],
  [3, 1],
  [3, 2],
]);

console.log(judge);
