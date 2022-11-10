const path = require('path');
const dirname = path.dirname('/var/www/html/Self_practice/jsPractice/nodeJs/PathModule/index.js')
// console.log(dirname);
const extname = path.extname('/var/www/html/Self_practice/jsPractice/nodeJs/PathModule/index.js');
// console.log(extname);
const basename = path.basename('/var/www/html/Self_practice/jsPractice/nodeJs/PathModule/index.js');
// console.log(basename);
const parse = path.parse('/var/www/html/Self_practice/jsPractice/nodeJs/PathModule/index.js');
console.log(parse);