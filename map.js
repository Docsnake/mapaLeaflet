var map = L.map('map').setView([40.283724, -3.769459], 18);
const domains = {
    openStreetMap: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    arcgisonline: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
}
L.tileLayer(domains.arcgisonline, {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
function onMapClick(e) {
    console.log("You clicked the map at " + e.latlng);
}

var parkingProduccion = L.polygon([
    [40.285425, -3.768946],
    [40.284995, -3.769595],
    [40.284825, -3.769362],
    [40.285024, -3.768995],
    [40.28493, -3.768895],
    [40.284991, -3.768721]
    ], {color: 'black'}).addTo(map);

var zonaHDC = L.polygon([
    [40.284824, -3.769361],
    [40.284735, -3.769277],
    [40.28493, -3.768905],
    [40.285022, -3.768999],
    ], {color: 'orange'}).addTo(map);

var caja = L.polygon([
    [40.284995, -3.769598],
    [40.284889, -3.76977],
    [40.284825, -3.769713],
    [40.284936, -3.769534]
    ], {color: 'white'}).addTo(map);

var barras = L.polygon([
    [
        [40.284894, -3.769778],
        [40.28469, -3.770173],
        [40.284648, -3.770124],
        [40.284852, -3.769742]
    ],
    [
        [40.28445, -3.76994],
        [40.284594, -3.769628],
        [40.284553, -3.769586],
        [40.284398, -3.769894],
    ]
    ], {color: 'green'}).addTo(map);


    L.marker([40.284564, -3.768607]/*, {icon: greenIcon}*/).addTo(map);
map.on('click', onMapClick);