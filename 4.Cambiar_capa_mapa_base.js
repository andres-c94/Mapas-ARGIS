//TOCA AGREGAR LOS MODULOS:  Basemap Toggle and BasemapGallery 

require(["esri/config", "esri/Map", "esri/views/MapView", "esri/widgets/BasemapToggle", "esri/widgets/BasemapGallery"], function (esriConfig, Map, MapView, BasemapToggle, BasemapGallery) {

    esriConfig.apyKey = "AAPK167f596c5f384bc7be631368a37ec48dmFf5qMXzasaWJtCwDR8fx4dfjNfgZ3ik0aWALYhWhrWMpaUe40UT1MwF_skD_Xd0";

    //CREA LA VISTA DEL MAPA
    const view = new MapView({
        container: "map4",
        map: map,
        zoom: 4,
        center: [15, 65]
    });

    
    //CREA EL MAPA BASE
    const map = new Map({
        basemap: "streets"
    });
    
    //CREA EL WIDGETS PARA CAMBIAR DE MAPA BASE
    const basemapToggle = new BasemapToggle({
        view: view,
        nextBasemap: "argis-imagery"
    });
    
    //AGREGA EL WIDGETS A EL MAPA
    view.ui.add(basemapToggle, "bottom,right");


    //SELECCIONAR MAPAS BASE DE UNA GALERIA
    const basemapGallery = new BasemapGallery({
        view: view,
        source: {
            query: {
                title: '"World Basemaps for Developers" AND owner:esri'
            }
        }
    });

    view.ui.add(basemapGallery, "top-right");




});

