function numbersDividedBy3WithoutReminder(params) {
    let index=1;
    //let n=Number(params[0]);
    for (let i = 1; i <= 100; i++) {
        if (index % 3 === 0) {
            console.log(index);
        }
        index++;
    }
}
numbersDividedBy3WithoutReminder();