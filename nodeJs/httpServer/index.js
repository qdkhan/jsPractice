const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello From the Other Side !!');
})
server.listen(8000, 'localhost', () => {
    console.log('We Are listening on the port number 8000');
});