const retry = (count = 3, callback = async () => {}) => {
    return async function (...args){
        try {
            const res = await callback(...args);
            return res;
        } catch (e) {
            if (count > 0){
                return retry(count - 1, callback)(...args);
            } else {
                throw e;
            }
        }
    };
};

const timeout = (delay = 0, callback = async () => {}) => {
    return async function(...args){
        const timeoutPromise = new Promise((resolve) => 
            setTimeout(resolve, delay, new Error('timeout'))
        );
        const functionCallPromise = new Promise((resolve) => 
            resolve(callback(...args))
        );
        const res = await Promise.race([timeoutPromise, functionCallPromise]).then(
            (result) => result 
        );
        if (res instanceof Error){
            throw res;
        }
        return res;
    };
};

