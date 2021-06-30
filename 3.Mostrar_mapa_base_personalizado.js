
//SE AGREGAN LOS SOGUIENTES MODULOS  "esri/Basemap", "esri/layers/VectorTileLayer", "esri/layers/TileLayer" Y LAS SIGUIENTES FUNCIONES: Basemap, VectorTileLayer, TileLayer

require(["esri/config", "esri/Map", "esri/views/MapView", "esri/Basemap", "esri/layers/VectorTileLayer", "esri/layers/TileLayer"], function (esriConfig, Map, MapView, Basemap, VectorTileLayer, TileLayer) {

    esriConfig.apyKey = "AAPK167f596c5f384bc7be631368a37ec48dmFf5qMXzasaWJtCwDR8fx4dfjNfgZ3ik0aWALYhWhrWMpaUe40UT1MwF_skD_Xd0";

    //SE AGREGA LA CAPA DE PARQUES Y BOSQUES
    const vectorTileLayer = new VectorTileLayer({
        portalItem: {
            id: "6976148c11bd497d8624206f9ee03e30"
        },
        opacity: .75
    });

    //SOMBREADO MUNDIAL
    const imageTileLayer = new TileLayer ({
        portalItem:{ id: "1b243539f4514b6ba35e7d995890db1d" }
    });
   

    //AGREGANDO EL MAPA BASE 
    const basemap = new Basemap({ baseLayers: [imageTileLayer, vectorTileLayer] });

    //AGREGANDO EL MAPA (CONCEPTO)
    const map = new Map({ basemap: basemap });

    //AGREGANDO LA VISTA
     const view = new MapView({zoom: 5, container: "map3", map: map, center: [-100, 40]});






});






