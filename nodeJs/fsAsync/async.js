const fs = require('fs');
//Asynchronus Way
// const data = fs.readFileSync('index.txt', 'utf8');
// console.log(data);
// console.log('Data Retrived Succesfully');


//Synchronus Way
// fs.readFile('index.txt', 'utf8', function(err, data) {
//     console.log(data);
// });
// console.log('Data Retrived Succesfully');

// fs.rmdir('././Xipetech', (err, data) => {
//     console.log('File Deleted Successfully');
//     console.log(err);
// });

// fs.mkdir('./OsModule', (err)=>{
//     console.log('Folder Created Successfully');
// });
fs.writeFileSync('./OsModule/index.js', 'Index File');