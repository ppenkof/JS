function ladybugs(input) {
    let sizeOfTheField = input[0];
    let ladybugIndexes = input[1].split(' ').map(Number);//array of 2 numbers is created
    let field = [];
    for (let i = 0; i < sizeOfTheField; i++) {
        ladybugIndexes.includes(i) ? field[i] = 1 : field[i] = 0;
    }
     //console.log(field);
    for (let j = 2; j < input.length; j++) {
        let command = input[j].split(' ');
        let position = Number(command[0]);
        let direction = command[1];
        let flyLength = Number(command[2]);
      
        if (!field[position]) {
            continue;
        }
        field[position] = 0;
        
        if (direction === 'left') {
            position -= flyLength;
            if (position >= 0) {
                while (field[position] === 1) {
                    position -= flyLength;
                }
                if (position >= 0) {
                    field[position] = 1;
                }
            }
        } else {
            position += flyLength;
            if (position < field.length) {
                while (field[position] === 1) {
                    position += flyLength;
                }
                if (position < field.length) {
                    field[position] = 1;
                }
            }
        }

    }
    console.log(field.join(' '));
}
//ladybugs([3, '0 1', '0 right 1', '2 right 1'])
ladybugs([ 5, '3',
'3 left 2',
'1 left -2'])
