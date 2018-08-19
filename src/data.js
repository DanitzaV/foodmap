
let infoWindow;
let resultados;


if (navigator.geolocation) {
  var pos;
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position)
    pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    fetch(`https://places.demo.api.here.com/places/v1/discover/explore?at=${pos.lat}%2C${pos.lng}&cat=restaurant&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg`).then(res => res.json()).then(result => window.filtrarRestaurant(result))
    window.filtrarRestaurant = (food) => {
      console.log(food)

      // fetch(`https://places.demo.api.here.com/places/v1/places/152jx7ps-df310e72f15c0f63b3a306061d757d65/media/images?app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg`).then(res => res.json()).then(result => console.log(result)).catch(err => console.log(err))
      let imagenes = food.results.items.forEach(e => {
        // let link = e.category.href;
        // fetch(link).then(res => res.json()).then(result =>console.log(result));
        let fo = e.href;
        return fetch(fo).then(res => res.json()).then(result => window.data(result))
      });



    }
    // let reusltado = new Array();

    window.data = (imagenes)=> {
      // var marker = new H.map.Marker(coordinate);
      console.log(imagenes);
      var marker = new H.map.Marker({ lat: imagenes.location.access[0].position[0], lng: imagenes.location.access[0].position[1] });
      // add custom data to the marker
      var html = `<div> <h5>${imagenes.name}</h5>
      <p> Direccion: ${imagenes.location.address.street}, ${imagenes.location.address.district}</p></div>
  `;
      marker.setData(html);

      var group = new H.map.Group();



      // add 'tap' event listener, that opens info bubble, to the group
      group.addEventListener('tap', function (evt) {

        var bubble = new H.ui.InfoBubble(evt.target.getPosition(), {
          // read custom data
          content: evt.target.getData()


        });

        // show info bubble
        ui.addBubble(bubble);
      }, false);

      // console.log(marcador)
      group.addObject(marker);
      map.addObject(group);
    window.mostrarRestaurantes(imagenes)

    }
    // console.log(reusltado)


    function moveMapToBerlin(map) {
      console.log(map)
      map.setCenter({ lat: pos.lat, lng: pos.lng });
      map.setZoom(14);


      var parisMarker = new H.map.Marker({ lat: pos.lat, lng: pos.lng });
      console.log(parisMarker)

      map.addObject(parisMarker);

    }
    var platform = new H.service.Platform({
      app_id: 'devportal-demo-20180625',
      app_code: '9v2BkviRwi9Ot26kp2IysQ',
      useHTTPS: true
    });
    var pixelRatio = window.devicePixelRatio || 1;
    var defaultLayers = platform.createDefaultLayers({
      tileSize: pixelRatio === 1 ? 256 : 512,
      ppi: pixelRatio === 1 ? undefined : 320
    });

    //Step 2: initialize a map  - not specificing a location will give a whole world view.
    var map = new H.Map(document.getElementById('map'),
      defaultLayers.normal.map, { pixelRatio: pixelRatio });

    //Step 3: make the map interactive
    // MapEvents enables the event system
    // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    // Create the default UI components
    var ui = H.ui.UI.createDefault(map, defaultLayers);

    // Now use the map as required...
    moveMapToBerlin(map);
    // addInfoBubble(map)
  })

}