function songs(arr) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    let songNum = arr.shift();
    let desiredType = arr.pop();

    for (let i = 0; i < songNum; i++) {
        let item = arr.shift().split('_');
        let favourite = item.shift();
        let song = item.shift();
        let time = item.shift();
        let songName = new Song(favourite, song, time);
        songs.push(songName);
    }

    if (desiredType === 'all') {
        songs.forEach((i) => console.log(i.name));
    }else{
        let list=songs.filter((i)=>i.type===desiredType);
        list.forEach((i) => console.log(i.name));
    }

}
songs([2,'like_Replay_3:15',
    
    'ban_Photoshop_3:48',
    
    'all'])