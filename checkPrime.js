var prime = [];
for(let i = 1; i < 20; i++) {
    for(let j = 2; j < i; j++) {
        if(i%j == 0){
            prime = [...prime, i];
        }
    }
}

console.log( [...new Set(prime)]);
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