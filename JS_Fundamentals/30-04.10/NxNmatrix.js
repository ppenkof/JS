function NxNmatrix(num) {

    function printInline(params) {
        let inLine = '';
        for (let j = 1; j <= params; j++) {
            inLine += params + ' ';
        }
        return inLine;
    }
    let arrOfNumbers = printInline(num);
    for (let i = 1; i <= num; i++) {
        console.log(arrOfNumbers);
    }

}
NxNmatrix(25)