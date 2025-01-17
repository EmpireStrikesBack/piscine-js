function letterSpaceNumber(input){
    const regex = /[a-zA-Z] \d(?![a-zA-Z0-9])/g;
    const matches = input.match(regex);
    return matches || [];
}