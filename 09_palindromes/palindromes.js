const palindromes = function (a) {
    const cleanedString = a.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = cleanedString.split('').reverse().join('');
    return cleanedString === reversed;
};

// Do not edit below this line
module.exports = palindromes;