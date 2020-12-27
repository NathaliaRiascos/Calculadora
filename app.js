const teclasNumeros  = document.querySelector('#numeros')
/*const etiquetas = document.get*/
document.addEventListener("DOMContentLoaded",() => {

     for(let i=9 - 1; i >= 0; i--){
          teclasNumeros.innerHTML += `<button class="contenedor_fondo">${i+1}</button>`;
     }      
})
