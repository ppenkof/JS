function companyUsers(params) {
    let companyEmployees = {}
    for (const cmd of params) {
        let [company, employeeID] = cmd.split(' -> ');
        if (company in companyEmployees) {
            if (!companyEmployees[company].includes(employeeID)) {
                companyEmployees[company].push(employeeID);
            }
        } else {
            companyEmployees[company] = [employeeID];
        }

    }
    let entries = Object.entries(companyEmployees)
        .sort((a, b) => a[0].localeCompare(b[0]));
    for (const [company, employees] of entries) {
        console.log(company);
        for (const id of employees) {
            console.log(`-- ${id}`);
        }
    }
}
companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345'])