require(["esri/config", "esri/Map", "esri/views/MapView", "esri/Graphic", "esri/layers/GraphicsLayer"], function (esriConfig, Map, MapView, Graphic, GraphicsLayer) {

    esriConfig.apiKey = "AAPK167f596c5f384bc7be631368a37ec48dmFf5qMXzasaWJtCwDR8fx4dfjNfgZ3ik0aWALYhWhrWMpaUe40UT1MwF_skD_Xd0"

    // CREA UN NUEVO MAPA (CONCEPTO)
    const map = new Map({ basemap: "arcgis-topographic" });

    //CREA LA VISTA DEL MAPA 
    const view = new MapView({ map: map, center: [-118.805, 34.027], zoom: 13, container: "map2" });
    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    //AÑADIR PUNTO EN EL MAPA 
    const point = { type: "point", longitude: -118.80657463861, latitude: 34.0005930608889 };
    const simpleMarkerSymbol = { type: "simple-marker", color: [4, 30, 133] };
    const pointGraphic = new Graphic({ geometry: point, symbol: simpleMarkerSymbol });
    graphicsLayer.add(pointGraphic);

    //CREAR GRAFICO DE LINEA 
    const polyline = { type: "polyline", paths: [[-118.821527826096, 34.0139576938577], [-118.814893761649, 34.0080602407843], [-118.808878330345, 34.0016642996246], [-118.8044891764656, 34.00658011855135]] }
    const simpleLineSymbol = { type: "simple-line", color: [226, 119, 40], with: 2 };
    const polylineGraphic = new Graphic({ geometry: polyline, symbol: simpleLineSymbol })
    graphicsLayer.add(polylineGraphic);

    //CREAR POLIGONO 

    const polygon = { type: "polygon", rings: [[-118.818984489994, 34.0137559967283], [-118.806796597377, 34.0215816298725], [-118.791432890735, 34.0163883241613], [-118.79596686535, 34.008564864635], [-118.808558110679, 34.0035027131376]] };
    const simpleFillsymbol = { type: "simple-fill", color: [227, 139, 79, 0.8] };
    const polygonGraphic = new Graphic({ geometry: polygon, symbol: simpleFillsymbol });
    graphicsLayer.add(polygonGraphic);

});

//<script src="mapa(puntosYpoligonos).js"></script>