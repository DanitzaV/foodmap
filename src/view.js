function mostrar() {
    $('.modal').modal();
}
   
  
window.mostrarRestaurantes = (imagenes)  => {
    let contenedor = document.getElementById('places');
    let numero;
    if(imagenes.location.address.house == undefined){
        numero = ' ';
    }else{
        numero = imagenes.location.address.house;
    }

  contenedor.innerHTML += `             
   
   <a class="waves-effect waves-light btn modal-trigger" href="#${imagenes.placeId}" onclick="mostrar()">${imagenes.name}</a>

<div id=${imagenes.placeId} class="modal">
            <div class="modal-content">
              <h4>${imagenes.name}</h4>
              <p>${imagenes.location.address.street} ${numero},${imagenes.location.address.district},${imagenes.location.address.city}</p>
              <p>${imagenes.contacts.website[0].label}: <a href="${imagenes.contacts.website[0].value}">${imagenes.contacts.website[0].value}</a></p>
            </div>
            <div class="modal-footer">
              <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
          </div>
`
    
    
    // places.innerHTML = `<a class="waves-effect waves-light btn modal-trigger" href="#${imagenes.placeId}">${imagenes.name}</a>`
}
