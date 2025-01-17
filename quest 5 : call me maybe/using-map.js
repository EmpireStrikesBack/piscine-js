/* extracts the property of the city from each object in the input array
    const data = [
        { city: "New York", state: "new york", temperature: "32 °F" },
        { city: "Los Angeles", state: "california", temperature: "75 °F" },
    ];
    console.log(citiesOnly(data)); // Output: ["New York", "Los Angeles"]
*/
function citiesOnly(arr) {
    return arr.map((item) => item.city); 
}
/* 
    arr.map(item) : takes the array and iterates over the array + creates a new array containing only the city names
    item.city : acess the city property of each object
*/



/* converts all state names in the array of title case (first character of each word is capitalized 
    const states = ["new york", "california", "texas"];
    console.log(upperCasingStates(states)); // Output: ["New York", "California", "Texas"]
*/
function upperCasingStates(arr) {
    return arr.map((item) =>
        item
            .split(" ")
            .map((word) => {
                return word[0].toUpperCase() + word.slice(1);
            })
            .join(" ")
    );
}
/* 
    arr.map() : takes the arary and iterates over it to create a new array containing capitalized words
    .split(" ") : splits the string into an array of words using spaces as delimiters : "new york" => "new", "york"
*/


/* converts array of temperature strings from farhenheit to celcius and appends 'C' 
    const temps = ["32°F", "75°F", "100°F"];
    console.log(fahrenheitToCelsius(temps)); // Output: ["0°C", "24°C", "37°C"]
*/
function fahrenheitToCelsius(arr) {
    return arr.map(
        (item) =>
            Math.floor((Number(item.slice(0, -2)) - 32) * (5 / 9)).toString() +
            "°C"
    );
}

/* removes extra spaces in the remperature property of objects in the input array
    const data = [
    { city: "New York", state: "new york", temperature: "32 °F" },
    { city: "Los Angeles", state: "california", temperature: "75 °F" },
];
    console.log(trimTemp(data));
    // Output:
    // [
    //     { city: "New York", state: "new york", temperature: "32°F" },
    //     { city: "Los Angeles", state: "california", temperature: "75°F" },
    // ]
*/ 
function trimTemp(arr) {
    return arr.map((item) => {
        item.temperature = item.temperature.replaceAll(" ", "");
        return item;
    });
}

/* generate a stirng for each object in the array describing the temperature in °C and its location (state name in title case) 
    const data = [
    { city: "New York", state: "new york", temperature: "32°F" },
    { city: "Los Angeles", state: "california", temperature: "75°F" },
];
    console.log(tempForecasts(data));
    // Output:
    // [
    //     "0°Celsius in New York, New York",
    //     "24°Celsius in Los Angeles, California"
    // ]
*/
function tempForecasts(arr) {
    return arr.map((item) => {
        return `${
            Math.floor(
                (Number(item.temperature.slice(0, -2)) - 32) * (5 / 9)
            ).toString() + "°Celsius"
        } in ${item.city}, ${item.state
            .split(" ")
            .map((word) => {
                return word[0].toUpperCase() + word.slice(1);
            })
            .join(" ")}`;
    });
}