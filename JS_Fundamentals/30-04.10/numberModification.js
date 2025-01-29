function numberModification(num) {

    function findAverageValue(number) {
        let averageValue = 0;
        let numArr = number.toString().split('').map(Number);
        while (averageValue < 5) {
            let sum = 0;
            for (let i = 0; i < numArr.length; i++) {
                let currDig = Number(numArr[i]);
                sum += currDig;
            }
            averageValue = sum / numArr.length;
            if (averageValue < 5) {
                numArr.push(9);
            }
            averageValue = sum / numArr.length;
        }
        return numArr.join('');
    }
    let averageNum = findAverageValue(num);
    console.log(averageNum);
}
numberModification(222)