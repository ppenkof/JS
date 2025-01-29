function sumFirstLast(params) {
    const firstElement=Number(params.shift());
    const lastElement=Number(params.pop());
    return firstElement+lastElement;
}
console.log(sumFirstLast(['20', '30', '40']));