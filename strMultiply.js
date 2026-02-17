const multiply = (num1, num2) => {
    let firstNum = 0;
    let secNum = 0;
    num1.split('').forEach((value, index) => {
        if (index === 0) {
            firstNum = value * Math.pow(10, (num1.length - 1) - index)
        } else {
            firstNum += value * Math.pow(10, (num1.length - 1) - index)
        }
    })
    num2.split('').forEach((value, index) => {
        if (index === 0) {
            secNum = value * Math.pow(10, (num2.length - 1) - index)
        } else {
            secNum += value * Math.pow(10, (num2.length - 1) - index)
        }
    })
    return String(BigInt(firstNum) * BigInt(secNum))
}
console.log(multiply("123456789", "987654321"))