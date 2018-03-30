function imageHTML(imageName) {
    let src = imageName[0]
    let alt = imageName[1]
    return `<img src="${src}" alt="${alt}">`
}

imageName = ['smiley.gif', 'Smiley Face']
console.log(imageHTML(imageName));