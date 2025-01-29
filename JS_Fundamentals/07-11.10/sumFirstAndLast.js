function sumFirstAndLast(arr) {
    let newArr=arr.map(x=>Number(x));
    let firstElement=newArr.shift();
    let lastElement=newArr.pop();
    console.log(firstElement+lastElement);
}
sumFirstAndLast(['20', '30', '40'])