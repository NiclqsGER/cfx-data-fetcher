const fetch = (url) => import('node-fetch').then(({default: fetch}) => fetch(url));

const CfxEndpoints = require('../constants/Endpoints');
const CfxServer = require('../classes/CfxServer.class');

class ServerFetcherModule {
    static self = null;

    static get() {
        if(!this.self) 
            this.self = new ServerFetcherModule();
        return this.self;
    }

    async fetchData(id) {
        try {
            const response = await fetch(CfxEndpoints.CFX_MASTERLIST + id);

            if(response.status !== 200) {
                return undefined;
            }

            let EndPoint = undefined;
            let Data = undefined;
            
            await response.json().then(data => {
                EndPoint = data.EndPoint;
                Data = data.Data;
            });

            return new CfxServer(EndPoint, Data);
        } catch (error) {
            return undefined;
        }
    }
}

module.exports = ServerFetcherModule;
