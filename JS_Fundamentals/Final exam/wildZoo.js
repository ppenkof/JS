function wildZoo(arr) {
    let cmd = arr.shift();
    let zoo = {};
    while (cmd !== "EndDay") {

        let commands = cmd.split(': ');
        let [action, animalItems] = commands;
        if (action === 'Add') {

            /*•	"Add: {animal_name}-{needed_food_quantity}-{area}":
            o	Add the animal and the quantity of needed food to your records. It is guaranteed that the names of the animals are unique, 
            and there will never be animals with the same name. 
            o	If the animal already exists, just increase the value of its needed food with the given one.
            o	You should keep track of the animal living in each area.
            */
            let animalAgr = animalItems.split('-');
            let [animal, food, area] = animalAgr;
            food = Number(food);
            if (!(animal in zoo)) {
                zoo[animal] = { food, area };
            } else {
                zoo[animal].food += food;
            }

        } else if (action === 'Feed') {

            /*•	"Feed: {animalName}-{food}":
    o	If the animal exists, reduce its quantity of needed food with the given food for feeding.
    o	If the animal does not exist, ignore the command.
    o	If its limit reaches 0 or less, the animal is considered successfully fed, and you need to remove it from your records and print the following message:
    	"{animalName} was successfully fed"
    */
            let animalAgr = animalItems.split('-');
            let [animal, food] = animalAgr;
            food = Number(food);
            if (animal in zoo) {
                zoo[animal].food -= food;
                if (zoo[animal].food <= 0) {
                    delete zoo[animal];
                    console.log(`${animal} was successfully fed`);
                }
            }
        }

        cmd = arr.shift();
    }

    console.log('Animals:');
    for (const key in zoo) {
        console.log(`${key} -> ${zoo[key].food}g`);
    }

    console.log("Areas with hungry animals:");
    let entries = Object.entries(zoo);
    let isPrinted = true;
    let previuosArea = entries[0][1].area;
    for (let i = 0; i < entries.length; i++) {
        let currArea = entries[i][1].area;
        let count = 0;
        for (let j = 0; j < entries.length; j++) {
            let nextArea = entries[j][1].area;
            if (currArea === nextArea) {
                count++;
            }
        }

        if (previuosArea !== currArea || isPrinted) {
            console.log(`${currArea}: ${count}`);
            isPrinted = false;
        }

        previuosArea = currArea;

    }

}
wildZoo(["Add: Adam-4500-ByTheCreek",
    "Add: Maya-7600-WaterfallArea",
    "Add: Maya-1230-WaterfallArea",
    "Feed: Jamie-2000",
    "EndDay"])
wildZoo(["Add: Jamie-600-WaterfallArea",
    "Add: Maya-6570-WaterfallArea",
    "Add: Adam-4500-ByTheCreek",
    "Add: Bobbie-6570-WaterfallArea",
    "Feed: Jamie-2000",
    "Feed: Adam-2000",
    "Feed: Adam-2500",
    "EndDay"])
wildZoo(["Add: Bonie-3490-RiverArea",
"Add: Sam-5430-DeepWoodsArea",
"Add: Bonie-200-RiverArea",
"Add: Maya-4560-ByTheCreek",
"Feed: Maya-2390",
"Feed: Bonie-3500",
"Feed: Johny-3400",
"Feed: Sam-5500",
"EndDay"])


