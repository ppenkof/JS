function softUniReception(arr) {
    arr = arr.map(Number);
    let sum = 0;
    let studentsNum = 0;
    for (let i = 0; i < arr.length; i++) {

        if (i === arr.length - 1) {
            studentsNum = arr[i];
        } else {
            let empoloees = arr[i];
            sum += empoloees;
        }
    }
    let hours = Math.ceil(studentsNum / sum);
    let addBread = Math.floor(hours / 3);
    hours = hours + addBread;
    console.log(`Time needed: ${hours}h.`);
}
softUniReception(['5', '6', '4', '20'])
softUniReception(['1', '2', '3', '45'])
softUniReception(['3','2','5','40'])