var is = {};
is.arr = (n) => Array.isArray(n);
is.obj = (n) => 
    typeof n === 'object' &&
!is.fun(n) &&
!is.arr(n) && 
n !== null && 
!(n instanceof RegExp);
is.fun = (n) => typeof n === 'function';

function replica(target, ...sources){
    sources.forEach((source) => {
        Object.entries(source).forEach(([key, value]) => {
            if (is.obj(value)){
                if (!target.hasOwnProperty(key) || !is.obj(target[key])){
                    target[key] = {};
                }
                replica(target[key], value);
            } else {
                target[key] = value;
            }
        });
    });
    return target;
}