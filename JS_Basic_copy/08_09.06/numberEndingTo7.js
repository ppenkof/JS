function numberEndingTo7(params) {
    for (let index = 0; index <= 1000; index++) {
        if (index % 10 === 7) {
            console.log(index);
        }
    }
}
numberEndingTo7()