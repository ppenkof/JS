function shootForTheWin(arr) {
    let targetSeq = arr.shift().split(' ').map(x => Number(x));
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 'End') {
            let indexShoot = Number(arr[i]);
            if (indexShoot >= 0 && indexShoot < targetSeq.length) {
                if (targetSeq[indexShoot] !== -1) {

                    for (let j = 0; j < targetSeq.length; j++) {

                        if (targetSeq[j] <= targetSeq[indexShoot] && targetSeq[j] !== -1 && indexShoot!==j) {
                            targetSeq[j] += targetSeq[indexShoot];
                        } else if(targetSeq[j] > targetSeq[indexShoot]){
                            targetSeq[j] -= targetSeq[indexShoot];
                        }
                    }
                    targetSeq[indexShoot] = -1;
                    count++;
                }
            }

        } else {

            break;

        }
       
    }

    console.log(`Shot targets: ${count} -> ${targetSeq.join(' ')} `);
}
shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])
shootForTheWin(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])
