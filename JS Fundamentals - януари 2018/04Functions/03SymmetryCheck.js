function isPalindrome(a) {
    return a.split('').reverse().join("") === a;
}

console.log(isPalindrome("racecar"));