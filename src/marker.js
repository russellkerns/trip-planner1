const mapboxgl = require("mapbox-gl");

module.exports = function buildMarker(type, coordinatesArray){
  const marker = document.createElement('div')
  marker.style.width = "32px";
  marker.style.height = "39px";


  const URL = {
    activity: 'http://i.imgur.com/WbMOfMl.png',
    hotel: 'http://i.imgur.com/D9574Cu.png',
    restaurant:'http://i.imgur.com/cqR6pUI.png'
  }
  if(type === 'activity'){
    marker.style.backgroundImage = `url(${URL.activity})`;
  } else if(type === 'hotel'){
    marker.style.backgroundImage = `url(${URL.hotel})`;
  } else if(type === 'restaurant'){
    marker.style.backgroundImage = `url(${URL.restaurant})`;
  }

  return new mapboxgl.Marker(marker).setLngLat(coordinatesArray)
}
