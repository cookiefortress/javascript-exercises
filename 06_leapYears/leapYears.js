const leapYears = function(year) {

    if (year % 100 == 0) {
        if (year % 400 == 0) {
            return true;
        }
        return false;
    }
    else if (year % 4 == 0) {
        return true;
    }
    else if (!(year % 4 == 0)) {
        return false;
    }
    else if (!Number.isInteger(year)) {
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = leapYears;
