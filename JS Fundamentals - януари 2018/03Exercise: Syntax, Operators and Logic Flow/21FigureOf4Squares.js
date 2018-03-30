function figureSquares(n) {
    let checkEvenOrOdd = n % 2 == 1 ? n : n - 1;
    let line = `+` + ("-".repeat(n - 2)) + '+' + ("-".repeat(n - 2)) + '+'
    let secondLine = `|` + (" ".repeat(n - 2)) + `|` + (" ".repeat(n - 2)) + `|`
    for (let i = 1; i <= checkEvenOrOdd; i++) {
        if (i == 1 || i == Math.ceil(n / 2) || i == checkEvenOrOdd) {
            console.log(line)
        } else {
            console.log(secondLine)
        }

    }

}

figureSquares(10);