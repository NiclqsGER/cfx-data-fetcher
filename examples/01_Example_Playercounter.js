const cfx = require('cfx-data-fetcher');

async function main() {
    setInterval(async () => {
        const server = await cfx.fetchServerData('xxxxxx'); // replace xxxxxx with your server id (e. g. mmag79)

        if(server !== undefined)
            console.log(`${server.getPlayerCount()}/${server.getMaxSlots()}`)
        
    }, 1000);
}

main();
