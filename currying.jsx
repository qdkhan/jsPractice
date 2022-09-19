// function getSum(a){
//     return function(b) {
//         return function(c) {
//             return function(d) {
//                 return function(e) {
//                     return function(f) {
//                         console.log(a+b+c+d+e+f)
//                     } 
//                 } 
//             } 
//         } 
//     } 
// }
// getSum(6)(5)(4)(3)(2)(1);

const getSum = (a) => (b) => (c) => (d) => (e) => (f) => console.log(a+b+c+d+e+f)

getSum(6)(5)(4)(3)(2)(1);