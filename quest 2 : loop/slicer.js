function slice(str, startIndex = 0, endIndex){
    const result = [];
    const isArray = Array.isArray(str);
    const length = str.length;

    startIndex = startIndex < 0 ? Math.max(length + startIndex, 0): Math.min(startIndex, length);
    endIndex = endIndex === undefined ? length : (endIndex < 0 ? Math.max(length + endIndex, 0) : Math.min(endIndex, length));

    for (let i = startIndex; i < endIndex; i++){
        result.push(str[i]);
    }
    return isArray ? result : result.join('');
}