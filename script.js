//alert("Komunikat z bieżącej strony");
let button = document.getElementById("button");
let reset = document.getElementById("reset");
let satel = document.getElementById("satel");
let topo = document.getElementById("topo");
let osm = document.getElementById("osm");
let agol = document.getElementById("agol");
let i=0;
let baza = ["streets", "satellite", "hybrid", "terrain", "topo", "gray", "dark-gray", "oceans", "national-geographic", "osm", "dark-gray-vector", "gray-vector", "streets-vector", "topo-vector", "streets-night-vector", "streets-relief-vector", "streets-navigation-vector"];

/*require (["esri/Map", "esri/views/MapView"],function(Map, MapView){
   let map1 = new Map({basemap:baza[i]});
   let mapContainer = new MapView({
      container: "mapa",
      map: map1,
      zoom: 5,
      centrer: 1,
   });
   button.addEventListener('click',function(){  
      i++;      
      map1 = new Map({basemap:baza[i]});
      mapContainer = new MapView({
         container: "mapa",
         map: map1,
         zoom: 5,
         centrer: 1,
      });
      i++;
   })
   reset.addEventListener('click',function(){
      i=0;
      let map1 = new Map({basemap:baza[i]});
      let mapContainer = new MapView({
         container: "mapa",
         map: map1,
         zoom: 5,
         centrer: 1,
      });
   });
   satel.addEventListener('click',function(){
      map1 = new Map({basemap:"satellite"});
      mapContainer = new MapView({
         container: "mapa",
         map: map1,
         zoom: 5,
         centrer: 1,
      });    
   })
   topo.addEventListener('click',function(){
      map1 = new Map({basemap:"topo"});
      mapContainer = new MapView({
         container: "mapa",
         map: map1,
         zoom: 5,
         centrer: 1,
      });
   });
   osm.addEventListener('click',function(){
      map1 = new Map({basemap:"osm"});
      mapContainer = new MapView({
         container: "mapa",
         map: map1,
         zoom: 5,
         centrer: 1,
      });
   });
});
require (["esri/WebMap", "esri/views/MapView","esri/widgets/BasemapToggle","esri/widgets/BasemapGallery","esri/geometry/support/webMercatorUtils"],
function(WebMap, MapView, BasemapToggle, BasemapGallery, webMercatorUtils){
   agol.addEventListener('click',function(){
      let map2 = new WebMap({portalItem:{id:"d1ae2aad53b047c4ae155c955cf9ccde"}});
      let mapView = new MapView({
         container: "mapa",
         map: map2,
         //zoom: 5,
         centrer: 1
      });
   });
});


require (["esri/Map","esri/WebMap", "esri/views/MapView","esri/widgets/BasemapToggle","esri/widgets/BasemapGallery"],function(Map,WebMap, MapView, BasemapToggle, BasemapGallery){
   let map3 = new Map({basemap: "topo-vector"});
   let mapView = new MapView({
      container: "mapa",
      map: map3,
      center: 1,
      zoom: 5
    });
   var basemapToggle = new BasemapToggle({
      view: mapView,
      nextBasemap: "satellite"
    });
   
   let basemapGallery = new BasemapGallery({
      view: mapView,
      source: {
        portal: {
          url: "http://www.arcgis.com",
          useVectorBasemaps: true, // Load vector tile basemap group
        },
      } 
   });
   mapView.ui.add(basemapToggle, "bottom-right");

   mapView.ui.add(basemapGallery, "top-right");
});

require(["esri/Map","esri/views/MapView","esri/layers/GraphicsLayer","esri/widgets/Sketch"], function(Map, MapView, GraphicsLayer, Sketch) {
   let graphicsLayer = new GraphicsLayer();
   let map4 = new Map({
      basemap: "topo-vector",
      layers: [graphicsLayer]
   });
   let mapView = new MapView({
      container: "mapa",
      map: map4,
      center: 1,
      zoom: 5
   });
   
   let sketch = new Sketch({
      view: mapView,
      layer: graphicsLayer
   });
 
   mapView.ui.add(sketch, "top-right");
});

require(["esri/Map","esri/views/MapView","esri/layers/FeatureLayer"], function(Map, MapView, FeatureLayer) {
   let map5 = new Map({basemap: "topo-vector"});
   let mapView = new MapView({
      container: "mapa",
      map: map5,
      center: 1,
      zoom: 5
    });
   var trailsLayer = new FeatureLayer({
      url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/ArcGIS/rest/services/USA%20States/FeatureServer/0"
    });

    map5.add(trailsLayer, 0);

    // Parks and open spaces (polygons)
    var parksLayer = new FeatureLayer({
      url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/ArcGIS/rest/services/USA%20States/FeatureServer/0"
    });

    map5.add(parksLayer, 0);
});*/
require (["esri/Map","esri/WebMap", "esri/views/MapView","esri/widgets/BasemapToggle","esri/widgets/BasemapGallery","esri/geometry/support/webMercatorUtils"],
function(Map,WebMap, MapView, BasemapToggle, BasemapGallery, webMercatorUtils){
   let map6 = new Map({basemap:"osm"});
   let mapView = new MapView({
      container: "mapa",
      map: map6,
      zoom: 5,
      centrer: 1
   });
   mapView.on("click", function(evt){
      cords = webMercatorUtils.webMercatorToGeographic(evt.mapPoint);
      //cords.toFixed(1);
      console.log(cords);
   });
});