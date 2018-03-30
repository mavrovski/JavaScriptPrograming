function assignProperties(propsArr) {
    return `{\n${propsArr[0]}: '${propsArr[1]}'\n${propsArr[2]}: '${propsArr[3]}'\n${propsArr[4]}: '${propsArr[5]}'\n}`
}

propsArr = ['name', 'Pesho', 'age', '23', 'gender', 'male']
console.log(assignProperties(propsArr));