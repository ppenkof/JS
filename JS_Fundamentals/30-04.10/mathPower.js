function mathPower(num, power) {
    //let result = Math.pow(num, power);
    let powerABS = Math.abs(power);

    let result = 1;
    for (let i = 0; i < powerABS; i++) {
        result *= num;
    }
    power < 0 ? result = 1 / result : result;
    console.log(result);
}
mathPower(3, 2)