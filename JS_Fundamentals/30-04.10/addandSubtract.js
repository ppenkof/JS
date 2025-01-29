function addAndSubtract(num1, num2, num3) {

    // let tempSum =sum(num1, num2);
    // let result=subtract(tempSum,num3);
    // console.log(result);

    // function sum(a, b) {
    //     return a + b;
    // }

    // function subtract(x, y) {
    //     return x - y;
    // }
    let sum = (x, y) => x + y;
    let subtract = (x, y) => x - y;
    let tempSum =sum(num1, num2);
    let result=subtract(tempSum,num3);
    console.log(result);
}
addAndSubtract(1,
    17,
    30
)