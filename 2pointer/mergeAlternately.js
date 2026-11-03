// const mergeAlternately = (word1, word2) => {
//   let pointer1 = 0;
//   let pointer2 = 0;
//   let result = "";
//   while (pointer1 < word1.length && pointer2 < word2.length) {
//     result += word1[pointer1];
//     pointer1++;
//     result += word2[pointer2];
//     pointer2++;
//   }
//   while (pointer1 < word1.length) {
//     result += word1[pointer1];
//     pointer1++;
//   }
//   while (pointer2 < word2.length) {
//     result += word2[pointer2];
//     pointer2++;
//   }
//   console.log(result);
// };

const mergeAlternately = (word1, word2) => {
    let i = 0;
    let result = ""
    while(i<word1.length||i<word2.length){
        if(i<word1.length) result+=word1[i]
        if(i<word2.length) result+=word2[i]
        i++
    }
    console.log(result);
    
}
mergeAlternately("ab", "cd");
