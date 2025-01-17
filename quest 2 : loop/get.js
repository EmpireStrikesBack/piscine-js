function get(src, path){
    let keys = path.split('.');
    let result = src;

    for (let key of keys) {
        if (result === null || result === undefined) {
            return undefined;
        }
        result = result[key];
    }
    return result;
}