function sameAmount(input, regexA, regexB){
    const rA = new RegExp(regexA.source, regexA.flags.includes('g') ? regexA.flags : regexA.flags + 'g');
    const rB = new RegExp(regexB.source, regexB.flags.includes('g') ? regexB.flags : regexB.flags + 'g');
    const matchA = (input.match(rA) || []).length;
    const matchB = (input.match(rB) || []).length;
    return matchA === matchB;
}
