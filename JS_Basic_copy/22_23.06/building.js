function building(params) {
    let floors = Number(params[0]);
    let rooms = Number(params[1]);
    let label = '';
    let f=0;
    let r=0;
    let row='';

    for (f = floors; f >= 1; f--) {
        for (r = 0; r < rooms; r++) {
            if (f === floors) {
                label = 'L';
            } else {
                if (f % 2 === 0) {
                    label = "O";
                } else { label = "A" }
            }
            row+=label+f+r+" ";
        }
        console.log(row);
        if(r>=rooms){row='';}
    }
}
    building(["4", "4"])