function flags(obj){
    const res = {alias: {h: 'help'}};
    if (obj.length === 0) return res; // return early if the object is empty

    //build alias map from remaining properties
    const {help, ...rest} = obj;
    for (let key in rest){
        res.alias[key[0]] = key;
    }

    // build description for flags 
    const flagDescriptions = Object.keys(rest).map((key) => {
        let desc = rest[key];
        return `-${key[0]}, --${key}: ${desc}`;
    });

    // add description for help if available
    if (help){
        res.description = help.map((key) => {
            let desc = rest[key];
            return `-${key[0]}, --${key}: ${desc}`;
        });
    } else {
        res.description = flagDescriptions;
    }

    // return formatted description (string or joined list)
    if (res.description.length === 0){
        res.description = '';
    } else if (res.description.length === 1){
        res.description = res.description[0];
    } else {
        res.description = res.description.join('\n');
    }
    return res;
}