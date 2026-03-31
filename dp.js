const islandPerimeter = (grid) => {
  let perimeter = 0;
  for(let index=0;index<grid.length;index++){
    for(let ind=0;ind<grid[index].length;ind++){
      if(grid[index][ind]===1){
        perimeter+=4
        if(index>0 && grid[index-1][ind]===1){
          perimeter-=2
        }
        if(ind>0 && grid[index][ind-1]===1){
          perimeter-=2
        }
      }
    }
  }
  return perimeter
};

console.log(
  islandPerimeter([
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 0],
    [0, 0, 1, 1],
  ]),
);
