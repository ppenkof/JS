// •	Cut – cuts the crystal in 4
// •	Lap – removes 20% of the crystal’s thickness
// •	Grind – removes 20 microns of thickness
// •	Etch – removes 2 microns of thickness
// •	X-ray – increases the thickness of the crystal by 1 micron; this operation can only be done once!
// •	Transporting and washing – removes any imperfections smaller than 1 micron (round down the number); do this after every batch of operations that remove material

function radioCrystals(params) {
    for (let i = 1; i < params.length; i++) {
        let desireThickness = params[0];
        let chunkThickness = params[i];

        console.log(`Processing chunk ${chunkThickness} microns`)
        let transportationWashing = 0;

        let cUt = cut(desireThickness, chunkThickness, 4);
        cUt -= transportationWashing;
        cUt = Math.floor(cUt);
        console.log('Transporting and washing');

        if (cUt === desireThickness) {
            console.log(`Finished crystal ${cUt} microns`);
            continue;
        }

        let lAp = lap(desireThickness, cUt, 0.8);
        lAp -= transportationWashing;
        lAp = Math.floor(lAp);
        console.log('Transporting and washing');
        if (lAp === desireThickness) {
            console.log(`Finished crystal ${lAp} microns`);
            continue;
        }

        let gRind = grind(desireThickness, lAp, 20);
        gRind -= transportationWashing;
        gRind = Math.floor(gRind);
        console.log('Transporting and washing');
        if (gRind === desireThickness) {
            console.log(`Finished crystal ${gRind} microns`);
            continue;
        }

        let eTch = etch(desireThickness, gRind, 2);
        eTch -= transportationWashing;
        eTch = Math.floor(eTch);
        console.log('Transporting and washing');
        if (eTch === desireThickness) {
            console.log(`Finished crystal ${eTch} microns`);
            continue;
        }

        let xray = xRay(desireThickness, eTch, 1);
        xray = Math.floor(xray);
        console.log(`Finished crystal ${xray} microns`);
    }

    function cut(desireThick, chunkThick, cut) {

        let currThick = chunkThick;
        let count = 0;

        while (currThick > (4 * desireThick - 1)) {
            currThick /= cut;
            count++;
        }
        console.log(`Cut x${count}`);
        return currThick;
    }

    function lap(desireThick, chunkThick, lap) {

        let currThick = chunkThick;
        let count = 0;

        while (currThick > (desireThick * 1.2)) {
            currThick *= lap;
            count++;
        }
        console.log(`Lap x${count}`);
        return currThick;
    }

    function grind(desireThick, chunkThick, grind) {

        let currThick = chunkThick;
        let count = 0;

        while (currThick > (desireThick + 20)) {
            currThick -= grind;
            count++;
        }
        console.log(`Grind x${count}`);
        return currThick;
    }

    function etch(desireThick, chunkThick, etch) {

        let currThick = chunkThick;
        let count = 0;

        while (currThick > desireThick) {
            currThick -= etch;
            count++;
        }
        console.log(`Etch x${count}`);
        return currThick;
    }

    function xRay(desireThick, chunkThick, xray) {

        let currThick = chunkThick;
        let count = 0;

        while (currThick < desireThick) {
            currThick += xray;
            count++;
        }
        console.log(`X-ray x${count}`);
        return currThick;
    }

}
radioCrystals([1000, 4000, 8100])