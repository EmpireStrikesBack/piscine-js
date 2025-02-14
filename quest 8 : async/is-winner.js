async function isWinner(countryName){
    try {
            const country = await db.getWinner(countryName);
        if (!country){
            return `${countryName} never was a winner`;
        }
        if (country.continent != 'Europe'){
            return `${countryName} is not what we are looking for because of the continent`;
        }
        const results = await db.getResults(country.id);
        if (!results || results.length === 0){
            return `${countryName} never was a winner`;
        }
        if (results.length < 3){
            return `${countryName} is not what we are looking for because of the number of times it was champion`;
        }

        const years = results.map((result) => result.year).join(', ');
        const scores = results.map((result) => result.score).join(', ');
        return `${countryName} won the FIFA World Cup in ${years} winning by ${scores}`;
    } catch (e){
        if (e.message === 'Country Not Found'){
            return `${countryName} never was a winner`;
        } else if (e.message === 'Results Not Found'){
            return `${countryName} never was a winner`;
        } else {
            throw e;
        }
    }   
}