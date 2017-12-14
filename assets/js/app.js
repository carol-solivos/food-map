/*redireccionar a otra pagina
var delay = 2000; 
setTimeout(function(){ window.location = 'buscar.html'; }, delay);*/

/*splash carga misma página*/
$(document).ready(function(){
  $(function(){
    setTimeout(function() {
        $('.splash').fadeOut('3000');
    }, 3500); 
  });

  function todos(){
    $('#images').text('');
    var cafes1;
    var comidaRapida1;
    var restaurantes1;
    for (var i = 0; i < data.cafes.length; i++) {
      cafes1 = data.cafes[i];
      comidaRapida1 = data.comidaRapida[i];
      restaurantes1 = data.restaurantes[i];
      $('#images').append('<img src="assets/images/' + cafes1 + '">');
      $('#images').append('<img src="assets/images/' + comidaRapida1 + '">');
      $('#images').append('<img src="assets/images/' + restaurantes1 + '">');
    }
};
  todos();
  $('#todos').click(todos);
  $('#cafe').click(function(){
    $('#images').text('');
    var cafes;
    for (var i = 0; i < data.cafes.length; i++) {
      cafes = data.cafes[i];
      $('#images').append('<img src="assets/images/' + cafes + '">');
    }
    
  });
  $('#restaurante').click(function(){
    $('#images').text('');
    var restaurante;
    for (var i = 0; i < data.restaurantes.length; i++) {
      restaurante = data.restaurantes[i];
      $('#images').append('<img src="assets/images/' + restaurante + '">');
    }
    
  });
  $('#rapida').click(function(){
    $('#images').text('');
    var comidaRapida;
    for (var i = 0; i < data.comidaRapida.length; i++) {
      comidaRapida = data.comidaRapida[i];
      $('#images').append('<img src="assets/images/' + comidaRapida + '">');
    }
    
  });
});

var map;
var infowindow;

function initMap() {
        var pyrmont = {lat: -33.419, lng: -70.643};

        map = new google.maps.Map(document.getElementById('map'), {
          center: pyrmont,
          zoom: 15
        });

        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: pyrmont,
          radius: 500,
          type: ['restaurant'] //cafe bakery
        }, callback);
}

function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
          }
        }
}

function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
};

