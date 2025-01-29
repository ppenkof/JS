function loadingBar(num) {

    function increaseIndicator(num) {
        let indicator = ['[', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', ']'];
        if (num >= 10 && num <= 100 && num % 10 === 0) {
            let counter = num / 10;
            while (counter > 0) {
                indicator.pop();
                indicator.pop();
                indicator.push(']');
                indicator.shift('[')
                indicator.unshift('%');
                indicator.unshift('[');
                counter--;
            }
        } else {
            console.log('Indicator out of range');

        }
        return indicator;
    }

    let indicatorFilling = increaseIndicator(num);

    if (indicatorFilling[10] === '%') {
        console.log('100% Complete!');
        console.log(indicatorFilling.join(''));
    } else {
        if (num % 10 === 0) {
            console.log(`${num}% ${indicatorFilling.join('')}`);
            console.log('Still loading...');
        }
    }

}
loadngBar(100)