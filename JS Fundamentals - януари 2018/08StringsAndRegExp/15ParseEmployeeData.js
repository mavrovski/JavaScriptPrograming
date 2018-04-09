function parseEmpData(text) {
    let regex = /^([A-Z][A-Za-z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)/g

    for (let element of text) {
        let match = regex.exec(element)
        if (match){
            console.log(`Name: ${match[1]}\n`+
            `Position: ${match[3]}\n`+
            `Salary: ${match[2]} `)
        }
    }

}

parseEmpData(['Isacc - 1000 - CEO','Ko - 150 - Ne'])