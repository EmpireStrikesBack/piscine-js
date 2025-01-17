function findExpression (number){
    function backtrack(current, steps) {
        if (current === number){
            return steps;
        }
        if (current > number){
            return undefined;
        }
        const addPath = backtrack(current + 4, steps + ' ' + add4);
        if (addPath){
            return addPath;
        }

        const mulPath = backtrack(current * 2, steps + ' ' + mul2);
        if (mulPath) {
            return mulPath;
        }
        return undefined;
    }
    return backtrack(1, '1');
}