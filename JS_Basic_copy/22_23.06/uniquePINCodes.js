function uniquePINCodes(params) {
    let index = 2;
    let limitFirstNum = Number(params[0]);
    let limitSecondNum = Number(params[1]);
    let limitThirthNum = Number(params[2]);
    let isPrimeNum = true;

    for (let a = 1; a <= limitFirstNum; a++) {
        if (a % 2 === 0) {
            for (let b = 2; b <= limitSecondNum; b++) {
                for (index = 2; index <= b; index++) {
                    if (b === index && b>2) { continue; }
                    if (b/1===b && b/b==1 && b % index === 0 && b>2) {
                        isPrimeNum = false;
                    }
                    if (isPrimeNum) {
                        for (let c = 1; c <= limitThirthNum; c++) {
                            if (c % 2 === 0) {
                                console.log(`${a} ${b} ${c}`);
                            }
                        }
                        isPrimeNum = false;
                    }
                }
                isPrimeNum = true;
            }
        }
    }

}
uniquePINCodes(['7', '7', '7']);