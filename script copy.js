mapboxgl.accessToken =
  "pk.eyJ1IjoiamVzc2ljYWh1YW5nIiwiYSI6ImNtazNjNmdmeTBkN3AzZnEyZHRscHdod28ifQ.Pa9LhzBk1H75KBMwBngDjA"; // Add default public map token from your Mapbox account
const map = new mapboxgl.Map({
  container: "my-map", // map container ID
  style: "mapbox://styles/mapbox/standard", // style URL
  center: [-79.3884, 43.6548], // starting position [lng, lat]
  zoom: 10, // starting zoom level
});

map.on("load", () => {
  // Add a data source containing GeoJSON data
  map.addSource("uoft-data", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            name: "Sidney Smith Hall",
          },
          geometry: {
            coordinates: [-79.39865237301687, 43.662343395037766],
            type: "Point",
          },
        },
      ],
    },
  });
  // Visualize data layer on map
  map.addLayer({
    id: "uoft-pnt",
    type: "circle",
    source: "uoft-data",
    paint: {
      "circle-radius": 6,
      "circle-color": "#B42222",
    },
  });
});
