function sums(x){
    if (x <= 1) {
        return [];
    }
    const result = [];
    
    function findPartitions(target, start, current){
        if (target === 0 && current.length > 1){
            result.push([...current]);
            return;
        }
        for (let i = start; i <= target; i++){
            current.push(i);
            findPartitions(target - i, i, current);
            current.pop();
        }
    }
    findPartitions(x, 1, []);
    return result;
}