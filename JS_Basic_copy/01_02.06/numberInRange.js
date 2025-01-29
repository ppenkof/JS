function numberInRange(params) {
    let num = Number(params[0]);
    if (num <= 100 && num >= -100 && num != 0) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}
numberInRange(["25"])