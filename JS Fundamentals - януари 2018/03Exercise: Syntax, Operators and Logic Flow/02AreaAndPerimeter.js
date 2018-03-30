function areaAndPerimeter(sideA,sideB) {
    let area = (sideA*sideB).toFixed(2)
    let perimeter = 2*(sideA+sideB).toFixed(2)
    console.log(`${area}\n${perimeter}`)
}
areaAndPerimeter(2.5,3.14)