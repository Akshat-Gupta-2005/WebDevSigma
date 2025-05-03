const http = require('http');
const log = require('console').log;

const server = http.createServer((req, res) => {
    log(req.url , req.method); 

    res.setHeader('Content-Type', 'text/html');
    res.write("<p>Hello World</p>");
    res.write("<p>Hello again World</p>");
    res.end();
})

server.listen(3000, 'localhost', () => {
    console.log("Server is running on port 3000");
})