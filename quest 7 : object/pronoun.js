function pronoun(str){
    var obj = {};
    var arr = str.split("\n").join(" ").split(" ");
    const pronouns = ["i", "you", "he", "she", "it", "we", "they"];

    for (var i = 0; i < arr.length; i ++){
        const currentWord = arr[i].toLowerCase();

        if (pronouns.includes(currentWord)){
            obj[currentWord] = obj[currentWord] || {count: 0, word:[]};
            obj[currentWord].count++;
            const nextWord = findeNextWord(arr.slice(i));
            if (nextWord) obj[currentWord].word.push(nextWord);
        }
    }
    
    for (var key in obj){
        obj[key].word = obj[key].word.filter((x) => x !== undefined);
    }
    return obj;
}

function findeNextWord(arr){
    const pronouns = /^(i|you|he|she|it|we|they)$/i;
    for (var i = 1; i < arr.length; i++){
        if (pronouns.test(arr[i])){
            return;
        } else {
            return arr[i].replace(/,/, "");
        }
    }
}