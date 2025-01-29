function towns(townArr) {
    for (let townInfo of townArr) {
        let [townName, townLatitude, townLongitude] = townInfo.split(' | ');
        townLatitude=Number(townLatitude);
        townLongitude=Number(townLongitude);
        let townObj = {
            town: townName,
            latitude: townLatitude.toFixed(2),
            longitude: townLongitude.toFixed(2)
        };
        console.log(townObj);
    }
}
towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])