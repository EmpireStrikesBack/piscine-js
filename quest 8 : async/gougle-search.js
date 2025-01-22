async function queryServers(serverName, q){
    const url = `/${serverName}?q=${encodeURIComponent(q)}`;
    const backupUrl = `/${serverName}_backup?q=${encodeURIComponent(q)}`;
    try {
        return await Promise.race([getJSON(url), getJSON(backupUrl)]);
    } catch (error){
        throw new Error(`Failed to quesry ${serverName}: ${error.message}`);
    }
}

async function gougleSearch(q){
    const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('timeout')), 80)
    );
    try  {
        const allQueries = Promise.all([
            queryServers('web', q),
            queryServers('image', q),
            queryServers('video', q),
        ]);
        const res = await Promise.race([timeoutPromise, allQueries]);
        return {web: res[0], image: res[1], video: res[2]};
    } catch (error){
        throw error;
    }
}