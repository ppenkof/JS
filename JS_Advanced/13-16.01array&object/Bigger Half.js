function biggerHalf(params) {
    params.sort((a,b)=>a-b);
    const middle=Math.floor(params.length/2);
    const result=params.slice(middle);
    return result;
}
biggerHalf([3, 19, 14, 7, 2, 19, 6])