const reverseString = function(string) {
    let newString = string.split("");
    let reverseArray = newString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray
};

// Do not edit below this line
module.exports = reverseString;
