
# CFX-Data-Fetcher (12/2022 Working!)

This package can help you to interact with Cfx.re.

<img align="right" src="https://avatars.githubusercontent.com/u/25160833?s=200&v=4" height=15% width=15%>

<hr>
<br>

## How to install

```bash
npm i cfx-data-fetcher
```

## Basic template:

```js
const cfx = require("cfx-api");

(async () => {
    const server = await cfx.fetchServerData('xxxxxx');
    const status = await cfx.fetchCfxStatus();
})();
```

<br>
<br>

# API Reference (Serverdata)
### 

### Returns: Endpoint (e. g. xxxxxx)
```http
  server.getEndpoint()
```

### Returns: Gametype (e. g. Roleplay)
```http
  server.getGametype()
```

### Returns: getHostname (e. g. ^7YOURROLEPLAYSERVER ^5TEST-BASED)
```http
  server.getHostname()
```

### Returns: getMapname (e. g. San Andreas)
```http
  server.getMapname()
```

### Returns: getMapname (e. g. San Andreas)
```http
  server.getMapname()
```

### Returns: getPlayerCount (e. g. 10)
```http
  server.getPlayerCount()
```

### Returns: getMaxSlots (e. g. 1000)
```http
  server.getMaxSlots()
```

### Returns: getResources (As array; e. g. ["testscript1", "testscript2"])
```http
  server.getResources()
```

### Returns: getServerVersion (e. g. FXServer-master SERVER v1.0.0.5848 win32)
```http
  server.getServerVersion()
```

### Returns: getVars (As array; e. g. Voice, Discord, OneSync)
```http
  server.getVars()
```

### Returns: getOnlinePlayers (As array; A player includes: endpoint, id, identifiers, name and ping)
```http
  server.getOnlinePlayers()
```

### Returns: getServerOwnerId (Return the ID from the owner)
```http
  server.getServerOwnerId()
```

### Returns: getServerOwnerName (Return the Name from the owner)
```http
  server.getServerOwnerName()
```

### Returns: isServerPrivate (Return true or false)
```http
  server.isServerPrivate()
```

### Returns: getUpvotes (Current Upvotes)
```http
  server.getUpvotes()
```

### Returns: getBurstUpvotes (Current BurstUpvotes)
```http
  server.getBurstUpvotes()
```

### Returns: getServerPatreonBadge (NONE, AURUM, ARGENTUM, PLATINUM)
```http
  server.getServerPatreonBadge()
```

### Returns: getJson (Return everything about the Server; As with the master list also)
```http
  server.getJson()
```

<br>
<br>

# API Reference (CFX Status)
### 

### Returns: isOnline (True/False)
```http
  status.isOnline()
```

### Returns: getPageJson (e. g. latest update, time_zone, ...)
```http
  status.getPageJson()
```

### Returns: getStatusJson (indicator, description; e. g. All Systems Operational)
```http
  status.getStatusJson()
```
