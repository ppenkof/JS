function tradeCommissions(params) {
    let city = params[0];
    let sales = Number(params[1]);
    let commision = 0;
    switch (city) {
        case "Sofia":
            if (sales>=0 && sales <= 500) {
                commision = sales * 0.05;
            } else if (sales>=0 && sales <= 1000) {
                commision = sales * 0.07;
            } else if (sales>=0 && sales <= 10000) {
                commision = sales * 0.08;
            } else if (sales > 10000) {
                commision = sales * 0.12;
            } else {
                console.log('error');
            break;
            }
            console.log(`${commision.toFixed(2)}`);
            break;

        case "Varna":
            if (sales>=0 && sales <= 500) {
                commision = sales * 0.045;
            } else if (sales>=0 && sales <= 1000) {
                commision = sales * 0.075;
            } else if (sales>=0 && sales <= 10000) {
                commision = sales * 0.1;
            } else if (sales > 10000) {
                commision = sales * 0.13;
            } else {
                console.log('error');
            break;
            }
            console.log(`${commision.toFixed(2)}`);
            break;

        case "Plovdiv":

            if (sales>=0 && sales <= 500) {
                commision = sales * 0.055;
            } else if (sales>=0 && sales <= 1000) {
                commision = sales * 0.08;
            } else if (sales>=0 && sales <= 10000) {
                commision = sales * 0.12;
            } else if (sales > 10000) {
                commision = sales * 0.145;
            } else {
                console.log('error');
               break; 
            }
            console.log(`${commision.toFixed(2)}`);
            break;

        default:
            console.log('error');
            break;
    }

}
tradeCommissions(["Sofia", "0.6"])