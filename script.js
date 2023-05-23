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

//Producto: objetos (id, nombre ,marca, precio, stock)

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


  // Construir el mensaje del carrito y precio final
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