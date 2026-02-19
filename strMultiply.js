const multiply = (num1, num2) => {
    let firstNum = 0;
    let secNum = 0;
    const prod = (value, length, index) => value * Math.pow(10, length - index)
    const multiply = (strArr, res) => {
        strArr.split('').forEach((value, index) => {
            if (index === 0) {
                res = prod(value, (num1.length - 1), index)
            } else {
                res += prod(value, (num1.length - 1), index)
            }
        })
        return res
    }
    const firstMultiplyRes = multiply(num1, firstNum);
    const secMultiplyRes = multiply(num2, secNum)
    return String(BigInt(firstMultiplyRes) * BigInt(secMultiplyRes))
}
console.log(multiply("123456789", "987654321"))