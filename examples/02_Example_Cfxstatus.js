const cfx = require('cfx-data-fetcher');

async function main() {
    setInterval(async () => {
        const cfxs = await cfx.fetchCfxStatus();

        if(cfxs !== undefined)
            console.log(cfxs.isOnline() ? "All Cfx.re systems are operational" : "Cfx.re is experiencing issues");
        
    }, 1000);
}

main();
