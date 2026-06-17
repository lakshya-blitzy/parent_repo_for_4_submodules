// Node.js + Express.js tutorial server.
// Migrated from the built-in `http` module to the Express web framework while
// preserving the original runtime behavior (host, port, startup log, and the
// `GET /` greeting). A second `GET /good-evening` endpoint is added.
const express = require('express');

// Bind to the loopback interface only, so the server is not reachable from
// other hosts. These values are preserved exactly from the original tutorial.
const hostname = '127.0.0.1';
const port = 3000;

// Create the Express application instance.
const app = express();

// GET / -> original greeting, preserved for backward compatibility.
// Responds with HTTP 200, Content-Type text/plain, body "Hello, World!\n".
app.get('/', (req, res) => res.status(200).type('text/plain').send('Hello, World!\n'));

// GET /good-evening -> new greeting endpoint.
// Responds with HTTP 200, Content-Type text/plain, body "Good evening\n".
app.get('/good-evening', (req, res) => res.status(200).type('text/plain').send('Good evening\n'));

// Start the server on the configured host/port and log the startup banner.
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
