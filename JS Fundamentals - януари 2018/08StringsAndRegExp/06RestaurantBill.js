function bill(arr) {
    let products = arr.filter((str,i) => i % 2 === 0).join(', ')
    let sum = arr.filter((str,i) => i % 2 !== 0)
        .map(str => Number(str)).reduce((a,b) => a+b)


    console.log(`You purchased ${products} for total sum of ${sum}`)
}
arr = ['Beer Zagorka','2.65','Tripe soup','7.80','Lasagna','5.69']
bill(arr)
