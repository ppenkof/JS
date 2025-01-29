function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  //debugger;
  let bestRestorantResult = document.querySelector("#bestRestaurant > p");
  let workersResult = document.querySelector("#workers > p");

  function onClick() {
    //debugger;
    const input = document.querySelector("#inputs > textarea");
    
    let inputArr = input.value.trim();//.slice(1,input.value.length-1);
    inputArr = JSON.parse(input.value);
    
    let restorants = {};
    
    inputArr.forEach((el) => {
      let argument = el.split(" - ");
      let restorantName = argument[0];
      let argumentWorkers = argument[1].split(", ");

      let workersArr = [];

      for (const worker of argumentWorkers) {
        let [workerName, salary] = worker.split(" ");
        salary = Number(salary);
        workersArr.push({ name: workerName, salary });
      }

      if (restorants[restorantName]) {
        workersArr = workersArr.concat(restorants[restorantName].workersArr);
      }

      workersArr.sort((w1, w2) => w2.salary - w1.salary);

      let bestSalary = workersArr[0].salary;
      let averageSalary =
        workersArr.reduce((sum, worker) => sum + worker.salary, 0) /
        workersArr.length;

      restorants[restorantName] = {
        workersArr,
        averageSalary,
        bestSalary,
      };
    });

    let bestRestorant = undefined;
    let bestRestorantSalary = 0;

    for (const restorantName in restorants) {
      if (restorants[restorantName].averageSalary > bestRestorantSalary) {
        bestRestorant = {
          restorantName,
          workers: restorants[restorantName].workersArr,
          bestSalary: restorants[restorantName].bestSalary,
          averageSalary: restorants[restorantName].averageSalary,
        };
        bestRestorantSalary = restorants[restorantName].averageSalary;
      }
    }

    bestRestorantResult.textContent = `Name: ${
      bestRestorant.restorantName
    } Average Salary: ${bestRestorant.averageSalary.toFixed(
      2
    )} Best Salary: ${bestRestorant.bestSalary.toFixed(2)}`;

    //let result = "";
    let result=[];
    bestRestorant.workers.forEach(
      (w) => result.push(`Name: ${w.name} With Salary: ${w.salary}`)
    );

    workersResult.textContent = result.join(' ');
  }
}
