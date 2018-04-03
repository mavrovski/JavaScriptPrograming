function concatenateReversed(arr) {
    result = arr.join('').split('').reverse().join('')
    return result
}
let string = concatenateReversed(["I","am","student"])
console.log(string)