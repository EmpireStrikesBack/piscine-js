function arrToSet (x){
    return new Set(x);
}

function arrToStr (x){
    return x.join('');
}

function setToArr (x){
    return Array.from(x);
}

function setToStr (x){
    return Array.from(x).join('');
}

function strToArr (x){
    return Array.from(x);
}

function strToSet (x){
    return new Set(x);
}

function mapToObj (x){
    const obj = {};
    for (const [key, value] of x) {
        obj[key] = value;
    }
    return obj;
}

function objToArr (x){
    return Object.values(x);
}

function objToMap (x){
    const map = new Map();
    for (const key in x) {
        map.set(key, x[key]);
    }
    return map;
}

function arrToObj (x){
    const obj = {};
    x.forEach((value, index) => {
        obj[index] = value;
    });
    return obj;
}

function strToObj (x){
    const obj = {};
    Array.from(x).forEach((char, index) => {
        obj[index] = char;
    });
    return obj;
}

function superTypeOf (x){
    if (x === null) {
        return 'null';
    } else if (x === undefined) {
        return 'undefined';
    } else if (Array.isArray(x)) {
        return 'Array';
    }
    return Object.prototype.toString.call(x).slice(8, -1);
}