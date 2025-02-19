function filterEploee(emploeeJson, creteria) {
  const printEmploee = [];
  const emploees = JSON.parse(emploeeJson);
  let [creteriaKey, creteriaVal] = creteria.split("-");
  emploees.forEach((emploeeObj) => {
    for (const key in emploeeObj) {
      if (key === creteriaKey) {
        const value = emploeeObj[creteriaKey];
        if (value === creteriaVal) {
          printEmploee.push(emploeeObj);
        }
      }
    }
  });
  
  return printDate(printEmploee);

  function printDate(data) {
    let personalInfo = "";
    let counter=0;
    data.forEach((e) => {
      personalInfo += `${counter}. ${e.first_name} ${e.last_name} - ${e.email}${data.length>=counter+2?'\n':''}`;
      counter++;
    });
    console.log(personalInfo);
  }
}



filterEploee(
  `[{"id": "1", 
    "first_name": "Ardine", 
    "last_name": "Bassam",
    "email": "abassam0@cnn.com", 
    "gender": "Female"}, 
    {"id": "2", 
    "first_name": "Kizzee", 
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"},
    { "id": "3",
    "first_name": "Evanne",   
    "last_name": "Maldin",   
    "email": "emaldin2@hostgator.com",   
    "gender": "Male"   
    }]`,
  "gender-Female"
);
filterEploee(`[{
  "id": "1",
  "first_name": "Kaylee",
  "last_name": "Johnson",
  "email": "k0@cnn.com",
  "gender": "Female"
  }, 
  {"id": "2",
  "first_name": "Kizzee",
  "last_name": "Johnson", 
  "email": "kjost1@forbes.com",
  "gender": "Female"
  }, {
  "id": "3", 
  "first_name": "Evanne", 
  "last_name": "Maldin", 
  "email": "emaldin2@hostgator.com", 
  "gender": "Male" }, 
  { "id": "4", 
  "first_name": "Evanne", 
  "last_name": "Johnson", 
  "email": "ev2@hostgator.com", 
  "gender": "Male" }]`, 'last_name-Johnson')
