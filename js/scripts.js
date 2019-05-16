mapboxgl.accessToken = 'pk.eyJ1IjoiZWRkaWVyb3NlbmJhdW0iLCJhIjoiY2p1a2hjYnN1MXZ5bDQzcGcyd3M2djkyNCJ9._8wwgcVBrEeXxMoTgrXRGg';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/eddierosenbaum/cjuklbw401zjh1fqueauiyv2y',
  center: [33.965674, 49.277473],
  zoom: 4.9
});

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
        "line-width": 22,
        "line-opacity": 0.5
      }
    })
  }) // end getJson
}) // end style.load
