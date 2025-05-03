const http = require('http');
const fs = require('fs');
const log = require('console').log;

const server = http.createServer((req, res) => {
    log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    fs.readFile('./Node/views/index.html', (err, data) => { 
        if (err) {
            log(err);
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    })
})

server.listen(3000, 'localhost', () => {
    console.log("Server is running on port 3000");
})
