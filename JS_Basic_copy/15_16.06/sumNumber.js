function sumNumber(params) {
    let reference = Number(params[0]);
    let index = 1;
    let num = Number(params[index]);
    let sum = 0;

    while (sum < reference) { 
        num = Number(params[index]);
        sum +=num;
        index++;
    }
    console.log(sum);
}
sumNumber(["20", "1", "2", "3", "4", "5", "6"])