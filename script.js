

//Producto: objetos (id, nombre ,marca, precio, stock)

class Producto{

 constructor (id, nombre, marca,precio, categoria, codigo, stock){
  this.id = id,
  this.nombre = nombre,
  this.marca = marca,
  this.precio = precio,
  this.categoria = categoria,
  this.codigo = codigo,
  this.stock = stock
}
}

const libroElEternauta = new Producto (1,"ElEternauta","Héctor Oesterheld",5.599,"Libros","LIB-1",100)
const camiseta = new Producto (2,"camiseta","Adidas",11.559,"Indumentaria","I-AD-01",30)
const auricularesBlu = new Producto (3,"auricularesBl","Sony",23.999,"Electronica","E-AU-01", 15)
const zapatillasDeportivas = new Producto (4, "zapatillasDeportivas","Adidas",28.159,"Indumentaria","I-ZA-01",5)
const juegoMesaTEG = new Producto (5,"juegoMesaTEG","Ruibal",4.359,"Juego de Mesa","J-M-01",10)

//arrayProductos    
const arrayProductos = [libroElEternauta, camiseta, auricularesBlu, zapatillasDeportivas, juegoMesaTEG ]

// Carrito de compras
const carrito = [];

// Variable de control
let Comprando = true;

// Interacción con el cliente
const respuesta = prompt('¿Desea agregar un producto al carrito? (Sí/No)');

function InteraccionPorElCarrito(){
  while (Comprando) {


    if (respuesta.toLowerCase() === 'sí' || respuesta.toLowerCase() === 'si') {
      // Construir el mensaje de opciones
      let opciones = 'Productos disponibles:\n';
      arrayProductos.forEach((e) => {
        opciones += `ID: ${e.id}, Producto: ${e.nombre}, Precio: $${e.precio}\n`;
      });
    
      // Solicitar al cliente que elija un producto
      const opcionProducto = parseInt(prompt(opciones + 'Ingrese el número del producto que desea agregar al carrito:'));
    
      // Buscar el producto por su ID 
      const productoElegido = arrayProductos.find((e) => e.id === opcionProducto);

      //Agrega al carrito
      if (productoElegido) {
        // Verificar si hay suficiente stock
        if (productoElegido.stock > 0) {
          // Agregar el producto al carrito
          carrito.push(productoElegido);
          // Restar la cantidad elegida del stock del producto
          productoElegido.stock -= 1;
          alert(`${productoElegido.nombre} ha sido agregado al carrito.`);
        } else {
          alert(`No hay suficiente stock de ${productoElegido.nombre}.`);
        }
      } else {
        alert('El número ingresado no corresponde a ningún producto.');
      }
    
      // Preguntar si desea agregar otro producto
      const respuestaOtroProducto = prompt('¿Desea agregar otro producto? (Sí/No)');
      Comprando = (respuestaOtroProducto.toLowerCase() === 'sí' || respuestaOtroProducto.toLowerCase() === 'si');
    } else {
      // Salir del bucle si no desea agregar ningún producto
      Comprando = false;
    }
    }
    
    // Calcular el precio final
    let precioFinal = 0;
    carrito.forEach((e) => {
    precioFinal += e.precio;
    });
    
    // Construir el mensaje del carrito y precio final
    let mensajeCarrito = 'Carrito de compras:\n';
    carrito.forEach((e) => {
    mensajeCarrito += `Producto: ${e.nombre}, Precio: $${e.precio}\n`;
    });
    mensajeCarrito += `Precio final: $${precioFinal}`;
    
    // Mostrar el carrito de compras y precio final
    alert(mensajeCarrito);
    console.table(carrito)
}

InteraccionPorElCarrito()