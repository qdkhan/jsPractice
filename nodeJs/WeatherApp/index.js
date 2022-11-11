const fs = require('fs');
const http = require('http');
const requests = require('requests');

const homePage = fs.readFileSync('./index.html', 'utf8');

const replaceVal = (homePage, orgVal) => {
    let temperature = homePage.replace("{%temp%}", orgVal.main.temp);
    temperature = temperature.replace("{%temp_min%}", orgVal.main.temp_min);
    temperature = temperature.replace("{%temp_max%}", orgVal.main.temp_max);
    temperature = temperature.replace("{%name%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    return temperature;
}

const server = http.createServer((req, res) => {
    if(req.url=="/"){
        requests("https://api.openweathermap.org/data/2.5/weather?q=Balrampur&appid=13e2acafc2ba97405050dab0909e2396")
        .on('data', (chunk) => {
            const parseData = [JSON.parse(chunk)];
            // console.log(parseData[0].main.temp)
            const realTimeData = parseData.map((key, num) => replaceVal(homePage, key)).join("");
            res.write(realTimeData);
            // console.log(realTimeData);
            })
        .on('end', (err) => {
            if (err) return console.log('connection closed due to errors', err);
            console.log('end');
            res.end();
        });
    }
})

server.listen(8000, 'localhost', ()=>{
    console.log('We Are listening on http://localhost:8000')
})