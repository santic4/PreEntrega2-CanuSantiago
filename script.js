                                                           /* USUARIO Y LOCAL STORAGE*/

const btnClickCrear = document.getElementById("btnShowCrear");
const btnClickLogin = document.getElementById("btnMostrarFormulario");
const btnSalirCrear = document.getElementById("btnSalir");
const btnSalirLogin = document.getElementById("btnSalirLogin");
const contenedorCrear = document.getElementById("Crear");
const contenedorLogin = document.getElementById("Login");

//Acción de botones Login/Crear

btnClickCrear.addEventListener("click", () => {
  contenedorCrear.style.display = "block";
  contenedorLogin.style.display = "none";
});

btnClickLogin.addEventListener("click", () => {
  contenedorLogin.style.display = "block";
  contenedorCrear.style.display = "none";
});

btnSalirCrear.addEventListener("click", (event) => {
  event.preventDefault();
  contenedorCrear.style.display = "none";
  contenedorLogin.style.display = "none";
});

btnSalirLogin.addEventListener("click", (event) => {
  event.preventDefault();
  contenedorLogin.style.display = "none";
  contenedorCrear.style.display = "none";
});

// Obtener elementos del formulario
const formCrear = document.getElementById('crearFormulario');
const signUpButton = document.getElementById('signUp');

//SetTimeout para registrarse/inicar sesion
/*setTimeout(() => {

  let TimeoutUser = document.getElementsByClassName("formsVerificarUser")
  
  contenedorCrear.style.display = 'block';

},6000)*/

// Función para manejar el evento de envío del formulario
function eventoSignUp(event) {
  event.preventDefault(); // Prevenir el envío del formulario por defecto

  // Obtener los valores de los campos del formulario
  const email = document.getElementById('emailCrear').value;
  const password = document.getElementById('passwordCrear').value;
  const confirmPassword = document.getElementById('confirmPasswordCrear').value;
  const nombre = document.getElementById('nameCrear').value;
  const apellido = document.getElementById('apellidoCrear').value;
  const fechaNacimiento = document.getElementById('fechaNacimientoCrear').value;
  const dni = document.getElementById('dniCrear').value;
  const telefono = document.getElementById('telefono').value;

  // Verificar que los campos obligatorios estén completos
 
  if (!email || !password || !confirmPassword || !nombre || !apellido || !fechaNacimiento || !dni || !telefono) {
    Swal.fire({
      title: 'Campos incompletos',
      text: 'Por favor, complete todos los campos obligatorios.',
      icon: 'warning',
      confirmButtonText: 'Aceptar'
    });
    contenedorCrear.style.display = "none";

  formCrear.reset();
    return;
  }

  // Verificar que las contraseñas coincidan
  if (password !== confirmPassword) {
    Swal.fire(
      'Las contraseñas no coinciden.',
      ' Por favor, verifique.',
      'error'
    )
    contenedorCrear.style.display = "none";

  formCrear.reset();
    return
  }

  // Crear un objeto con los datos del usuario
  const usuario = {
    email: email,
    password: password,
    nombre: nombre,
    apellido: apellido,
    fechaNacimiento: fechaNacimiento,
    dni: dni,
    telefono: telefono
  };

  // Obtener el arreglo de usuarios del LocalStorage
  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  // Generar un ID único para el usuario
  const userId = generateUserId();

  // Agregar el ID al objeto del usuario
  usuario.id = userId;

  // Agregar el usuario al arreglo de usuarios
  usuarios.push(usuario);

  contenedorCrear.style.display = "none";

  // Guardar el arreglo de usuarios actualizado en el LocalStorage
  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  // Limpiar los campos del formulario
  formCrear.reset();

  // Mostrar un mensaje de éxito

  Swal.fire({
    title: 'Bienvenido!',
    text: "Usuario registrado correctamente.",
    icon: "success",
    timer: 2000,
    showConfirmButton: false,
    
  });

  usuario ?
  (btnShowCrear.style.display = 'none',
  btnMostrarFormulario.style.display = 'none',
  carritoIcon.style.display = 'block',
  carritoContainer.style.display = 'block',
  localStorage.setItem('carrito', JSON.stringify(carrito))) :

  usuario 

}

