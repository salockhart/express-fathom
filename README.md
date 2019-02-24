# Express Middleware for Fathom Analytics

[Fathom Analytics](https://github.com/usefathom/fathom)

## Usage

```
const express = require('express');
const fathom = require('express-fathom');

const app = express();

app.use(fathom({
    server: 'http://analytics-server.io',
    siteID: 'AAAA'
}))
```

## Options

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>server</code></td>
            <td><code>URL</code></td>
            <td>Required. The URL pointing to the Fathom installation</td>
        </tr>
        <tr>
            <td><code>siteID</code></td>
            <td><code>string</code></td>
            <td>Required. The ID specifying which site to record in Fathom</td>
        </tr>
    </tbody>
</table>