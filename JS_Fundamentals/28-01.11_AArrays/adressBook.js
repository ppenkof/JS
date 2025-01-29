function addressBook(arr) {
    let addressBook = {};
    for (let iterator of arr) {
        let [name, address] = iterator.split(':');
        addressBook[name] = address;
    }

    let sorting=Object.entries(addressBook);
    sorting.sort((a,b)=> a[0].localeCompare(b[0]));

 for (const name of sorting) {
    console.log(`${name[0]} -> ${name[1]}`);
 }
}
addressBook(['Tim:Doe Crossing',

    'Bill:Nelson Place',

    'Peter:Carlyle Ave',

    'Bill:Ornery Rd'])