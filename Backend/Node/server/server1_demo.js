const http = require('http');
const log = require('console').log;

const server = http.createServer((req, res) => {
    log("Request made");
})

server.listen(3000, 'localhost', () => {
    console.log("Server is running on port 3000");
})