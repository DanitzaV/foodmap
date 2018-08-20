function mostrar() {
    $('.modal').modal();
}
   let restaurantes = new Array()
function datosRes(food){
    return restaurantes.push(food)
}

function filtrar() {
    console.log(restaurantes)
    let lista = document.getElementById('select').value;
    let tagsrestaurant = new Array();
    restaurantes.forEach(element => {
        if(element.tags){
          return  tagsrestaurant.push(element)
        } 
    });
    tagsrestaurant.forEach(element => {
        let contenedor = document.getElementById('places');
        if (element.tags[0].id == lista) {
            console.log(element)
            contenedor.innerHTML += `<a class="waves-effect waves-light btn modal-trigger" href="#${element.placeId}" onclick="mostrar()">${element.name}</a>
<div id=${element.placeId} class="modal">
            <div class="modal-content">
              <h4>${element.name}</h4>
              <p> Descripcion : ${element.media.editorials.items[0].description}</p>
              <p>Direccion: ${element.location.address.street} ,${element.location.address.district},${element.location.address.city}</p>
              
              <p>${element.contacts.website[0].label}: <a href="${element.contacts.website[0].value}">${element.contacts.website[0].value}</a></p>
            </div>
            <div class="modal-footer">
              <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
          </div>`;
        }
    });

    console.log(tagsrestaurant)
    console.log(lista)
}
window.mostrarRestaurantes = (imagenes)  => {
    let contenedor = document.getElementById('places');
    let numero;
   let abierto;
   let opening;
    if(imagenes.location.address.house == undefined){
        numero = ' ';
    }else{
        numero = imagenes.location.address.house;
    }
    
    if(imagenes.extended == undefined){ 
     abierto = 'contenido no disponible';
    }else if(imagenes.extended.openingHours.isOpen == true){
        abierto = 'abierto';
    }else{
        abierto = 'cerrado';
    }
    if(imagenes.extended  == undefined){
        opening = 'contenido no disponible'; 
    }else{
        opening= imagenes.extended.openingHours;
    }
   
  contenedor.innerHTML += `<a class="waves-effect waves-light btn modal-trigger btn-orange" href="#${imagenes.placeId}" onclick="mostrar()">${imagenes.name}</a>
<div id=${imagenes.placeId} class="modal">
            <div class="modal-content">
              <h4>${imagenes.name}</h4>
              <p> Descripcion : ${imagenes.media.editorials.items[0].description}</p>
              <p>Abierto ahora: ${abierto}
              <p>${opening.label}: ${opening.text}</p>
              <p>${imagenes.contacts.phone[0].label}:  ${imagenes.contacts.phone[0].value}</p>
              <p>Direccion: ${imagenes.location.address.street} ${numero},${imagenes.location.address.district},${imagenes.location.address.city}</p>
              <p>${imagenes.contacts.website[0].label}: <a href="${imagenes.contacts.website[0].value}">${imagenes.contacts.website[0].value}</a></p>
            </div>
            <div class="modal-footer">
              <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
          </div>`;
    
    
    // places.innerHTML = `<a class="waves-effect waves-light btn modal-trigger" href="#${imagenes.placeId}">${imagenes.name}</a>`
}
