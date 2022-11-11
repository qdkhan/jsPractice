const http = require('http');
const fs = require('fs');
const path = require('path');

const userPath = path.join(__dirname, '../UserAPI/userapi.json')

const data = fs.readFileSync(userPath, {encoding:'utf8', flag:'r'})

// fs.readFile(userPath, 'utf-8', (error, data) => {
//     res.end(data);
// })

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if(req.url == '/'){
        res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(data);
        // res.end('Hello from Home Page');
    } else if(req.url == '/about'){
        res.end('Welcome to about Page');
    } else if(req.url == '/userapi'){
        res.end('Welcome to USER API Page');
    }else if(req.url == '/login'){
        res.end('Welcome to Login Page');
    } else {
        res.writeHead(404, {'Content-Type' : 'text/html'});
        res.end('<h1> 404 URL not Found </h1>');
    }
})
server.listen(8001, 'localhost', () => {
    const data = fs.readFileSync(userPath, {encoding:'utf8', flag:'r'})
    console.log(data)
    console.log('We Are listening on the port number 8001');
}); 

