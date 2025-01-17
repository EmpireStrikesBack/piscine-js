function RNA(str){
    let result = [];
    for (let i = 0; i < str.length; i++){
        if (str[i] === 'G') {
            result.push('C');
        } else if (str[i] === 'T'){
            result.push('A');
        } else if (str[i] === 'C'){
            result.push('G');
        } else if (str[i] === 'A'){
            result.push('U');
        }
    }
    return result.join('');
}

function DNA(str){
    let result = [];
    for (let i = 0; i < str.length; i++){
        if (str[i] === 'C') {
            result.push('G');
        } else if (str[i] === 'A'){
           result.push('T');
        } else if (str[i] === 'G'){
            result.push('C');
        } else if (str[i] === 'U'){
            result.push('A');
        }
    }
    return result.join('');
}