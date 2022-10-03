// HOF = Higher Order function
// CBF = Call back Function

const sum = (a,b) => a+b ;// Callback Function
const sub = (a,b) => Math.abs(a-b) ;// Callback Function
const mul = (a,b) => a*b ;// Callback Function
const div = (a,b) => a/b ;// Callback Function

// console.log(sum(5,10));
// console.log(sub(5,10));
// console.log(mul(5,10));
// console.log(div(5,10));

const calculator = (a,b,operator) =>{
    return operator(a,b);
}
console.log(calculator(10,5,add));
