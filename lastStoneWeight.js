const lastStoneWeight = (stones) => {
  let res = [...stones];
  let highest = res[0];
  let secHighest = res[1];
  for(let index=0;index<res.length;index++){
    if(res[index]>highest){
        highest = res[index]
    }
  }
};

lastStoneWeight([2, 3, 6, 2, 4]);
