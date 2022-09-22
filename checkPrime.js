// var prime = [];
// for(let i = 1; i < 20; i++) {
//     for(let j = 2; j < i; j++) {
//         if(i%j == 0){
//             prime = [...prime, i];
//         }
//     }
// }

// console.log( [...new Set(prime)]);
// console.log([...new Set(nonPrime)]);

// function getPrimes(max) {
//     var sieve = [], i, j, primes = [];
//     for (i = 2; i <= max; ++i) {
//         if (!sieve[i]) {
//             // i has not been marked -- it is prime
//             primes.push(i);
//             for (j = i << 1; j <= max; j += i) {
//                 sieve[j] = true;
//             }
//         }
//     }
//     return primes;
// }
// console.log(getPrimes(10));

var arr1 = [1,2,3,8]

const findSum = (arr1)=> {
    var sum = 10;
    for(let value of arr1){
        for(let val  of arr1){
            if(val+value == sum){
                // console.log(true)
            }
        }
    }
}
findSum(arr1)

var x =1 , y = 1;
x
++
y
console.log(x);
console.log(y);