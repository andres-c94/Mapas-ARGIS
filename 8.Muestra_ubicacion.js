/*
Se debe agregar la libreria: esri/widgets/locate y la funcion: Locate
*/



require(["esri/config", "esri/Map", "esri/views/MapView", "esri/widgets/Locate"], function (esriConfig, Map, MapView, Locate) {

    esriConfig.apiKey = "AAPK167f596c5f384bc7be631368a37ec48dmFf5qMXzasaWJtCwDR8fx4dfjNfgZ3ik0aWALYhWhrWMpaUe40UT1MwF_skD_Xd0";

    //CREAR UN NUEVO MAPA (CONCEPTO)
    const map = new Map({ basemap: "arcgis-navigation" });

    //CREAR LA VISTA DEL MAPA 
    const view = new MapView({container:"map8", map:map, zoom:2, center:[-40, 28]});

    //FUNCION DE LOCALIZACION
    const locate = new Locate({

        view: view,
        useHeadingEnabled: false,
        goToOverride: function (view, options) {
            options.target.scale = 1500;
            return view.goTo(options.target);
        }
    });

    view.ui.add(locate, "top-left");
});





//<script src="mapa(ubicacion).js"></script>
