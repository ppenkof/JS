function histogram(params) {
    let n = Number(params[0]);
    let num = Number();
    let counter200=0;
    let counter400=0;
    let counter600=0;
    let counter800=0;
    let counter800up=0;

    for (let i = 1; i <= n; i++) {
        num = Number(params[i]);
        if (num < 200) {
           // let counter200;
            counter200++;
        } else if (num < 400) {
            //let counter400;
            counter400++;
        } else if (num < 600) {
            //let counter600;
            counter600++;
        } else if (num < 800) {
            //let counter800;
            counter800++;
        } else {
            //let counter800up;
            counter800up++;
        }
    }
    let p1 = counter200 / n * 100;
    let p2 = counter400 / n * 100;
    let p3 = counter600 / n * 100;
    let p4 = counter800 / n * 100;
    let p5 = counter800up / n * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}
histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"])