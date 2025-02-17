class SnowSportStore{
    constructor(storeName){
    this.storeName=storeName;
    this.availableEquipment=[];
    this.revenue=0;
}

addEquipment(type, price, condition){
if(type===''|| price<0 || condition ===''){
    throw new Error("Invalid equipment details!");
}else{
const equipment={
    type: type,
    price: Number(price),
    condition: condition
}
this.availableEquipment.push(equipment);
return `New equipment added: ${equipment.type} / ${equipment.condition} condition - ${equipment.price.toFixed(2)}$.`;

}
}

rentEquipment(type, rentalDays) {
    let index;
    let rentalCost=0;

    if(!(this.availableEquipment.find((c,i)=>{
        let curr=c.type===type;
        if(curr){
           index=i;
        }    
        return curr;
    }))){

        throw new Error(`${type} is not available for rent!`);

    }else{

        rentalCost += this.availableEquipment[index].price * 0.1 * rentalDays;
        this.revenue+=rentalCost;
        return `${type} rented for ${rentalDays} days. Total cost: ${rentalCost.toFixed(2)}$.`;
    }
}

sellEquipment(type){

    let index;
    if((this.availableEquipment.find((c,i)=>{
        let curr=c.type===type;
        if(curr){
           index=i;
        }    
        return curr;
    }))){

        if(this.availableEquipment[index].condition !== 'new'){
            throw new Error(`${type} is not available for purchase!`); 
        }else{
        let currPrice=this.availableEquipment[index].price
        this.revenue+=currPrice;
        this.availableEquipment.splice(index,1);
        return `${type} has been sold for ${currPrice.toFixed(2)}$.`;

        }
    }
}


showRevenue(){

    if(this.revenue===0){
        return "Nothing has been sold or rented.";
    }else{
        return `${this.storeName} has made a total revenue of ${this.revenue.toFixed(2)}$.`;
    }
}

}


let store = new SnowSportStore('Alpine Gear Shop');
// console.log(store.addEquipment('Ski', 500, 'new'));
// console.log(store.addEquipment('Snowboard', 300, 'used'));
// console.log(store.sellEquipment('Ski'));
// console.log(store.sellEquipment('Helmet'));


store = new SnowSportStore('Alpine Gear Shop');
// console.log(store.addEquipment('Ski', 500, 'new'));
// console.log(store.addEquipment('Snowboard', 300, 'used'));
// console.log(store.rentEquipment('Snowboard', 3));
// console.log(store.rentEquipment('Boots', 3));


store = new SnowSportStore('Alpine Gear Shop');
// console.log(store.addEquipment('Ski', 500, 'new'));
// console.log(store.addEquipment('Snowboard', 300, 'used'));
// console.log(store.addEquipment('Helmet', 50, ''));


//input
 store = new SnowSportStore('Alpine Gear Shop');
console.log(store.addEquipment('Ski', 500, 'new'));
console.log(store.addEquipment('Boots', 100, 'used'));
console.log(store.addEquipment('Helmet', 200, 'new'));
console.log(store.addEquipment('Snowboard', 300, 'used'));
console.log(store.sellEquipment('Ski'));
console.log(store.sellEquipment('Helmet'));
console.log(store.rentEquipment('Snowboard', 3));
console.log(store.showRevenue());
//output
/*New equipment added: Ski / new condition - 500.00$.
New equipment added: Boots / used condition - 100.00$.
New equipment added: Helmet / new condition - 200.00$.
New equipment added: Snowboard / used condition - 300.00$.
Ski has been sold for 500.00$.
Helmet has been sold for 200.00$.
Snowboard rented for 3 days. Total cost: 90.00$.
Alpine Gear Shop has made a total revenue of 790.00$.*/
