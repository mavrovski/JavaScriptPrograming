function evenPositions(arr) {
console.log(arr.filter((el,i) => {
   return i % 2 === 0
}).join(' '))
}
evenPositions([1,2,3,4,5])