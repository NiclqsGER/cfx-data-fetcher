
# CFX-Data-Fetcher (12/2022 Working!)

This package can help you to interact with Cfx.re.

<img align="right" src="jss://avatars.githubusercontent.com/u/25160833?s=200&v=4" height=15% width=15%>

<hr>
<br>

## How to install

```bash
npm i @niclqs/cfx-data-fetcher
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
```js
  server.getEndpoint()
```

### Returns: Gametype (e. g. Roleplay)
```js
  server.getGametype()
```

### Returns: getHostname (e. g. ^7YOURROLEPLAYSERVER ^5TEST-BASED)
```js
  server.getHostname()
```

### Returns: getMapname (e. g. San Andreas)
```js
  server.getMapname()
```

### Returns: getMapname (e. g. San Andreas)
```js
  server.getMapname()
```

### Returns: getPlayerCount (e. g. 10)
```js
  server.getPlayerCount()
```

### Returns: getMaxSlots (e. g. 1000)
```js
  server.getMaxSlots()
```

### Returns: getResources (As array; e. g. ["testscript1", "testscript2"])
```js
  server.getResources()
```

### Returns: getServerVersion (e. g. FXServer-master SERVER v1.0.0.5848 win32)
```js
  server.getServerVersion()
```

### Returns: getVars (As array; e. g. Voice, Discord, OneSync)
```js
  server.getVars()
```

### Returns: getOnlinePlayers (As array; A player includes: endpoint, id, identifiers, name and ping)
```js
  server.getOnlinePlayers()
```

### Returns: getServerOwnerId (Return the ID from the owner)
```js
  server.getServerOwnerId()
```

### Returns: getServerOwnerName (Return the Name from the owner)
```js
  server.getServerOwnerName()
```

### Returns: isServerPrivate (Return true or false)
```js
  server.isServerPrivate()
```

### Returns: getUpvotes (Current Upvotes)
```js
  server.getUpvotes()
```

### Returns: getBurstUpvotes (Current BurstUpvotes)
```js
  server.getBurstUpvotes()
```

### Returns: getServerPatreonBadge (NONE, AURUM, ARGENTUM, PLATINUM)
```js
  server.getServerPatreonBadge()
```

### Returns: getJson (Return everything about the Server; As with the master list also)
```js
  server.getJson()
```

<br>
<br>

# API Reference (CFX Status)
### 

### Returns: isOnline (True/False)
```js
  status.isOnline()
```

### Returns: getPageJson (e. g. latest update, time_zone, ...)
```js
  status.getPageJson()
```

### Returns: getStatusJson (indicator, description; e. g. All Systems Operational)
```js
  status.getStatusJson()
```
