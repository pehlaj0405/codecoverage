const http = require('http');
const { add } = require('./math');
const { uppercase } = require('./string');

const port = process.env.PORT || 3000;

const requestHandler = (req, res) => {
  if (req.url === '/sum') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ result: add(2, 3) }));
  } else if (req.url === '/shout') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ result: uppercase('hello') }));
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from Node 20 LTS!');
  }
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = { requestHandler };
