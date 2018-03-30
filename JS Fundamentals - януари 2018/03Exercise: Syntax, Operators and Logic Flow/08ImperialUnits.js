function imperialUnits(feet) {
    totalFeet =  parseInt(feet / 12)
    totalInches = feet % 12
    console.log(`${totalFeet}' -${totalInches}"`)
}
imperialUnits(36)