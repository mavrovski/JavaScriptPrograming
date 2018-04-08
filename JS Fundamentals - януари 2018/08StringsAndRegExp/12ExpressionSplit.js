function exprSplit(str) {
    let regex = /[,;().\s+]+/
    str.split(regex).forEach(s => console.log(s))
}
let str = 'let sum = 1 + 2;if(sum > 2)'
exprSplit(str)