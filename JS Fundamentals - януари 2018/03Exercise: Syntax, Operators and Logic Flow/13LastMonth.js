function lastMonthDays(date) {
    let days = date[0]
    let month = date[1]
    let year = date[2]

    let newDate = new Date(year,month-1,0)
    let daysCount = newDate.getDate()
    return daysCount
}

console.log(lastMonthDays([13, 12, 2004]));