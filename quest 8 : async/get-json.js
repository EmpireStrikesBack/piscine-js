async function getJSON(path = '', params = ''){
    const url = path + '?' + Object.keys(params).map((key) => {
        const encodedKey = encodeURIComponent(key);
        const encodedValue = encodeURIComponent(params[key]).replace(/%20/g, '+');
        return `${encodedKey}=${encodedValue}`;
    }).join('&');
    try {
        const response = await fetch(url);
        if (!response.ok){
            throw new Error(response.statusText || `HTTP error! status: ${response.status}`);
        }
        const res = await response.json();
        if(res.error){
            throw new Error(res.error);
        }
        return res.data;
    } catch (error) {
        throw error;
    }
}