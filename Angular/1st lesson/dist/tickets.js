function tickets(dataArr, destination) {
    var objArr = [];
    //   let dest: string;
    //   let price: string;
    //   let status: string;
    for (var _i = 0, dataArr_1 = dataArr; _i < dataArr_1.length; _i++) {
        var detail = dataArr_1[_i];
        var _a = detail.split("|"), dest = _a[0], price = _a[1], status_1 = _a[2];
        var priceNum = Number(price);
        objArr.push({
            destination: dest,
            price: priceNum,
            status: status_1,
        });
    }
    if (destination === "destination") {
        return objArr.sort(function (a, b) { return a.destination.localeCompare(b.destination); });
    }
    else if (destination === "price") {
        return objArr.sort(function (a, b) { return a.price - b.price; });
    }
    else if (destination === "status") {
        return objArr.sort(function (a, b) { return a.status.localeCompare(b.status); });
    }
}
var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
console.log(tickets([
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
], "destination"));
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
