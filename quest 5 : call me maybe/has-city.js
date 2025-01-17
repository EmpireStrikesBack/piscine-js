function hasCity(country, arr){
    return function (city) {
        if (arr.indexOf(city) == -1) {
            return city + " is not a city from " + country;
        }
        return city + " is a city from " + country;
    };
}