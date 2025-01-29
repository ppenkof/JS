function searchForAnumber(arr1, arr2) {
    let takenNum = arr2.shift();
    let deletedNum = arr2.shift();
    let magicNum = arr2.shift();
    let newArr = arr1.slice(0, takenNum);
    newArr.splice(0, deletedNum);
    let index = newArr.indexOf(magicNum);
    let occurring = 0;
    while (index != -1) {
        occurring++;
        newArr.splice(index,1);
        index = newArr.indexOf(magicNum);
    }
    console.log(`Number ${magicNum} occurs ${occurring} times.`);
}
searchForAnumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]    
)