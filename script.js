/*
//Funciones

function CalcularPrecioTotal() {
  let precioFinal = 0;
  carrito.forEach((e) => {
    precioFinal += e.precio;
  });
  precioFinal = precioFinal.toFixed(3);
  return precioFinal;
}


function verificarEnvioGratis(precioFinal) {
  if (precioFinal > 50.000) {
    alert('Superaste los $50.000. ¡El envío es gratis!');
  }
}

class Producto {
  constructor(id, nombre, marca, precio, categoria, codigo, stock) {
    this.id = id;
    this.nombre = nombre;
    this.marca = marca;
    this.precio = precio;
    this.categoria = categoria;
    this.codigo = codigo;
    this.stock = stock;
  }
}

const libroElEternauta = new Producto(1, "ElEternauta", "Héctor Oesterheld", 5.599, "Libros", "LIB-1", 100);
const camisetaAdidas = new Producto(2, "camisetaAdidas", "Adidas", 11.559, "Indumentaria", "I-AD-01", 30);
const auricularesBluetooth = new Producto(3, "auricularesBluetooth", "Sony", 23.999, "Electronica", "E-AU-01", 15);
const zapatillasDeportivas = new Producto(4, "zapatillasDeportivas", "Adidas", 28.159, "Indumentaria", "I-ZA-01", 3);
const juegoMesaTEG = new Producto(5, "TEG", "Ruibal", 4.359, "Juego de Mesa", "J-M-01", 10);

//arrayProductos
const arrayProductos = [libroElEternauta, camisetaAdidas, auricularesBluetooth, zapatillasDeportivas, juegoMesaTEG];

// Carrito de compras
const carrito = [];

let Comprando = true;

// Interaccion con el cliente
const respuesta = prompt('¿Desea agregar un producto al carrito? (Sí/No)');

alert(`Si tu pedido supera los $50.000, ¡te regalamos el envio!`)

function InteraccionPorElCarrito() {
  while (Comprando) {
    if (respuesta.toLowerCase() === 'sí' || respuesta.toLowerCase() === 'si') {
      
      let opciones = 'Productos disponibles:\n';

      // Filtrar los productos disponibles por stock
      const productosDisponibles = arrayProductos.filter((e) => e.stock > 0);

      // Mostrar solo los productos disponibles en las opciones
      productosDisponibles.forEach((e) => {
        opciones += `ID: ${e.id}, Producto: ${e.nombre}, Precio: $${e.precio}\n`;
      });

      // Solicitar al cliente que elija un producto
      const opcionProducto = parseInt(prompt(opciones + 'Ingrese el número del producto que desea agregar al carrito:'));

      // Buscar el producto por su ID en la lista de productos disponibles
      const productoElegido = productosDisponibles.find((e) => e.id === opcionProducto);

      if (productoElegido) {
        // Agregar el producto al carrito
        carrito.push(productoElegido);

        // Restar el stock del producto seleccionado
        productoElegido.stock -= 1;
        alert(`${productoElegido.nombre} ha sido agregado al carrito.`);
      } else {
        alert('Stock insuficiente, elije otro producto.');
      }

      // Preguntar si desea agregar otro producto
      const respuestaOtroProducto = prompt('¿Desea agregar otro producto? (Sí/No)');
      Comprando = (respuestaOtroProducto.toLowerCase() === 'sí' || respuestaOtroProducto.toLowerCase() === 'si');
    } else {
      // Salir del bucle si no desea agregar ningun producto
      Comprando = false;
    }
  }

  // Calcular el precio final
  precioFinal = CalcularPrecioTotal();

  // Verificar si el envio es gratis
  verificarEnvioGratis(precioFinal);


  // Mensaje del carrito y precio final
  let mensajeCarrito = 'Carrito de compras:\n';
  carrito.forEach((e) => {
    mensajeCarrito += `Producto: ${e.nombre}, Precio: $${e.precio}\n`;
  });
  mensajeCarrito += `Precio final: $${precioFinal}`;

  // Mostrar el carrito de compras y precio final
  alert(mensajeCarrito);
  console.table(carrito);
  console.log(`Precio Total: $${precioFinal}`);
}

InteraccionPorElCarrito();
*/

/*

mostrarBotonCrear = document.getElementById("btnShowCrear")
mostrarBotonCrear.addEventListener("click", function() {
  document.getElementById("Crear").classList.add("show");
})

const showPass = document.querySelector("#showPass")

function verPass(){
  let userPassword = document.getElementById("passwordCrear")

  if (userPassword.type == "password"){
    userPassword.type = "text";
  }else{
    userPassword.type = "password"
  }
}

showPass.addEventListener("mouseover", verPass)
showPass.addEventListener("mouseout", verPass)


// Obtener referencias a los elementos del DOM
const emailInput = document.getElementById('emailLogin');
const passwordInput = document.getElementById('passwordLogin');
const submitButton = document.getElementById('submitLogin');
const btnMostrarFormulario = document.getElementById('btnMostrarFormulario');
const contenedorLogin = document.getElementById('Login');

// Agregar evento de clic al botón "Iniciar sesión"
btnMostrarFormulario.addEventListener('click', function() {
  contenedorLogin.style.display = 'block';
});

// Agregar un evento de escucha para el botón de inicio de sesión
submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del formulario

  // Obtener los valores de los campos de entrada
  const email = emailInput.value;
  const password = passwordInput.value;

  // Realizar la lógica de inicio de sesión
  if (email && password) {
    // Aquí puedes realizar la validación del usuario y la contraseña con tu lógica de backend

    // Simplemente mostramos un mensaje en la consola para este ejemplo
    console.log('Inicio de sesión exitoso');
  } else {
    console.log('Por favor, complete todos los campos');
  }
});*/

const btnClickCrear = document.getElementById("btnShowCrear");
const btnClickLogin = document.getElementById("btnMostrarFormulario");
const btnSalirCrear = document.getElementById("btnSalir");
const btnSalirLogin = document.getElementById("btnSalirLogin");
const contenedorCrear = document.getElementById("Crear");
const contenedorLogin = document.getElementById("Login");

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
});
//ACA