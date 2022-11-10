const fs = require('fs');
// fs.writeFile('index.txt', 'India Will Win World Cup Final in 2022 Again', (err) => {
//     console.log('File Created Successfully');
// });
// fs.writeFileSync('index.txt', 'India Will Win World Cup Final');
// fs.unlinkSync('index.txt');
// fs.appendFile('index.txt', 'Here Are Some Lorem Ipsum Dummy Text', (err) => {
//     console.log('File Updated Successfully');
// })

fs.readFile('index.txt', 'UTF8', (error, data) => {
    // var data = data.toString();
    console.log(data);
})