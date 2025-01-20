function pick(obj, keys){
    const picked = {};
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            if (typeof keys === "string"){
                if (key === keys){
                    picked[key] = obj[key];
                }
            } else {
                if (keys.includes(key)){
                    picked[key] = obj[key];
                }
            }
        }
    }
    return picked;
}

function omit(obj, keys){
    const omitted = {};
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
                if (typeof keys === "string") {
                    if (key !== keys) {
                        omitted[key] = obj[key];
                    }
                } else {
                    if (!keys.includes(key)) {
                        omitted[key] = obj[key];
                    }
                }
            } 
        }
    return omitted;
}