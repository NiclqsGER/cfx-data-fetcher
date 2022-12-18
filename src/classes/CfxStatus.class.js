class CfxStatus {
    constructor(page, status) {
        this.page = page;
        this.status = status;
    }

    isOnline() {
        return this.status.indicator === 'none';
    }
    
    getPageJson() {
        return this.page;
    }

    getStatusJson() {
        return this.status;
    }
}

module.exports = CfxStatus;
