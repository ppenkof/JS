function race(arr) {
    let players = arr.shift().split(', ');
    let runners = {};

    for (const player of players) {
        runners[player] = 0;
    }

    let cmd = arr.shift();
    let runnerNamePattern = /[A-Za-z]+/g
    let digitPattern = /\d/g;

    while (cmd !== 'end of race') {
        let matches = cmd.match(runnerNamePattern);
        let runnerName = matches.join('');
        if (runnerName in runners) {
            let digitMatches = cmd.match(digitPattern).map(a => Number(a));
            let sum = digitMatches.reduce((a, b) => a + b, 0);
            runners[runnerName] += sum;
        }
        cmd = arr.shift();
    }
    let entries = Object.entries(runners).sort((a, b) => b[1] - a[1]);
   
        console.log(`1st place: ${entries[0][0]}`);
        console.log(`2nd place: ${entries[1][0]}`);
        console.log(`3rd place: ${entries[2][0]}`);
}
race(['George, Peter, Bill, Tom',

    'G4e@55or%6g6!68e!!@ ',

    'R1@!3a$y4456@',

    'B5@i@#123ll',

    'G@e54o$r6ge#',

    '7P%et^#e5346r',

    'T$o553m&6',

    'end of race'])
    race(['Ronald, Bill, Tom, Timmy,Maggie, Michonne',
    
    'Mi*&^%$ch123o!#$%#nne787) ',
    
    '%$$B(*&&)i89ll)*&) ',
    
    'R**(on%^&ald992) ',
    
    'T(*^^%immy77) ',
    
    'Ma10**$#g0g0g0i0e',
    
    'end of race'])