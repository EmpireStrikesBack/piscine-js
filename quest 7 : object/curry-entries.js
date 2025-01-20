function defaultCurry(obj){
    return function (obj1){
        return {...obj, ...obj1};
    };
}

function mapCurry(func){
    return function (obj1){
        let res = {};
        for (let key in obj1){
            const [newKey, newValue] = func([key, obj1[key]]);
            res[newKey] = newValue;
        }
        return res;
    };
}

function reduceCurry(obj){
    return function(obj1, obj2){
        let res = obj2;
        for (let key in obj1){
            res = obj(res, [key, obj1[key]]);
        }
        return res;
    };
}

function filterCurry(obj){
    return function(obj1){
        let res = {};
        for (let key in obj1){
            if (obj([key, obj1[key]])){
                res[key] = obj1[key];
            }
        }
        return res;
    };
}


function reduceScore(obj, obj1){
    return reduceCurry((acc, [, v]) => 
        v.isForceUser ? acc + v.pilotingScore + v.shootingScore : acc
    )(obj, obj1);
}

function filterForce(obj, threshold = 80){
    return filterCurry(([, v]) => 
        v.isForceUser && v.shootingScore >= threshold
    )(obj);
}

function mapAverage(obj){
    let avgScores = mapCurry(([k, v]) => [
        k, 
        (v.pilotingScore + v.shootingScore) / 2,
    ])(obj);
    for (let key in avgScores){
        obj[key].averageScore = avgScores[key];
    }
    return obj;
}