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

function getFactors_helper(val, pos, n, factorization) {
    //console.log("hello:", val, pos, n, factorization);
    if (pos === n) {
        //console.log("return val:", val);
        return [val];
    }
    let factors = [];
    let factor = val;
    let keys = Object.keys(factorization);
    for (let i = 0; i <= factorization[keys[pos]]; i++) {
        factors = factors.concat(getFactors_helper(factor, pos + 1, n, factorization));
        factor *= keys[pos];
    }
    return factors
}

function getFactors(n) {
    if (n < 0) {
        n = -n;
    }
    let factorization = getPrimeFactorization(n);
    return getFactors_helper(1, 0, Object.keys(factorization).length, factorization);
}

// Example Usage
let x = getPrimeFactorization(9);
let y = getPrimeFactorization(6);
let f = getFactors(60);
console.log(f); // Output: [ 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60 ]

// accept only positive x but y can be negative
function getExpansions(x, y){
    let flag = false;
    if (y < 0) {
        flag = true;
    }
    let factors1 = getFactors(x).sort();
    let factors2 = getFactors(y).sort();
    console.log(factors1);
    console.log(factors2);
    let count = 0;
    for (let i = 0; i <= Math.floor((factors1.length - 1) / 2); i++) {
        for (let j = 0; j <= Math.floor((factors2.length - 1) / 2); j++) {
            let d = factors1[i];
            let e = factors2[j];
            let f = factors1[factors1.length - 1 - i];
            let g = factors2[factors2.length - 1 - j];
            if (flag === true) {
                e = -e;
            }
            if (d == f && Math.abs(e) == g) {
                if (flag) {
                    console.log("(" + d + "x - " + Math.abs(e) + ")(" + f + "x - " + g + ")");
                } else {

                }
            } else if (d == f && Math.abs(e) != g) {
                
            } else if (d != f && Math.abs(e) == g) {
                
            } else {

            }
            console.log("(" + d + "x + " + e + ")(" + f + "x + " + g + ")");
            console.log("(" + d + "x - " + e + ")(" + f + "x - " + g + ")");
            console.log("(" + d + "x + " + g + ")(" + f + "x + " + e + ")");
            console.log("(" + d + "x - " + g + ")(" + f + "x - " + e + ")");
            count += 4;
        }
    }
    console.log("Total expansions: ", count);
}
getExpansions(4, -6); 
