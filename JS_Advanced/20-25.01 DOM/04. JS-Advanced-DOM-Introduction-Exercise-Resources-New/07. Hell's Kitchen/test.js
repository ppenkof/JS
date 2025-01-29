function testov(data) {
    //document.querySelector("#btnSend").addEventListener("click", onClick);
    //debugger;
    //let bestRestorantResult = document.querySelector("#bestRestaurant > p");
    // workersResult = document.querySelector("#workers > p");
  
    //function onClick() {
      //debugger;
      const input = data;
      let inputArr = JSON.parse(input.value);
      //let inputArr = input.value;
      // console.log(inputArr);
      //console.log(bestRestorantResult);
      //console.log(workersResult);
      console.log(inputArr);
      let restorants = {};
      let workersArr = [];
  
      inputArr.forEach((el) => {
        let argument = el.split(" - ");
        let restorantName = el[0];
  
        for (const worker of el[1]) {
          let [workerName, salary] = el[1].split(", ");
          salary = Number(salary);
          workersArr.push({ name: workerName, salary });
        }
  
        if (restorants[restorantName]) {
        }
      });
    //}
  }
  testov(["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]);
  