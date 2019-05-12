mapboxgl.accessToken = 'pk.eyJ1IjoiZWRkaWVyb3NlbmJhdW0iLCJhIjoiY2p1a2hjYnN1MXZ5bDQzcGcyd3M2djkyNCJ9._8wwgcVBrEeXxMoTgrXRGg';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/eddierosenbaum/cjuklbw401zjh1fqueauiyv2y',
  center: [33.965674, 49.277473],
  zoom: 4.7
});

map.addControl(new mapboxgl.NavigationControl());

map.on('style.load', function() {

  $.getJSON('data/clinics.geojson', function(data) {
    console.log(data);
    data.features.forEach(function(feature) {
      new mapboxgl.Marker({
        color: 'red',
      })
        .setLngLat(feature.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 40 }).setText(feature.properties.name))

        .addTo(map);
    }) // end foreach
  }) // end getJson

  $.getJSON('data/conflictline.geojson', function(data) {
    map.addSource('conflictline', {
     type: 'geojson',
     data: data
   });


    map.addLayer({
      id: 'conflictline',
      type: 'line',
      source: 'conflictline',
      paint: {
        "line-color": "red",
        "line-width": 2
      }
    })

    map.addLayer({
      id: 'conflictline-buffer',
      type: 'line',
      source: 'conflictline',
      paint: {
        "line-color": "orange",
        "line-width": 12,
        "line-opacity": 0.5
      }
    })
  }) // end getJson
}) // end style.load
