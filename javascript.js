var sliderControl = null;



var map = L.map('map', {
    center: [40.7155896, -73.9639656],
    zoom: 13
}).addLayer(new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"));


//Create a marker layer (in the example done via a GeoJSON FeatureCollection)
var testlayer = L.geoJson(geojsonFeature, {
        onEachFeature: function(feature,layer){
            layer.bindPopup(feature.properties.time);
        }
    });
    
var sliderControl = L.control.sliderControl({position: "topright", layer: testlayer, timeAttribute: 'time'});

//Make sure to add the slider to the map ;-)
map.addControl(sliderControl);

//And initialize the slider
sliderControl.startSlider();


//$('#slider-timestamp').html(options.markers[ui.value].feature.properties.time.substr(0,10));



