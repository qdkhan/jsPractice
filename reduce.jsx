var arr = [2,3,5,7];
// var sum = 0;
// arr.map((ele,num) =>{
//     sum +=ele;
//     console.log(Math.round(sum/arr.length));
// })

// const sum = arr.reduce((accum, currValue, currentIndex) =>{
//     return accum += currValue;
// });
// console.log(sum)

// const product = arr.reduce((accum, currValue, currentIndex) =>{
//     return accum * currValue;
// },2);
// console.log(product);


// Average One way
// const average = arr.reduce((accum, currValue, currentIndex) =>{
//     return accum + currValue;

// });
// console.log(average/arr.length);

// Average Second way
const average = arr.reduce((accum, currValue, currentIndex, array) =>{
    accum += currValue;
    if(currentIndex === array.length-1){
        return accum/(array.length);
    }
    return accum

});
console.log(average);


// const asa = arr.reduceRight((accum, currValue, currentIndex) =>{
//     return accum + currValue;
// });

// console.log(sum)