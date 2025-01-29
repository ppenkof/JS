function computerFirm(params) {
    let models = Number(params[0]);
    let ratingModel = params[1];
    let sales = '';
    let rating = '';
    let salesNum = 0;
    let ratingNum = 0;
    let percent = 0;
    let realSalesPerModel = 0;
    let realSales = 0;
    let ratingSum = 0;
    let averageRating = 0;



    for (let i = 1; i <= models; i++) {
        ratingModel = params[i];
        for (let j = 0; j < ratingModel.length; j++) {
            if (j < 2) {
                sales += `${ratingModel.charAt(j)}`;
            } else {
                rating += `${ratingModel.charAt(j)}`;
            }
        }
        salesNum = Number(sales);
        ratingNum = Number(rating);
        if (ratingNum == 2) {
            percent = 0;
        } else if (ratingNum == 3) {
            percent = 0.5;
        } else if (ratingNum == 4) {
            percent = 0.7;
        } else if (ratingNum == 5) {
            percent = 0.85;
        } else if (ratingNum == 6) {
            percent = 1;
        }
        realSalesPerModel = percent * salesNum;
        realSales += realSalesPerModel;
        ratingSum += ratingNum;
        sales = '';
        rating = '';
        salesNum = 0;
        ratingNum = 0;
    }
    averageRating = ratingSum / models;
    console.log(realSales.toFixed(2));
    console.log(averageRating.toFixed(2));
}
computerFirm(["3",
"103",
"103",
"103"]);