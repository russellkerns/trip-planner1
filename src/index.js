console.log("Hello from JavaScript");

const mapboxgl = require("mapbox-gl");

const buildMarker = require('./marker')

mapboxgl.accessToken =
  "pk.eyJ1IjoicnVzc2VsbGtlcm5zIiwiYSI6ImNqeGFqemNheDE3b3YzdG04c3A3NnZpZnEifQ.X_5N61SPOWG7TN3l8FETrA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker('hotel', [-87.6354, 41.8885])


marker.addTo(map);
