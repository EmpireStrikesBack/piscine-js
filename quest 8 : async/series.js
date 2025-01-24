async function series(arr){
    const result = [];
    for (const item of arr){
        if (typeof item !== 'function'){
            throw new Error('All items in the array must be functions');
        }
        result.push(await item());
        }
        return result;
    }
    
