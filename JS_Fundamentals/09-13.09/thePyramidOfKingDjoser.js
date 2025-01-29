//stone, marble, lapis lazuli, and gold. Your program will receive an integer that will be the base width and length of the pyramid and an increment that 

function thePyramidOfKingDjoser(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let height = 0;
    let step = 1;

    for (let curBase = base; curBase > 0; curBase -= 2) {
        height += increment;
        if (curBase <= 2) {
            gold += curBase ** 2;
        } else {
            let curArea = curBase ** 2;
            let innerArea = (curBase - 2) ** 2;
            stone += innerArea * increment;
            if (step % 5 !== 0) {
                marble += (curArea - innerArea) * increment;
            } else {
                lapisLazuli += (curArea - innerArea) * increment;
            }
        }
        step++;
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}
thePyramidOfKingDjoser(23,0.5)