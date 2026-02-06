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
  // Add a data source from a GeoJSON file
  map.addSource("buildings-data", {
    type: "geojson",
    data: "https://raw.githubusercontent.com/JessicaCHuang26/Lab-2-Repo/a54f390e0b76778a7536477c7afa8f616a27e8d9/buildings%20copy.geojson", // Your URL to your buildings geojson file
  });
  map.addLayer({
    id: "buildings-point",
    type: "circle",
    source: "buildings-data",
    paint: {
      "circle-radius": 5,
      "circle-color": "#007cbf",
    },
  });
});
