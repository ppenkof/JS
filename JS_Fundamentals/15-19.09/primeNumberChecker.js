function primeNumberChecker(num) {
    let isPrimeNum = true;
    let result = 0;
    for (let divider = 2; divider <= 9; divider++) {
        if (num % divider === 0 && num !== divider) {
            result++;
        }
    }
        if(result!==0){
            isPrimeNum = false;
        }

    console.log(isPrimeNum ? 'true' : 'false');
}
primeNumberChecker(8)