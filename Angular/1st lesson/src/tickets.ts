function tickets(dataArr: string[], destination: string) {
  const objArr: Ticket[] = [];
  for (const detail of dataArr) {
    let [dest, price, status] = detail.split("|");
    let priceNum: number = Number(price);
    objArr.push({
      destination: dest,
      price: priceNum,
      status: status,
    });
  }

  if (destination === "destination") {
    return objArr.sort((a, b) => a.destination.localeCompare(b.destination));
  } else if (destination === "price") {
    return objArr.sort((a, b) => a.price - b.price);
  } else if (destination === "status") {
    return objArr.sort((a, b) => a.status.localeCompare(b.status));
  }
}
class Ticket {
  constructor(
    public destination: string,
    public price: number,
    public status: string
  ) {
    this.destination = destination;
    this.price = price;
    this.status = status;
  }
}

console.log(
  tickets(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "destination"
  )
);


//*********************************************************** */



// class Ticket {

//   private dest: string;
//   private price: string;
//   private status: string;
//   private priceNum: number;

//   constructor(public dataArr: string[], public destination: string) {
//     this.destination = destination;
//     this.dataArr = dataArr;
//     this.dest = "";
//     this.price = "";
//     this.status = "";
//     this.priceNum = 0;
//   }

//   tickets() {

//     const objArr = [];
//     for (const detail of this.dataArr) {
//       [this.dest, this.price, this.status] = detail.split("|");
//       this.priceNum = Number(this.price);
//       //let ticket: Ticket = new Ticket(this.dataArr, this.destination);
//         const ticket = {
//             destination: this.dest,
//             price: this.priceNum,
//             status: this.status,
//         };
//       objArr.push(ticket);
//     }
//     if (this.destination === "destination") {
//       return objArr.sort((a, b) => a.destination.localeCompare(b.destination));
//     } else if (this.destination === "price") {
//       return objArr.sort((a, b) => a.price - b.price);
//     } else if (this.destination === "status") {
//       return objArr.sort((a, b) => a.status.localeCompare(b.status));
//     }
//   }
// }
// let ticket = new Ticket(
//   [
//     "Philadelphia|94.20|available",
//     "New York City|95.99|available",
//     "New York City|95.99|sold",
//     "Boston|126.20|departed",
//   ],
//   "destination"
// );
// console.log(ticket.tickets());
