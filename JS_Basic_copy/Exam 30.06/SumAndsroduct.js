function sumAndProduct(params) {
    let n = Number(params[0]);
    let sum = '';
    let N = '';
    N = `${n}`;
    let isNotFound = true;


    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d >= c; d--) {
                    let suming=a + b + c + d;
                    let multiplication=a * b * c * d;
                    let dividing=Math.floor(multiplication/suming)
                    if ((suming===multiplication) && (N.charAt(N.length-1) === '5')) {
                        sum = `${a}`;
                        sum += `${b}`;
                        sum += `${c}`;
                        sum += `${d}`;
                        console.log(sum);
                        sum = '';
                        return;
                    } else if (dividing === 3 && (n % 3 === 0)) {
                        sum = `${d}`;
                        sum += `${c}`;
                        sum += `${b}`;
                        sum += `${a}`;
                        console.log(sum);
                        sum = '';
                        return;
                    } else {
                        isNotFound = false;                  
                    }
                }
            }
        }
    }
    if (!isNotFound) { console.log('Nothing found'); }
}
sumAndProduct(["125"])