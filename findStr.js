const fileData = "abcabcdocusignxyz";
let index = 0;
let getChar = () => {
  return fileData.length >= index ? fileData[index++] : null;
};

const findString = (str) => {
  if (!str) return true;
  let char;
  let currentWindow = "";
  while ((char = getChar()) !== null) {
    currentWindow += char;
    if (currentWindow.length > str.length) {
      currentWindow = currentWindow.substring(1);
    }
    if (currentWindow === str) {
      return true;
    }
  }
  return false;
};
console.log(findString("docusign"));
