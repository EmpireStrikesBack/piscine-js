function cutFirst(str){
    let result = '';
    for (let i = 2; i < str.length; i++){
        result += str[i];
    }
    return result;
}

function cutLast(str){
    let result = '';
    for (let i = 0; i < str.length -2; i++){
        result += str[i];
    }
    return result;
}

function cutFirstLast(str){
    return cutFirst(cutLast(str));
}

function keepFirst(str){
    let result = '';
    for (let i = 0; i < Math.min(2, str.length); i++){
        result += str[i];
    }
    return result;
}

function keepLast(str){
    let result = '';
    for (let i = Math.max(0, str.length -2); i < str.length; i++){
        result += str[i];
    }
    return result;
}

function keepFirstLast(str){
    const firstPart = keepFirst(str);
    const secondPart = keepLast(str);

    if (str.length <4){
        return str;
    }
    return firstPart + secondPart;
}