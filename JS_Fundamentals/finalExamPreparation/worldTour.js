function worldTour(params) {
    let dectinations = params.shift();
    let cmd = params.shift();
    while (cmd !== 'Travel') {

        let cmdItems = cmd.split(':');
        let action = cmdItems.shift();
        if (action === 'Add Stop') {

            let [index, string] = cmdItems;
            index = Number(index);
            if (index >= 0 && index < dectinations.length) {
                dectinations = dectinations.substring(0, index) + string + dectinations.substring(index);
            }
            console.log(dectinations);

        } else if (action === 'Remove Stop') {

            let [startIndex, endIndex] = cmdItems.map(x => x = Number(x));
            if (startIndex >= 0 && endIndex < dectinations.length && startIndex <= endIndex) {
                let cutElements = dectinations.substring(startIndex, endIndex + 1);
                //dectinations = dectinations.substring(0, startIndex) + dectinations.substring(endIndex + 1);
                dectinations = dectinations.replace(cutElements, '');
            }
            console.log(dectinations);

        } else if (action === 'Switch') {

            let [oldString, newString] = cmdItems;
            //let index = 0;
            if (!oldString.includes(newString) && oldString !== newString) {
                //while (dectinations.includes(oldString) && index < dectinations.length) {
                    dectinations = dectinations.replace(oldString, newString);
                    //index++;
                //}
            }
            console.log(dectinations);
        }

        cmd = params.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${dectinations}`);

}
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])

worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])
