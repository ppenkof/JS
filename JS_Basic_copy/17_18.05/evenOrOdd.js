function evenOrOdd(data) {
    let num = Number(data[0]);
    if (num % 2 == 0) {
        console.log('even');
    } else {
        console.log('odd');
    }
}
evenOrOdd(["-101"])