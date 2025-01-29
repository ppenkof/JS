function minerTask(arr) {
    let mining = {};
    for (let i = 0; i < arr.length; i += 2) {
        let item = arr[i];
        let quantity = arr[i + 1];
        if (!(item in mining)) {
            mining[item] = +quantity;
        } else {
            mining[item] += +quantity;
        }
    }
    let entries = Object.entries(mining);
    for (let [resource,quantity] of entries) {
        console.log(`${resource} -> ${quantity}`);
    }
}
minerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15'])