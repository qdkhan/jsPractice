var arr = [2,3,5,7];
var sum = 0;
// arr.map((ele,num) =>{
//     sum +=ele;
//     console.log(Math.round(sum/arr.length));
// })

const asa = arr.reduceRight((accum, currValue, currentIndex) =>{
    return accum + currValue;

});

console.log(asa/arr.length)