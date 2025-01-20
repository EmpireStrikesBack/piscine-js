function fusion(obj1, obj2){
    const fusioned = {};

    for (const key of Object.keys(obj1)){
        if (key in obj2) {
            if (is.obj(obj1[key]) && is.obj(obj2[key])){
                fusioned[key] = fusion(obj1[key], obj2[key]);
            } else if (is.arr(obj1[key]) && is.arr(obj2[key])){
                fusioned[key] = obj1[key].concat(obj2[key]);
            } else if (is.num(obj1[key]) && is.num(obj2[key])){
                fusioned[key] = obj1[key] + obj2[key];
            } else if (is.str(obj1[key]) && is.str(obj2[key])){
                fusioned[key] = obj1[key] + " " + obj2[key];
            } else {
                fusioned[key] = obj2[key];
            }
        } else {
            fusioned[key] = obj1[key];
        }
    }

    for (const key of Object.keys(obj2)){
        if (!(key in obj1)){
            fusioned[key] = obj2[key]
        }
    }
    return fusioned;
}

const is = {
    num: (n) => typeof n === "number",
    str: (n) => typeof n === "string",
    arr: (n) => Array.isArray(n),
    obj: (n) => typeof n === "object" && n !== null && !is.fun(n) && !is.arr(n),
    fun: (n) => typeof n === "function",
};