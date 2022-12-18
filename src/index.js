const ServerFetcherModule = require('./modules/ServerFetcher.module.js')
const CfxStatusModule = require('./modules/CfxStatus.module.js')

async function fetchServerData(id) {
    return await ServerFetcherModule.get().fetchData(id);
}

async function fetchCfxStatus() {
    return await CfxStatusModule.get().fetchData();
}

module.exports = {
    fetchServerData,
    fetchCfxStatus
}
