function flat(array, x=1){
    let result = [];

    function flatten(arr, currentX) {
        for (let item of arr){
            if (Array.isArray(item) && currentX > 0){
                flatten(item, currentX - 1);
            } else {
                result.push(item);
            }
        }
    }
    flatten(array, x);
    return result;
}
