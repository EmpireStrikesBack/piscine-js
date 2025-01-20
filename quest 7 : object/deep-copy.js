function deepCopy(input, seen = new WeakMap()){
    if (seen.has(input)){
        return seen.get(input);
    }
    if (Array.isArray(input)){
        const output = [];
        seen.set(input, output);
        for (let i = 0; i < input.length; i++){
            output[i] = deepCopy(input[i], seen);
        }
        return output;
    }
    if (isDefinitelyAnObject(input)){
        const output = {};
        seen.set(input, output);
        Object.keys(input).forEach(key => {
            output[key] = deepCopy(input[key], seen);
        });
        return output;
    }
    if (input instanceof Date){
        return new Date(input.getTime());
    }
    if (input instanceof RegExp){
        return new RegExp(input.source, input.flag);
    }
    return input;
}

function isDefinitelyAnObject(input){
    return (
        typeof input === "object" &&
        input !== null &&
        !(input instanceof Date) &&
        !(input instanceof RegExp)
    );
}