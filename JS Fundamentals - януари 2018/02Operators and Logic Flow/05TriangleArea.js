function triangleArea (a,b,c) {
    let sp = (a+b+c)/2;
    /*HERON FORMULA*/
    return Math.sqrt(sp*(sp-a)*(sp-b)*(sp-c));

}
console.log(triangleArea(2,3.5,4));