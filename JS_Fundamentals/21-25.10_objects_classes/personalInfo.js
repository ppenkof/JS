// function personalInfo(firstName, lastName, age) {
//     let personObj = {
//         fist: firstName,
//         last: lastName,
//         ages: age
//     };
//     console.log(personObj);
// }
// personalInfo("Peter","Pan","20")

// function personalInfo(firstName, lastName, age) {
//     let personObj = {};
//     personObj['firstName'] = firstName;
//     personObj['lastName'] = lastName;
//     personObj['age'] = age;

//     return personObj;
// }
// let returned = personalInfo("Peter","Pan","20");
// console.log(returned);

function personalInfo(firstName, lastName, age) {
    let personObj = {};
    personObj.firstName = firstName;
    personObj.lastName = lastName;
    personObj.age = age;

    return personObj;
}
let returned = personalInfo("Peter","Pan","20");
console.log(returned);