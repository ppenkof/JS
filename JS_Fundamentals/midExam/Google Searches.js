function googleSearches(arr) {
    let singleEarn = Number(arr.shift());
    let userNum = Number(arr.shift());
    let sum = 0;
    for (let i = 1; i <= userNum; i++) {

        let currEarn = 0;
        let search = Number(arr[i - 1]);
        currEarn = search * singleEarn;

        if (search > 5) {
            currEarn *= 2;
        } else if (search < 2) {
            currEarn = 0;
        }

        if (i % 3 === 0) {
            currEarn *= 3;
        }
        sum += currEarn;
    }
    console.log(`Total money earned: ${sum.toFixed(2)}`);
}
googleSearches((["5.5", "3", "1", "10", "5"]))
googleSearches((["3.0",
"7",
"0",
"1",
"2",
"3",
"4",
"6",
"15"])
)