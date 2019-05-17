mapboxgl.accessToken = 'pk.eyJ1IjoiZWRkaWVyb3NlbmJhdW0iLCJhIjoiY2p1a2hjYnN1MXZ5bDQzcGcyd3M2djkyNCJ9._8wwgcVBrEeXxMoTgrXRGg';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/eddierosenbaum/cjuklbw401zjh1fqueauiyv2y',
  center: [35.702820,48.712713],
  zoom: 6.5
});

var clinics= [
  {
    lng: 38.5137507,
    lat: 48.788572,
    name: 'Toshkivka'
  },
  {
    lng: 39.65141,
    lat: 48.7699,
    name: 'Stepove'
  },
  {
    lng: 38.5561875,
    lat: 48.7221869,
    name: 'Orikhove'
  },
  {
    lng: 38.4287579,
    lat: 48.7523564,
    name: 'Novoivanivka'
  },
  {
    lng: 38.2952848,
    lat: 48.6928385,
    name: 'Zolote'
  },
  {
    lng: 38.2905473,
    lat: 48.6450918,
    name: 'Druzhba'
  },
  {
    lng: 39.0904825,
    lat: 48.7685625,
    name: 'Heivka'
  },
  {
    lng: 38.4598932,
    lat: 48.7517199,
    name: 'Hirske'
  },
  {
    lng: 39.6234141,
    lat: 48.7193748,
    name: 'Komyshne'
  },
  {
    lng: 39.6234141,
    lat: 48.7193748,
    name: 'Komyshne'
  },
];

console.log(clinics)
clinics.forEach(function(clinic) {


  new mapboxgl.Marker()
    .setLngLat([clinic.lng, clinic.lat])
    .setPopup(new mapboxgl.Popup({ offset: 40 })
      .setText(`MdM Clinic: ${clinic.name}`))
    .addTo(map);
})

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
        "line-width": 22,
        "line-opacity": 0.5
      }
    })
  }) // end getJson
}) // end style.load
