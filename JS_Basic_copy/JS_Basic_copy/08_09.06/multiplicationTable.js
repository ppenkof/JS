function multiplicationTable(params) {
    let num = Number(params[0]);

    for (let index = 1; index <= 10; index++) {
        //let result = 0;
        let result = num * index;
        console.log(`${index} * ${num} = ${result}`);
    }
}
multiplicationTable(['5'])