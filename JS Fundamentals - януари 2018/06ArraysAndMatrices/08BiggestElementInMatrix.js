function matrixMaxNum (matrix) {
    console.log(matrix.map(arr => arr.sort((a,b) => a<b)[0])
        .sort((a,b) => a<b)[0]
    );
}

function matrixMaxNumSecond (matrix){
    let biggestNum  = Number.NEGATIVE_INFINITY;
    matrix.forEach(
        r => r.forEach(
            c => biggestNum = Math.max(biggestNum,c)));
    return biggestNum
}

function matrixMaxNumThird   (matrix){
    let min = Number.NEGATIVE_INFINITY;
    for (let row = 0; row < matrix.length; row++) {
        for (let col  = 0; col < matrix[row].length; col++) {
            if (matrix[row][col]>min){
                min = matrix[row][col]
            }
        }
    }
    return min
}
matrix = [[100,200],[1,1000]];
matrixMaxNum(matrix);
console.log(matrixMaxNumSecond(matrix));
console.log(matrixMaxNumThird(matrix));
