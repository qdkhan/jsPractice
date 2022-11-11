const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on("request", (req, res) => {
    //Read Data in Normal way
    // fs.readFile('./index.txt', 'UTF-8', (err, data) => {

    //     if(err) return console.log(err);
    //     // console.log(data);
    //     res.end(data);
    // })

    const rstream = fs.createReadStream('./index.txt');

    // rstream.on("data", (chunkdata) =>{ res.write(chunkdata) })
    // rstream.on("end", () =>{ res.end(); })
    // rstream.on('error', (err) => { console.log(err); res.end('File Not Found'); })

    //Third Way
    rstream.pipe(res);



})

server.listen(8002, 'localhost', () => {
    console.log(`We are listening on the port number 8002`);
})

// fs.mkdirSync('../WeatherApp');
// fs.writeFileSync('../WeatherApp/index.js', 'Dummy Text');
// fs.writeFileSync('../WeatherApp/index.html', 'Dummy Text');
