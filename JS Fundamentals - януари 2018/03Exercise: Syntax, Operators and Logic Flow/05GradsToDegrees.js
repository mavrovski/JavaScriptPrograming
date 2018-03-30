function gradsToDegrees(grad) {
    let gradModular = grad % 400;
    let degree = gradModular * 0.9;
    return degree < 0 ? 360 + degree : degree;
}

let output = gradsToDegrees(['-50']);
console.log(output);