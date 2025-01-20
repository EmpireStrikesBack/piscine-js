function handleEntry(res, type, str, parseFunc){
    const [statement, response] = parseFunc(str);
    const key = statement.replaceAll(' ', '_').replace('?', '').replace('!', '').toLowerCase();

    res[type] ||= {};
    res[type][key] ||= { responses: [] };

    const statementKey = type === 'orders' ? 'order' : type === 'questions' ? 'question': 'affirmation';

    res[type][key][statementKey] = statement;
    res[type][key].responses.push(response);
}

function parseQuestionOrder(arr){
    const statement = arr.slice(1).join(' ').split('-')[0].slice(0, -1);
    const response = arr.slice(1).join(' ').split('-').slice(1).join('-').trim();
    return [statement, response.replace(/^Response:\s*/, "")];
}

function parseAffirmations(arr){
    const statement = arr.slice(1).join(' ').split('-')[0].slice(0, -1);
    const response = arr.slice(1).join(' ').split('-')[1].slice(1).trim();
    return [statement, response.replace(/^Response:\s*/, "")];
}

function neuron(arr){
    var res = {};

    arr.forEach(item => {
        const str = item.split(' ');
        if (/questions:/i.test(str[0])) {
            handleEntry(res, 'questions', str, parseQuestionOrder);
        } else if (/orders:/i.test(str[0])){
            handleEntry(res, 'orders', str, parseQuestionOrder);
        } else if (/affirmations:/i.test(str[0])){
            handleEntry(res, 'affirmations', str, parseAffirmations);
        }
    });
    return res;
}

