const evalRPN = (tokens) => {
    const stack = [];
    const operatorMap = {
    '+': (a, b) => a + b,
    '-': (a, b) => b - a,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(b / a),
};

    tokens.forEach(value => {
        if (operatorMap[value]) {
            let res = operatorMap[value](stack.pop(), stack.pop())
            stack.push(res)
        } else {
            stack.push(Number(value))
        }
    })
    return Math.round(stack[0])
}
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))