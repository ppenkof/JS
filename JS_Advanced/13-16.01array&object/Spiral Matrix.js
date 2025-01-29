function spiralMatrix(width,heigth) {
    
    let matrix = new Array(heigth).fill().map(()=>new Array(width).fill(0));
    let value=1;
    let leftLimit=0;
    let topLimit=0;
    let bottomLimit=heigth-1;
    let rightLimit=width-1;

    while(value<=width*heigth){

        for(let col=leftLimit;col<=rightLimit;col++){
            matrix[topLimit][col]=value++;
        }
        topLimit++;

        for (let row = topLimit; row <= bottomLimit; row++) {
            matrix[row][rightLimit] = value++;
        }
        rightLimit--;

    }

}
spiralMatrix(5,5)
