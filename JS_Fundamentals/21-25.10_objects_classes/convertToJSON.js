function convertToJSON(name,lastName,hair) {
    let obj={};
    obj.name=name;
    obj.lastName=lastName;
    obj.hairColor=hair;
    console.log(JSON.stringify(obj));
}
convertToJSON('George', 'Jones',

'Brown')