// Función para manejar el evento de inicio de sesión
function eventoSignIn(event) {
  event.preventDefault(); // Prevenir el envío del formulario por defecto

  // Obtener los valores de los campos del formulario
  const email = document.getElementById('emailLogin').value;
  const password = document.getElementById('passwordLogin').value;

  // Verificar que los campos obligatorios estén completos
  if (!email || !password) {
    Swal.fire(
      'Por favor, complete todos los campos obligatorios.',
      'warning'
    )
    return;
  }

  // Obtener el arreglo de usuarios del LocalStorage
  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  // Buscar el usuario por email y contraseña
  const usuario = usuarios.find((u) => u.email === email && u.password === password);

  // Verificar si el usuario existe
  usuario ?
  (btnShowCrear.style.display = 'none',
  btnMostrarFormulario.style.display = 'none',
  carritoIcon.style.display = 'block',
  carritoContainer.style.display = 'block',
  localStorage.setItem('carrito', JSON.stringify(carrito))) :
  Swal.fire(
    'Usuario no encontrado.',
    'Contraseña o email incorrectos.',
    'error'
  )

  usuario 

  contenedorLogin.style.display = "none";

  localStorage.setItem('carrito', JSON.stringify(carrito));

  actualizarCarrito ()
}

// Función para generar un ID único para el usuario
function generateUserId() {
  // Obtener el último ID utilizado del LocalStorage
  let lastUserId = localStorage.getItem('lastUserId');

  // Si no hay ningún ID almacenado, comenzar desde 1
  if (!lastUserId) {
    lastUserId = 0;
  }

  // Incrementar el ID en 1 para el nuevo usuario
  const newUserId = parseInt(lastUserId) + 1;

  // Guardar el nuevo ID en el LocalStorage
  localStorage.setItem('lastUserId', newUserId);

  return newUserId;
}

// Obtener elementos del formulario

const signInButton = document.getElementById('signIn');


// Agregar un evento de escucha al botón "Enviar"
signInButton.addEventListener('click', eventoSignIn);


// Agregar un evento de escucha al botón "Enviar"
signUpButton.addEventListener('click', eventoSignUp);


                                                              /*DOM*/

// Variables globales para almacenar los datos de los productos
let productos = [];

// Función para crear una card de producto
function crearCardProducto(producto) {
  const card = document.createElement('div');
  card.classList.add('card');

  const title = document.createElement('h3');
  title.textContent = producto.nombre;
  card.appendChild(title);

  const brand = document.createElement('p');
  brand.textContent = 'Marca: ' + producto.marca;
  card.appendChild(brand);

  const price = document.createElement('p');
  price.textContent = 'Precio: $' + producto.precio;
  card.appendChild(price);

  const stock = document.createElement('p');
  stock.textContent = 'Stock: ' + producto.stock;
  card.appendChild(stock);

  const addToCartBtn = document.createElement('button');
  addToCartBtn.textContent = 'Agregar al carrito';

  addToCartBtn.addEventListener('click', () => {
    if (producto.stock > 0) {
      agregarAlCarrito(producto);
      producto.stock -= 1;
      stock.textContent = 'Stock: ' + producto.stock;
      if (producto.stock === 0) {
        addToCartBtn.innerHTML = '<h4>Sin stock</h4>';
      }
    }
  });

  card.appendChild(addToCartBtn);
  return card;
}

// Función para filtrar y mostrar los productos
function filtrarProductos(categoria) {
  const productosFiltrados = categoria ? productos.filter(producto => producto.categoria === categoria) : productos;
  mostrarProductos(productosFiltrados);
}

// Función para mostrar los productos en el DOM
function mostrarProductos(productosMostrar) {
  productosContainer.innerHTML = ''; // Limpiar el contenedor de productos

  productosMostrar.forEach(producto => {
    const card = crearCardProducto(producto);
    productosContainer.appendChild(card);
  });
}

