const fileData = "abcabcdocusignxyz";
let index = 0
const getChar = () => {
  return index<fileData.length?fileData[index++]:null
}

const findString = (input) => {
  if(!input) return true
  let char;
  let currentWindow = ''
  while((char=getChar())!==null){
    currentWindow+=char
    if(currentWindow.length>input.length){
      currentWindow=currentWindow.substring(1)
    }
    if(currentWindow===input){
      return true
    }
  }
  return false
}

console.log(findString("docusign"));
