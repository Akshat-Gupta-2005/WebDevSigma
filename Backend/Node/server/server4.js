const http = require('http');
const fs = require('fs');
const log = require('console').log;

const server = http.createServer((req, res) => {
    // log("\n");
    log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    let path = './Node/views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301; // Moved Permanently
            res.setHeader('Location', '/about'); // Redirect to /about
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }


    fs.readFile(path, (err, data) => {
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
