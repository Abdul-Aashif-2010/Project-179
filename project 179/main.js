let latitude = 22.7868542, longitude = 88.3643296;

$(document).ready(function(){
	alert("Please allow the device to know your location")

	initGeoLocation()
})

$(function(){
	$("#navigate-button").click(function(){
		window.location.href = `ar_navigation.html?source=${latitude};${longitude}&destination=${destination.lat};${destination.lng}`
	})
})

function initGeoLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(success)
	}
	else{
		alert("Sorry, browser doesn't support geolocation sevices")
	}
}

function success(position){
	longitude = position.coords.longitude;
	latitude = position.coords.latitude;
	
	mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [longitude, latitude],
		zoom: 16
	});   
	
	map.addControl(
		new mapboxgl.GeolocateControl({
			positionOptions: {
				enableHighAccuracy: true
			},
			trackUserLocation: true
		})
	);
	
	map.addControl(
		new MapboxDirections({
			accessToken: mapboxgl.accessToken
		}),
		'top-left'
	);	

	map.on('click',function(e){
		destination = e.lngLat
	})

	map.addControl(
		new MapboxGeocoder({
			accessToken: mapboxgl.accessToken,
			mapboxgl: mapboxgl,
		}).on('result',function (e){
			destination = e.result.center
		})
	);
	
	$(function (){
		$("navigate-button").click(function (){
			window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
		})
	})
}

// Initializing Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [longitude, latitude],
	zoom: 4
});
var img1 = document.querySelector("#amber")

// Create a Amber Palace, Jaipur Marker and add it to the map.
var marker1 = new mapboxgl.Marker({
	element: img1
})
	.setLngLat([75.85133, 26.98547])
	.addTo(map);

var img2 = document.querySelector("#gateway")
// Create a  Gateway of India, Mumbai Marker and add it to the map.
var marker2 = new mapboxgl.Marker({
	element: img2
})
	.setLngLat([72.835163, 18.920180])
	.addTo(map);

var img3 = document.querySelector("#gate")
// Create a India Gate Marker and add it to the map.
var marker3 = new mapboxgl.Marker({
	element: img3
})
	.setLngLat([77.22931, 28.61495])
	.addTo(map);


var img4 = document.querySelector("#lotus")

// Create a Lotus Temple, Delhi Marker and add it to the map.
var marker4 = new mapboxgl.Marker({
	element: img4
})
	.setLngLat([77.25880, 28.553501])
	.addTo(map);


//Create a Victoria Memorial, Kolkata Marker and add it to the map.
var img5 = document.querySelector("#victoria")

var marker5 = new mapboxgl.Marker({
	element: img5
})
	.setLngLat([88.342785, 22.546170])
	.addTo(map);



var img6 = document.querySelector("#tajmahal")

var marker6 = new mapboxgl.Marker({
    element : img6
})

.setLngLat([27.1751,  78.0421])
.addTo(map)

