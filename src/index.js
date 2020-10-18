module.exports = function reverse (n) {
    let string = n.toString();
    let newNumber = '';
    for (let i = 0; i < string.length; i++){
        newNumber = `${string[i]}${newNumber}`;
    };
    return Number(newNumber);
};
