// Variables
const carrito = document.getElementById('carrito');
const producto = document.getElementById('lista-productos');
const listaProductos = document.querySelector('#lista-carrito tbody');




// Listeners
cargarEventListeners();

function cargarEventListeners() {
   // Dispara cuando se presiona "Agregar carrito"
   producto.addEventListener('click', comprarProducto);
}




// Funciones

// Anade el curso al carrito
function comprarProducto(e) {
   e.preventDefault();
   // Delegation para agregar carrito
   if (e.target.classList.contains('agregar-carrito')) {
      const producto = e.target.parentElement.parentElement;
      // Envia el producto seleccionado para tomar los datos
      leerDatosProducto(producto);
   }
}

// Lee los datos del curso
function leerDatosProducto(producto) {

   const infoProducto = {
      imagen: producto.querySelector('img').src,
      titulo: producto.querySelector('h4').textContent,
      precio: producto.querySelector('.precio span').textContent,
      id: producto.querySelector('a').getAttribute('data-id')
   }

   insertarCarrito(infoProducto);
}

// Muestra el producto seleccionado en el carrito
function insertarCarrito(producto) {
   const row = document.createElement('tr');
   row.innerHTML = `
      <td>
         <img src="${producto.imagen}" width=100>
      </td>
      <td>${producto.titulo}</td>
      <td>${producto.precio}</td>
      <td>
         <a href="#" class="borrar-curso" data-id="${producto.id}">X</a>
      </td>
   `;

   listaProductos.appendChild(row);
}