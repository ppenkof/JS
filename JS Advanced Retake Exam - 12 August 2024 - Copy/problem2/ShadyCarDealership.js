class ShadyCarDealership {
  constructor(dealerName) {
    this.dealerName = dealerName;
    this.availableCars = [];
    this.soldCars = [];
    this.revenue = 0;
    this.car = {};
  }

  addCar(model, year, mileage, price) {
    if (model === "" || year < 1950 || mileage < 0 || price < 0) {
      throw "Invalid car!";
    } else {
      this.car = {
        model: model,
        year: year,
        mileage: mileage,
        price: Number(price.toFixed(2)),
      };
      this.availableCars.push(this.car);
      return `New car added: ${model} (${year}) / ${mileage} km. - ${price.toFixed(
        2
      )}$`;
    }
  }

  sellCar(model, desiredYear) {
    //let soldCar = [];
    let index;
    if (!this.availableCars.find((c) => c.model === model)) {
      return `${model} was not found!`;
    } else {
      for (let i = 0; i < this.availableCars.length; i++) {
        if (this.availableCars[i].model === model) {
          index = i;
        }
      }
      if (this.availableCars[index].year >= desiredYear) {
        this.availableCars[index].price *= 1;
      } else if (this.availableCars[index].year >= desiredYear - 5) {
        this.availableCars[index].price *= 0.9;
      } else {
        this.availableCars[index].price *= 0.8;
      }

      let currCar = this.availableCars.splice(index, 1);
      this.soldCars.push(currCar[0]);
      this.revenue += currCar[0].price;
      return `${model} (${
        currCar[0].year
      }) was sold for ${currCar[0].price.toFixed(2)}$`;
    }
  }

  prepareCarForSale(model) {
    let soldCar = [];
    let index;

    if (!this.availableCars.find((c) => c.model === model)) {
      return `${model} was not found for preparation!`;
    } else {
      for (let i = 0; i < this.availableCars.length; i++) {
        if (this.availableCars[i].model === model) {
          index = i;
        }
      }

      this.availableCars[index].mileage *= 0.5;

      this.availableCars[index].price *= 1.3;

      return `${model} (${
        this.availableCars[index].year
      }) is prepared for sale with ${
        this.availableCars[index].mileage
      } km. - ${this.availableCars[index].price.toFixed(2)}$`;
    }
  }

  salesJournal(criteria) {
    let print = [];
    if (criteria !== "year" && criteria !== "model") {
      throw "Invalid criteria!";
    } else {
      criteria === "year"
        ? this.soldCars.sort((a, b) => b.year - a.year)
        : this.soldCars.sort((a, b) => a.model.localeCompare(b.model));

      this.soldCars.forEach((c) => {
        print.push(`${c.model} (${c.year}) / ${c.mileage} km. / ${c.price.toFixed(2)}$`);
      });
      print.unshift(`${this.soldCars.length} cars sold:`);
      print.unshift(
        `${this.dealerName} has a total income of ${this.revenue.toFixed(2)}$`
      );
    }
    return print.join('\n');
  }
}
const dealership = new ShadyCarDealership('Shady Motors');
console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000));
console.log(dealership.addCar('VW Golf', 2011, 130000, 12000));
console.log(dealership.addCar('BMW X3', 2005, 220000, 9000));//
console.log(dealership.addCar('Toyota Yaris', 2015, 80000, 18000));
console.log(dealership.prepareCarForSale('Honda CR-V'));
console.log(dealership.prepareCarForSale('Honda Jazz'));
console.log(dealership.sellCar('Honda CR-V', 2012));
console.log(dealership.sellCar('BMW X3', 2012));//
console.log(dealership.sellCar('Toyota Yaris', 2012));
console.log(dealership.salesJournal('year'));
console.log(dealership.salesJournal('model'));



/*output
New car added: Honda CR-V (2010) / 120000 km. - 15000.00$ 
New car added: VW Golf (2011) / 130000 km. - 12000.00$ 
New car added: BMW X3 (2005) / 220000 km. - 9000.00$
New car added: Toyota Yaris (2015) / 80000 km. - 18000.00$
Honda CR-V (2010) is prepared for sale with 60000 km. - 19500.00$
Honda Jazz was not found for preparation!


*/
