var map = L.map('map').setView([38.898554, -77.024778], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>'
}).addTo(map);


L.marker([38.9, -77.0]).addTo(map)
	.bindPopup("Downtown Washington DC").openPopup();


var multipleMarkers = [
			[38.8977, -77.0366, "the White House"],
			[38.8893, -77.0501, "the Lincoln Memorial"],
			[38.8895, -77.0352, "the Washington Monument"],
			[38.898392, -77.024786, "where we currently are!"],
			]

multipleMarkers.forEach(function(oneMarker){
	var monumentMarker = L.marker([oneMarker[0], oneMarker[1]]).bindPopup('This is ' + oneMarker[2])
	monumentMarker.addTo(map)
})


L.circle([38.891885, -77.024387], 3000, {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5
}).addTo(map).bindPopup("I am a circle placed around all the points.");


L.polygon([
	[38.899083, -77.026017],
	[38.899049, -77.023995],
	[38.898331, -77.023995],
	[38.898327, -77.026001]
]).addTo(map).bindPopup("I am a polygon that is located around the MLK Jr. Memorial Library.");

