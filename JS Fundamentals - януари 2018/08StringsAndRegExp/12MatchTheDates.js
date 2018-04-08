function matchDate(text) {
    let dateRegex = /\d{1,2}-\w{3}-\d{4}/g
    console.log(text.match(dateRegex))
}
text = "I was born at 14-Jun-1980"
matchDate(text)