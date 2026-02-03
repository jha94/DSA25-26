const isValid = (s) => {
    const symbol = [];
    const symbolMap = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
    ])

    for (let char of s) {
        if (symbolMap.has(char)) {
            symbol.push(symbolMap.get(char))
        } else {
            if (char !== symbol.pop()) {
                return false
            }
        }
        // switch (char) {
        //     case '(':
        //         symbol.push(')')
        //         break;
        //     case '{':
        //         symbol.push('}')
        //         break;
        //     case '[':
        //         symbol.push(']')
        //         break;
        //     default:
        //         if (char !== symbol.pop()) {
        //             return false
        //         }
        // }
    }
    return symbol.length === 0
}

console.log(isValid("([{])"))