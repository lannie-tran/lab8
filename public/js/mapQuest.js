function initMap() {
	// add your code here
		L.mapquest.key = 'KgGmHvxoAZcp2HyV9goq7nUbaDNcbIyG';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.87864529499566, -117.23589424154437],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	// Add a market to the map
	L.marker([32.88, -117.236]).addTo(map);
}