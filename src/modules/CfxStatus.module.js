const fetch = (url) => import('node-fetch').then(({default: fetch}) => fetch(url));

const CfxEndpoints = require('../constants/Endpoints');
const CfxStatus = require('../classes/CfxStatus.class');

class CfxStatusModule {
    static self = null;

    static get() {
        if(!this.self) 
            this.self = new CfxStatusModule();
        return this.self;
    }

    async fetchData() {
        try {
            const response = await fetch(CfxEndpoints.CFX_STATUS_SUMMARY);

            if(response.status !== 200) {
                return undefined;
            }

            let Page = undefined;
            let Status = undefined;
            
            await response.json().then(data => {
                Page = data.page;
                Status = data.status;
            });

            return new CfxStatus(Page, Status);
        } catch (error) {
            return undefined;
        }
    }
}

module.exports = CfxStatusModule;
