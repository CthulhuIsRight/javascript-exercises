const removeFromArray = function(array, ...elements) {
    return array.filter(item => !elements.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
