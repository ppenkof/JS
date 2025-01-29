function sortAnArrayBy2Criteria(arrStr) {
    function compare(a, b) {
        let firstCriteria = a.length - b.length;
        if (firstCriteria !== 0) {
            return firstCriteria;
        } else {
            return a.toUpperCase().localeCompare(b.toUpperCase())
        }
    }
    let sortArr = arrStr.sort(compare);
    console.log(sortArr.join('\n'));
}
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])