function sumPrimeNonPrime(params) {
    let index = 0;
    let num = params[index];
    let number = 0;
    let sumPrime = 0;
    let sumNonPrime = 0;
    let primeCounter = 0;
    let nonPrimeCounter = 0;
    let primeNum = 0;
    let nonPrimeNum = 0;

    while (num !== "stop") {
        //num = params[index];
        number = Number(num);
        if (number < 0) {
            console.log('Number is negative.');
            index++;
            num = params[index];
            continue;
        }
        for (let i = 2; i <= 9; i++) {
            if (i === number) {
                continue;
            }
            if (number % number === 0 && number % 1 === 0 && number % i !== 0) {
                primeNum = number;
                primeCounter++;
            } else if (number % number === 0 && number % 1 === 0 && number % i === 0) {
                nonPrimeNum = number;
                nonPrimeCounter++;
            } else { }

        }
        if (number === 1) {
            sumNonPrime++;
        }
        if (number === 0) {
            nonPrimeCounter++;
            nonPrimeNum = number;
        }
        if (nonPrimeCounter >= 1) {
            //console.log(`the non Prime num is: ${nonPrimeNum}`);
            sumNonPrime += nonPrimeNum;
        } else {
            //console.log(`the Prime num is: ${primeNum}`);
            sumPrime += primeNum;
        }
        nonPrimeCounter = 0;
        primeCounter = 0;
        index++;
        num = params[index];
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}
//sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
//sumPrimeNonPrime(["9", "4", "stop"]);
sumPrimeNonPrime(["30",

    "83",

    "33",

    "-1",

    "20",

    "stop"])