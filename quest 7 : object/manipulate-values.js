function filterValues(obj, callback){
    let resa = {};
    for (let key in obj){
        if (obj.hasOwnProperty(key) && callback(obj[key])){
            resa[key] = obj[key];
        }
    }
    return resa;
}

function mapValues(obj, callback){
    let resa = {};
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            resa[key] = callback(obj[key]);
        }
    }
    return resa;
}

function reduceValues(obj, callback, acc){
    let keys = Object.keys(obj);
    if (acc === undefined){
        acc = keys.length ? obj[keys[0]] : undefined;
        keys = keys.slice(1);
    }
    for (let key of keys){
        if (obj.hasOwnProperty(key)){
            acc = callback(acc, obj[key]);
        }
    }
    return acc;
}
