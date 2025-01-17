function repeat (str, nbr){
    if (typeof str !== 'string') {
        throw new Error ('first argument must be a string');
    } else if (typeof nbr !== 'number' || nbr < 0) {
        throw new Error ('second argument must be a non-negative number');
    }

    let result = '';
    for (let i = 0; i < nbr; i++){
        result += str;
    }
    return result;
}