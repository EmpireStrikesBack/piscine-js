const escapeStr = "\`\\/\"\'";
const arr = [4, '2'];
const obj ={str:"noob", num:4, bool:true, undef:undefined};

function deepFreeze(obj){
    const propNames = Object.getOwnPropertyNames(obj);

    for(const name of propNames) {
        const value = obj[name];
        if (value && typeof value == 'object') {
            deepFreeze(value);
        }
    }
    return Object.freeze(obj);
}
const nested = {arr:[4, undefined, '2'], obj:{str:"noob", num:4, bool:true}};
deepFreeze(nested);