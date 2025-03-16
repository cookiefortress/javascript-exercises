const removeFromArray = function(array, ...args) {
    for (i=0; i < array.length; i++) { // loop through all array elements
        for (const argument of args) { // loop through all arguments
            if (array[i] === argument) { // if the array element is equivalent to the argument...
                array.splice(array.indexOf(argument), 1); // splice that argument
                i -= 1;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
