const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    let result = string.repeat(num)
    return result
/*     for (let i = 0; i <= num; i++){
        console.log(result);
    } */
};

// Do not edit below this line
module.exports = repeatString;
