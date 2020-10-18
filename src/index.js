module.exports = function reverse (n) {
    let string = Math.abs(n).toString();
    let newNumber = '';
    for (let i = 0; i < string.length; i++){
        newNumber = `${string[i]}${newNumber}`;
    };
    return Number(newNumber);
};
