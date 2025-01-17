function mult2(x){
    return (y) => y * x;  
}

function add3(x){
    return function (y){
        return function (z){
            return x + y + z;
        };
    };
}

function sub4(x){
    return function (y) {
        return function (z) {
            return function (w) {
                return x - y - z - w;
            }
        }
    }
}