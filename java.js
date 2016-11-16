

var map = L.map('mapid').setView([40.719190, -73.996589], 13);

var CartoDBTiles = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',{
  attribution: 'Map Data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> Contributors, Map Tiles &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});


map.addLayer(CartoDBTiles);

//break points for these functions by examining our data and identifying the proper ranges for both the check cashing amounts, and the total number of customers.//
function fillColor(d) {
    return d > 500000 ? '#006d2c' :
           d > 250000 ? '#31a354' :
           d > 100000 ? '#74c476' :
           d > 50000  ? '#a1d99b' :
           d > 10000  ? '#c7e9c0' :
                        '#edf8e9';
}

function radius(d) {
    return d > 9000 ? 20 :
           d > 7000 ? 12 :
           d > 5000 ? 8  :
           d > 3000 ? 6  :
           d > 1000 ? 4  :
                      2 ;
}
var checkCashingStyle = function (feature, latlng){
    var checkCashingMarker = L.circleMarker(latlng, {
        stroke: false,
        fillColor: fillColor(feature.properties.amount),
        fillOpacity: 1,
        radius: radius(feature.properties.customers)
    });
    
    return checkCashingMarker;
    
}
//Lets construct a large function that will handle how the user interacts with the data. Under your last function add this code://
var checkCashingInteraction = function(feature,layer){
	    var highlight = {
        stroke: true,
        color: '#ffffff', 
        weight: 3,
        opacity: 1,
    };
// 3 styles for when a user mouses over a data point (above), clicks on a data point (below) or is not on a data point at all//
    var clickHighlight = {
        stroke: true,
        color: '#f0ff00', 
        weight: 3,
        opacity: 1,
    };

    var noHighlight = {
        stroke: false,
    };

//set up the interactions that will use these styles. Here we have tell Leaflet to fire off our “highlight” style anytime there is a “mouse over” event//

layer.on('mouseover', function(e) {
        layer.setStyle(highlight);
        if (!L.Browser.ie && !L.Browser.opera) {
            layer.bringToFront();
        }
    });
//the “e” in the function is standard notation representing what ever data has been “”moused-over” //
//in this function we have told the data point to “bringToFront”, however we are telling it to do this as long as the browser is not Internet explorer or Opera
 
 layer.on('mouseout', function(e) {
        layer.setStyle(noHighlight); 
        
    });

 layer.on("click",function(e){

layer.bindPopup('<div class="popupStyle"><h3>' + feature.properties.name + '</h3><p>'+ feature.properties.address + '<br /><strong>Amount:</strong> $' + feature.properties.amount + '<br /><strong>Customers:</strong> ' + feature.properties.customers + '</p></div>').openPopup();
        layer.setStyle(clickHighlight); 
    });

}

 var checkCashingCustomStuff = L.geoJson(null, {
    pointToLayer: checkCashingStyle,
    onEachFeature: checkCashingInteraction
});


var checkCashingLayer = omnivore.csv('CheckCashing.csv', null, checkCashingCustomStuff).addTo(map);
//Leaflet has a prepared library called “omnivore”, which is very good at digesting CSV and other data types. //







































    














