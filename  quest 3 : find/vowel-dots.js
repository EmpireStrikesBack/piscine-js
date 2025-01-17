const vowels = /[aeiouAEIOU]/g;

function vowelDots(input){
    const matches = input.replace(vowels, (match)=> match + '.');
    return matches;
}