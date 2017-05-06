Meteor.startup(function() {
	GoogleMaps.load();
});

Template.map.helpers({
	mapOptions: function() {
		if (GoogleMaps.loaded()) {
			return {
				center: new google.maps.LatLng(13.08784, 80.27847),
				zoom: 12
			};
		}		
	}
});

Template.map.onCreated(function() {
	GoogleMaps.ready('map', function(map) {	
			var Lat, Long;
			var marker = new google.maps.Marker({
				draggable: true,
				animation: google.maps.Animation.DROP,
				position: new google.maps.LatLng(13.08784, 80.27847),
				map: map.instance,
				visible: true
			});

			map.instance.setCenter(marker.position);
			marker.setMap(map.instance);

			google.maps.event.addListener(marker, 'dragend', function (evt) {
				console.log(evt.latLng.lat());
				Lat = evt.latLng.lat().toFixed(3);
				Long = evt.latLng.lng().toFixed(3);
				document.getElementById('txtLat').value = Lat;
				document.getElementById('txtLong').value = Long;
		});
			
	});		
});