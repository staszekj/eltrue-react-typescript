/**
 * This server is to run your build locally
 */

const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');
const serverApiProxyConfig = require('./server-api-proxy');

const port = process.env.PORT || 8080;
const app = express();

// serve static assets normally
app.use(express.static(`${__dirname}/public`));
app.use('/api', proxy(serverApiProxyConfig));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port);
console.log(`server started on port ${port}`);
