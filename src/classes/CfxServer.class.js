const PatreonBadges = require('../constants/PatreonBadges');

class CfxServer {
    constructor(endpoint, data) {
        this.id = endpoint;
        this.data = data;
    }

    getEndpoint() {
        return this.id;
    }

    getGametype() {
        return this.data.gametype;
    }

    getHostname() {
        return this.data.hostname;
    }

    getMapname() {
        return this.data.mapname;
    }

    getPlayerCount() {
        return this.data.clients;
    }

    getMaxSlots() {
        return this.data.vars.sv_maxClients;
    }

    getResources() {
        return this.data.resources;
    }

    getServerVersion() {
        return this.data.server;
    }

    getVars() {
        return this.data.vars;
    }

    getOnlinePlayers() {
        return this.data.players;
    }

    getServerOwnerId() {
        return this.data.owner;
    }

    getServerOwnerName() {
        return this.data.ownerName;
    }

    isServerPrivate() {
        return this.data.private;
    }

    getUpvotes() {
        return this.data.upvotePower;
    }

    getBurstUpvotes() {
        return this.data.burstPower
    }

    getServerPatreonBadge() {
        return PatreonBadges[this.data.vars.premium] ?? PatreonBadges['none'];
    }

    getJson() {
        return this.data;
    }
}

module.exports = CfxServer;
