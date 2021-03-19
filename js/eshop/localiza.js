let errorElp = document.querySelector("#no-support");
let btnEl = document.querySelector("#btn-confirma");

getLocation();
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    error.innerHTML = "Geolocalização não é suportada nesse browser.";
  }
}

function showPosition(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  latlon = new google.maps.LatLng(lat, lon);
  mapholder = document.getElementById("mapholder");

  var myOptions = {
    center: latlon,
    zoom: 13,
    mapTypeId: 'hybrid',
    mapTypeControl: false,
  };
  var map = new google.maps.Map(
    document.getElementById("mapholder"),
    myOptions
  );
  var marker = new google.maps.Marker({
    position: latlon,
    map: map,
    title: "Sua casa",
  });  
}

function showError(error) {
  switch (error.code) {
    case 1:
      errorElp.innerText = "Você rejeitou a solicitação de Geolocalização.";
      console.log();
      break;
    case 2:
      errorElp.innerHTML = "Localização indisponível.";
      break;
    case 3:
      errorElp.innerHTML = "O tempo da requisição expirou.";
      break;
    case 4:
      errorElp.innerHTML = "Algum erro desconhecido aconteceu.";
      break;
  }
}

btnEl.addEventListener("click", ()=>{
    
});