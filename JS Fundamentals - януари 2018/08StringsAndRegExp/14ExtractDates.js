function matchDates(text){
    let regex = /\b([0-9]{1,2})-([A-Z][a-z]{2,2})-([0-9]{4,4})/gm
    let match = regex.exec(text)
    while (match){
        console.log(`${match[0]} (Day: ${match[1]}),Month: ${match[2]},Year: ${match[3]}`)
        match = regex.exec(text)
    }

}
matchDates('I am born on 30-Dec-1994.\n'+
    'This is not date: 215-Jan-1996\n'+
    'I am born on 30-Dec-1998.\n')
