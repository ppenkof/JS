function triangleArea(side1, side2, side3) {
    let s = (side1 + side2 + side3) / 2;
    let itemParam = s*(s - side1) * (s - side2) * (s - side3);
    let triangleAr = Math.sqrt(itemParam);
    console.log(triangleAr);
}
triangleArea(3,5.5,4)
//3. 4994419197923547
//5.854685623498498