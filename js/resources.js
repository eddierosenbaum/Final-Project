mapboxgl.accessToken = 'pk.eyJ1IjoiZWRkaWVyb3NlbmJhdW0iLCJhIjoiY2p1a2hjYnN1MXZ5bDQzcGcyd3M2djkyNCJ9._8wwgcVBrEeXxMoTgrXRGg';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/eddierosenbaum/cjuklbw401zjh1fqueauiyv2y',
  center: [32.288818,48.814099],
  zoom: 4.0
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
