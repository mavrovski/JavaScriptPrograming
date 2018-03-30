function multiplicationTable([number]) {
    let output = `<table border='1'>\n`
    output += `<tr>\n`
    output += `<th>"x"</th>\n`
    for (let i = 1; i <= number; i++) {
        output += `<th>${i}</th>\n`
    }
    output += `</tr>\n`
    for (let i = 1; i <= number; i++) {
        output += `<tr>\n`
        output += `<th>${i}</th>>\n`

        for (let j = 1; j <= number; j++) {
            output += `<td>${j * i}</td >\n`
            
        }
        output += `</tr >\n`
    }
    output += `</table>\n`
console.log(output)
}
multiplicationTable([5])