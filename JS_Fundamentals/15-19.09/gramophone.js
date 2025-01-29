//(albumName.length * bandName.length) * song-name.length / 2
function gramophone(albumName, bandName, songName) {
    let time = (albumName.length * bandName.length) * songName.length / 2; //song duration in sec
    let rotationCount = Math.ceil(time / 2.5);
    console.log(`The plate was rotated ${rotationCount} times.`);
}
gramophone('Rammstein', 'Sehnsucht', 'Engel')