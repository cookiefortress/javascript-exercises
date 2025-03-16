const reverseString = function(word) {
    let reversedWord = "";
    
    for (let i = 1; i <= word.length; i++) {
        reversedWord = reversedWord + [word[word.length - i]];
    }

    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
