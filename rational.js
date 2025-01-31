function rando2(min, max) {
    let result = 0;
    while (result === 0) {
        result = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return result;
}

function getRationalParameters(min, max) {
    let arr = new Array(8);
    let start = true;
    while (start) {
        arr = arr.fill(0).map(() => rando2(min, max));
        //arr = [1, 0, 2, 3, -1, -7, 1, 3]
        //console.log(arr)
        let a = arr[2]*arr[6]-arr[0]*arr[6]-arr[2]*arr[4];
        let b = arr[2]*arr[7]+arr[3]*arr[6]-arr[0]*arr[7]-arr[1]*arr[6]-arr[2]*arr[5]-arr[3]*arr[4];
        let c = arr[3]*arr[7]-arr[1]*arr[7]-arr[3]*arr[5];
        //console.log(a, b, c)
        let delta = b*b - 4*a*c;

        if (Number.isInteger(Math.sqrt(delta))) {
            break;
        }
    }
    return arr;
}

function getRadicalParameters(min, max) {
    let arr = new Array(4);
    let start = true;
    while (true) {
        arr = arr.fill(0).map(() => rando2(min, max));
        let a = arr[0]*arr[0];
        if (a === 0) {
            continue;
        }
        let b = - (2 * arr[0] * arr[3] + arr[1]);
        let c = - arr[2] + arr[3] * arr[3];
        if (c === 0) {
            continue;
        }
        let delta = b*b - 4*a*c;
        if (Number.isInteger(Math.sqrt(delta)) && delta > 0) {
            break;
        }
    }
    return arr;
}

function getRadicalSolutions(arr) {
    let a = arr[0]*arr[0];
    let b = - (2 * arr[0] * arr[3] + arr[1]);
    let c = - arr[2] + arr[3] * arr[3];
    let delta = b*b - 4*a*c;
    let x1 = (-b + Math.sqrt(delta))/(2*a);
    let x2 = (-b - Math.sqrt(delta))/(2*a);
    let d = 2*a;
    let e = b - Math.sqrt(delta);
    let f = 2*a;
    let g = b + Math.sqrt(delta);
    let x1Label = "";
    let x2Label = "";
    //Check for extranesous solutions
    if (Math.abs(arr[0]*x1+Math.sqrt(arr[1]*x1+arr[2]) - arr[3]) > 0.0001) {
        x1Label = "(extraneous)";
    }
    if (Math.abs(arr[0]*x2+Math.sqrt(arr[1]*x2+arr[2]) - arr[3]) > 0.0001) {
        x2Label = "(extraneous)";
    }
    return [d, e, f, g, x1, x1Label, x2, x2Label];
}

function getRationalParameters2(min, max) {
    let arr = new Array(8);
    let start = true;
    let count = 0;
    for (let i = 0; i < 100; i++) {
        arr = arr.fill(0).map(() => rando2(min, max));
        //arr = [1, 0, 2, 3, -1, -7, 1, 3]
        //console.log(arr)
        let a = arr[2]*arr[6]-arr[0]*arr[6]-arr[2]*arr[4];
        let b = arr[2]*arr[7]+arr[3]*arr[6]-arr[0]*arr[7]-arr[1]*arr[6]-arr[2]*arr[5]-arr[3]*arr[4];
        let c = arr[3]*arr[7]-arr[1]*arr[7]-arr[3]*arr[5];
        //console.log(a, b, c)
        let delta = b*b - 4*a*c;
        if (Number.isInteger(Math.sqrt(delta)) && delta > 0) {
            count++;
        }
    }
    return count;
}
function getRationalSolutions(arr) {
    let a = arr[2]*arr[6]-arr[0]*arr[6]-arr[2]*arr[4];
    let b = arr[2]*arr[7]+arr[3]*arr[6]-arr[0]*arr[7]-arr[1]*arr[6]-arr[2]*arr[5]-arr[3]*arr[4];
    let c = arr[3]*arr[7]-arr[1]*arr[7]-arr[3]*arr[5];
    let delta = b*b - 4*a*c;

    let x1 = (-b + Math.sqrt(delta))/(2*a);
    let x2 = (-b - Math.sqrt(delta))/(2*a);
    let d = 2*a;
    let e = b - Math.sqrt(delta);
    let f = 2*a;
    let g = b + Math.sqrt(delta);
    return [d, e, f, g, x1, x2];
}

function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

params = getRationalParameters(1, 10);
//sols = getRationalSolutions(params); // [ 2, 3, 2, 3, 1, 1 ]
console.log(params);

params = getRadicalParameters(1, 10);
console.log(params);
console.log(getRadicalSolutions(params));

for (let i = 0; i < 20; i++) {
    let a = rando2(-50, 50);
    let b = rando2(-50, 50);
    console.log(a, b, gcd(a, b));
}