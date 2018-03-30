function round([number,precision]) {
    if (precision > 15) {
        precision = 15
    }
    let multiplier =  Math.pow(10, precision);
    return  Math.round(number * multiplier) / multiplier
}

console.log(round(['3,14159265358979323846264338', '2']));