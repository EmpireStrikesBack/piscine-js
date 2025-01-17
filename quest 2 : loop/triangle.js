function triangle(char,x){
    let result = '';
    for (let i = 1; i <= x; i++){
        result += char.repeat(i) + '\n';
    }
    return result.trim();
}