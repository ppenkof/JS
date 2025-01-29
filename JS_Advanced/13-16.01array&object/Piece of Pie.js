function pieceOfPie(pieArr,startFlavor,endFlavor) {
    const start=pieArr.indexOf(startFlavor);
    const end = pieArr.indexOf(endFlavor)+1;
    const result=pieArr.slice(start,end);
    return result;
}
console.log(pieceOfPie(['Pumpkin Pie',

'Key Lime Pie',

'Cherry Pie',

'Lemon Meringue Pie',

'Sugar Cream Pie'],

'Key Lime Pie',

'Lemon Meringue Pie'));