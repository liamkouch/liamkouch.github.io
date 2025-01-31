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
        if (Number.isInteger(Math.sqrt(delta))) {
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

params = getRationalParameters(1, 10);
//sols = getRationalSolutions(params); // [ 2, 3, 2, 3, 1, 1 ]
console.log(params);