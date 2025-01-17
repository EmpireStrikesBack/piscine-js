function multiply(a,b) {
    let result = 0;
    const positive = b > 0;
    b = Math.abs(b);
    for (let i = 0; i < b; i++){
        result +=a;
    }
    return positive ? result : -result;
}

function divide(a,b) {
    if (b === 0) {
        throw new Error ("division by 0 isn't allowed");
    }
    let quotient = 0;
    const negative = (a<0) !== (b<0);
    a = Math.abs(a);
    b = Math.abs(b);
    while (a>=b) {
        a -=b;
        quotient ++;
    }
    return negative ? -quotient : quotient;
}

function modulo(a,b){
    if (b===0) {
        throw new Error("division by 0 isn't allowed");
    }
    const negative = a < 0;
    a = Math.abs(a);
    b = Math.abs(b);
    while (a >+b){
        a -=b;
    }
    return negative ? -a : a;
}