function employees(arrStr) {
    for(let name of arrStr){
        let personalNum=name.length;

        let personObj={
            name: name,
            personalNumber:personalNum
        };
        console.log(`Name: ${personObj.name} -- Personal Number: ${personObj.personalNumber}`);
    }
}
employees([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])
    "Name: {employeeName} -- Personal Number: {personalNum}"