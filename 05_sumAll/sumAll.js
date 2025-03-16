const sumAll = function(firstNum, secondNum) {
    let sum = 0;
    
    if (firstNum < 0 || secondNum < 0 || Number.isInteger(firstNum) == false || Number.isInteger(secondNum) == false) {
        return "ERROR";
    }
    else if (firstNum > secondNum) {
        for (let i = secondNum; i <= firstNum; i++) {
            sum += i;
        }
    }
    else if (secondNum > firstNum) {
        for (let i = firstNum; i <= secondNum; i++) {
            sum += i;
        }
    }
    else if (firstNum == secondNum) {
        sum = firstNum + secondNum;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
