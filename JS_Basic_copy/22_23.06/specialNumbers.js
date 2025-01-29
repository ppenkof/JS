function specialNumbers(params) {
    let num = Number(params[0]);
    let index = 0;
    let digit = '';
    let counter = 0;
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {
                    if (num % l === 0 && num % k === 0 && num % j === 0 && num % i === 0) {
                        digit += `${i}`;
                        digit += `${j}`;
                        digit += `${k}`;
                        digit += `${l}`;
                        digit += ' ';
                    }
                }

            }
        }
    }
    console.log(digit);
}
specialNumbers(["16"])