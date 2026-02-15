const plusOne = (digits) => {
    let numStr = '';
    digits.forEach((value) => {
        numStr += value
    })
    let numStrPlusOne = String(Number(numStr) + 1)
    return numStrPlusOne.split('').map((value) => Number(value))
}

console.log(plusOne([9, 9, 9]))