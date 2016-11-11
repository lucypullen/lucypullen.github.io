var map = L.map('mapid').setView([40.719190, -73.996589], 13);

var CartoDBTiles = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',{
  attribution: 'Map Data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> Contributors, Map Tiles &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});

map.addLayer(CartoDBTiles);

//var marker = L.marker([40.719189, -73.996589]).addTo(map)
//marker.bindPopup("<b>G.Rider</b><br><b>Favorite Food:</b> Fresh Souls</br><b>Favorite Song:</b> Free Bird</br><b>Favorite Movie:</b> The Jerk</br><b>Favorite Hobby:</b> Poppin-Wheelies!").openPopup();

var featureClick = function (feature, layer) {
	layer.bindPopup(
"<strong>Name:</strong> " + feature.properties.Myname + "<br /><strong>Favorite Food:</strong> " + feature.properties.FavFood + "<br /><strong>Favorite Song:</strong> " + feature.properties.FavSong + "<br /><strong>Favorite Movie:</strong> " + feature.properties.FavMovie + "<br /><strong>Favorite Hobby:</strong> " + feature.properties.FavHobby)
}

var myPoints = L.geoJson(geojsonFeature, {
    onEachFeature: featureClick
}).addTo(map);

var povertyStyle = function (feature){
    var value = feature.properties.PovertyPer;
    var fillColor = null;
    if(value >= 0 && value <=0.1){
		fillColor = "#fee5d9";
    }
    if(value >0.1 && value <=0.15){
        fillColor = "#fcbba1";
    }
    if(value >0.15 && value<=0.2){
    	fillColor = "#fc9272";
    }
    if(value > 0.2 && value <=0.3){
    	fillColor = "#fb6a4a";
    }
    if(value > 0.3 && value <=0.4) { 
		fillColor = "#de2d26";
    }
    if(value > 0.4) { 
		fillColor = "#a50f15";
    }

    var style = {
        weight: 1,
        opacity: .1,
        color: 'white',
        fillOpacity: 0.75,
        fillColor: fillColor
    };

    return style;
}







    














