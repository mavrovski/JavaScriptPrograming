function emailMatch(str) {
let regex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/
    if (regex.test(str)){
    console.log("Valid")
    }else {
    console.log("Invalid")
    }
}
let invalidEmail = 'invalid@emai1.com'
let validEmail = 'svalid@email.com'
emailMatch(validEmail)