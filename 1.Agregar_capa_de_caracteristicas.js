
//AGREGAR MODULO: "esri/layers/FeatureLayer" Y FUNCION: FeatureLayer

require(["esri/config", "esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"], function (esriConfig, Map, MapView, FeatureLayer) {

    esriConfig.apiKey = "AAPK167f596c5f384bc7be631368a37ec48dmFf5qMXzasaWJtCwDR8fx4dfjNfgZ3ik0aWALYhWhrWMpaUe40UT1MwF_skD_Xd0";

    //AGREGAR MAPA
    const map = new Map({ basemap: "arcgis-topographic" });

    //VISTA DEL MAPA
    const view = new MapView({ container: "map1", map: map, zoom: 13, center: [-118.80543, 34.03800] });

    //AGREGA LA CAPA DE ENTIDADES DE PUNTOS SENDEROS
    const trailheadsLayer = new FeatureLayer({
        url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0"
    })
    map.add(trailheadsLayer);

    //AGREGA CAPA DE SENDEROS RUTAS
    const trailsLayer = new FeatureLayer({
        url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails_Styled/FeatureServer/0"
    })
    map.add(trailsLayer,0);

    //AGREGA CAPA DE PARQUES Y ESPACIOS ABIERTOS
    const parksLayer = new FeatureLayer({
        url:"https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space_Styled/FeatureServer/0"
    });
    map.add(parksLayer,0);

});

