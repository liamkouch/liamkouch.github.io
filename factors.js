function getPrimeFactorization(n) {
    let factorCounts = {};

    // Count factors of 2
    while (n % 2 === 0) {
        factorCounts[2] = (factorCounts[2] || 0) + 1;
        n = n / 2;
    }

    // Count odd factors from 3 onwards
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factorCounts[i] = (factorCounts[i] || 0) + 1;
            n = n / i;
        }
    }

    // If n is still greater than 2, it's a prime factor
    if (n > 2) {
        factorCounts[n] = (factorCounts[n] || 0) + 1;
    }

    return factorCounts;
}

function getFactors(n) {
    myList = getPrimeFactorization(n);
    let factors = [];
    let factor = 1;
    for (let i = 0; i < Object.keys(myList).length; i++) {
        
}

// Example Usage
let y = getPrimeFactorization(60)
console.log(y);  // Output: { '2': 2, '3': 1, '5': 1 }
console.log(Object.keys(y).length)
console.log(getPrimeFactorization(100)); // Output: { '2': 2, '5': 2 }
console.log(getPrimeFactorization(97));  // Output: { '97': 1 } (since 97 is prime)
