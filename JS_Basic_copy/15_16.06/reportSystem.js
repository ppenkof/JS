function reportSystem(params) {
    let sum = Number(params[0]);
    let index = 1;
    let payment = params[index];
    let paymentSum = 0;
    let isSold = true;
    let isFailed = true;
    let paymentCS = 0;
    let paymentCC = 0;
    let paymentCScounter = 0;
    let paymentCCcounter = 0;

    while (sum >= paymentSum) {
        payment = params[index];
        if (payment !== "End") {
            payment = Number(params[index]);
            if (index >= params.length) { break; }
            if (index % 2 !== 0 && payment <= 100) {
                console.log("Product sold!");
                paymentCS += payment;
                paymentCScounter++;
            } else if (index % 2 === 0 && payment >= 10) {
                console.log("Product sold!");
                paymentCC += payment;
                paymentCCcounter++;
            } else {
                isSold = false;
                console.log("Error in transaction!");
            }
        } 
        else {
            console.log("Failed to collect required money for charity.");
            isFailed = false;
            break;
        }
        if (isSold) {
            paymentSum += payment;
            isSold = true;
        }
        index++;
    }
    let avarageCS = paymentCS / paymentCScounter;
    let avarageCC = paymentCC / paymentCCcounter;
    if (isFailed) {
        console.log(`Average CS: ${avarageCS.toFixed(2)}`);
        console.log(`Average CC: ${avarageCC.toFixed(2)}`);
    }

}
reportSystem(["600", "86", "150", "98", "227", "End"])