// Obtener el contenedor de productos y carrito
const productosContainer = document.getElementById('productosContainer');
const carritoContainer = document.getElementById('carritoContainer');

// Cargar los datos de productos y mostrarlos
fetch('./productos.json')
  .then(res => res.json())
  .then(data => {
    productos = data;
    mostrarProductos(productos);
  });


                                                                 /*CARRITO*/

// Array para almacenar los productos agregados al carrito
let carrito = [];


// Función para actualizar el contenido del carrito
function actualizarCarrito() {
  const carritoItems = document.getElementById('carritoItems');
  const carritoTotal = document.getElementById('carritoTotal');

  // Vaciar carrito antes de actualizarlo
  carritoItems.innerHTML = '';

  let total = 0;

  carrito.forEach((producto) => {
    const item = crearCardProductoCarrito(producto);
    carritoItems.appendChild(item);
    total += producto.precio;
  });

  localStorage.setItem('carrito', JSON.stringify(carrito));

  carritoTotal.textContent = '$' + total.toFixed(2);

}

// Obtener el elemento del icono del carrito
const carritoIcon = document.getElementById('carritoIcon');

carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Evento al hacer clic en el icono del carrito
carritoIcon.addEventListener('click', toggleCarrito);

// Variable para controlar el estado del carrito
let carritoVisible = false;

// Función para mostrar/ocultar el carrito
function toggleCarrito() {
  showCarrito = document.getElementById('carritoContainer')
  showCarrito.style.display = 'block';
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para agregar un producto al carrito y mostrarlo
function agregarAlCarrito(producto) {
  carrito.push(producto);
  actualizarCarrito();

  localStorage.setItem('carrito', JSON.stringify(carrito))

  !carritoVisible && toggleCarrito()

}

// Evento al hacer clic en el icono del carrito
carritoIcon.addEventListener('click', toggleCarrito);

localStorage.setItem('carrito', JSON.stringify(carrito))

// Agregar evento al botón de vaciar carrito
const vaciarCarritoBtn = document.getElementById('vaciarCarrito');
vaciarCarritoBtn.addEventListener('click', vaciarCarrito);


// Función para eliminar un producto del carrito
function eliminarDelCarrito(producto) {

  const index = carrito.indexOf(producto);
 
  index > -1 && (carrito.splice(index, 1), actualizarCarrito())

}


// Función para crear una card de producto en el carrito
function crearCardProductoCarrito(producto) {
  
  const card = document.createElement('div');
  card.classList.add('card-carrito');

  const title = document.createElement('h4');
  title.textContent = producto.nombre;
  card.appendChild(title);
  title.style.width = "200px"

  const price = document.createElement('p');
  price.textContent = '$' + producto.precio;
  card.appendChild(price);

  const img = document.createElement('img');
  img.src = producto.imagen;
  card.appendChild(img);

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Eliminar';
  removeBtn.addEventListener('click', () => {

    eliminarDelCarrito(producto);

  });
  card.appendChild(removeBtn);

  return card;
}



// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
  carrito.push(producto);
  actualizarCarrito();
}

const btnEsconder = document.getElementById('esconderCarrito')
const contCarrito = document.getElementById('carritoContainer')

btnEsconder.onclick = () => { contCarrito.style.display = 'none'};


// Función para vaciar el carrito
function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Conseguir producto desde .json
function getProducto(){
  fetch("./productos.json")
  .then(res => res.json())
  .then(data => crearCardProductoCarrito(data))
}

//Finalizar compra
const Comprar = document.getElementById("btnComprar")
Comprar.addEventListener('click', finalizarCompra)

function finalizarCompra(){

  Swal.fire({
    title: 'Compra exitosa',
    text: 'Nos comunicaremos en las próximas 24 horas hábiles con usted. Muchas gracias :)',
    icon: 'success',
    confirmButtonText: 'Aceptar'
  });
}

