require(["esri/config","esri/Map","esri/views/MapView","esri/tasks/Locator"], function(esriConfig,Map, MapView, Locator) {
  
    esriConfig.apiKey = "AAPK167f596c5f384bc7be631368a37ec48dmFf5qMXzasaWJtCwDR8fx4dfjNfgZ3ik0aWALYhWhrWMpaUe40UT1MwF_skD_Xd0";

  
    const map = new Map({
      basemap: "arcgis-navigation"
    });
  
    const view = new MapView({
      container: "map5",
      map: map,
      center: [-74.0817500,4.6097100],
      zoom: 12
    });
  



    // Find address
    const locatorTask = new Locator ({
      url: "http://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer"
    })
  
    view.on("click", function(evt){
        const params = {
          location: evt.mapPoint
        };
  
       locatorTask.locationToAddress(params)
          .then(function(response) { // Show the address found
            const address = response.address;
            showAddress(address, evt.mapPoint);
            
            document.write(address);
        

          }, function(err) { // Show no address found
            showAddress("No address found.", evt.mapPoint);
          });
  
      });
  
    function showAddress(address, pt) {
      view.popup.open({
        title:  + Math.round(pt.longitude * 100000)/100000 + ", " + Math.round(pt.latitude * 100000)/100000,
        content: address,
        location: pt
    
      });
      
  
    }
    
  });
  
 



  