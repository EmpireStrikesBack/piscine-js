function pyramid(char, x){
    let result = '';
    const charWidth = char.length;
    for (let i = 1; i <= x; i++){
        let spaces = ' '.repeat((x - i) * charWidth);
        let chars = char.repeat(2 * i - 1);
        result += spaces + chars + '\n';
    }
    return result.trimEnd();
}