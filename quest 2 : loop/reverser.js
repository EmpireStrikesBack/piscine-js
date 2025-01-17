function reverse(input){
    if (Array.isArray(input)) {
        let start = 0;
        let end = input.length - 1;
        while (start < end) {
            let temp = input[start];
            input[start] = input[end];
            input[end] = temp;
            start++;
            end--;
        }
        return input;
    }

    if (typeof input === 'string') {
        let result = '';
        for (let i = input.length - 1; i >= 0; i--) {
            result += input[i];
        }
        return result;
    }
    return input; 
}