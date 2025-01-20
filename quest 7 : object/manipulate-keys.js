function filterKeys(obj, predicate){
    return Object.keys(obj).reduce((res, key) => {
        if (predicate(key)){
            res[key] = obj[key];
        }
        return res;
    }, {});
}

function mapKeys(obj, callback){
    return Object.keys(obj).reduce((res, key) => {
        const newKey = callback(key);
        res[newKey] = obj[key];
        return res;
    }, {});
}

function reduceKeys(obj, callback, initialV){
    const keys = Object.keys(obj);
    let acc = initialV !== undefined ? initialV : keys[0];
    const startIndex = initialV === undefined ? 1 : 0;

    for (let i = startIndex; i < keys.length; i++){
        acc = callback(acc, keys[i]);
    }
    return acc;
}