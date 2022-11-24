let markers, map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: 10.403468934373329,
        lng: -75.55690235628872,
      },
      map,
      title: "Cartagena",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 11.355589002997666,
        lng: -74.00533131883368,
      },
      map,
      title: "Santa marta",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 6.150430146237294,
        lng: -75.6167773748358,
      },
      map,
      title: "Medellin",
    })
  );
}