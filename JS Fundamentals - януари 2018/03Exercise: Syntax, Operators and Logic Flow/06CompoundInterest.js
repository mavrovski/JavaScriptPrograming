function compoundInterest(data) {

    let sum = data[0]
    let interestRate = data[1]/100
    let frequency = 12/data[2]
    let years = data[3]

    let formula = sum * Math.pow(1+interestRate/frequency,frequency*years)
    console.log(Math.round(formula*100)/100)
}



compoundInterest(['1500','4.3','3','6'])