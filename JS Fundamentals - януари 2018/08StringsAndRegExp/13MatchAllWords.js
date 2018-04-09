function matchWords(text) {
    let regex = /[a-zA-Z0-9_]+/g
    let result = text.match(regex)
    console.log(result.join('|'))

}

text = 'A Regular Expression needs to have the global flag in order to match all occurrences in the text'
matchWords(text)