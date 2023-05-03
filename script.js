function aplicarDescuento(precioBase) {
    let descuento = 0;
    let descuentoSeleccionado = parseInt(prompt("Seleccione el descuento a aplicar:\n1- 20%\n2- 30%\n3- 40%"));
  
    switch (descuentoSeleccionado) {
      case 1:
        descuento = 0.2;
        break;
      case 2:
        descuento = 0.3;
        break;
      case 3:
        descuento = 0.4;
        break;
      default:
        alert("Opción invalida, no se aplicara descuento.");
    }
  
    return descuento;
  }
  
  function calcularPrecioFinal() {
    let precioBase = parseFloat(prompt("Ingrese el precio del producto:"));
  
    let formaPago = prompt("Ingrese la forma de pago (Efectivo/Tarjeta de credito o debito)").toLowerCase();
    let impuestos = 0;
    if (formaPago === "tarjeta de credito" || formaPago === "tarjeta de debito") {
      impuestos = 0.2;
      alert("Se aplicara un impuesto del 20% por pagar con tarjeta de credito o debito.");
    }
  
    let rebaja = confirm("¿Desea aplicar algun descuento?");
    let descuento = 0;
    if (rebaja) {
      descuento = aplicarDescuento(precioBase);
    }
  
    let precioConDescuento = precioBase;
    if (descuento > 0) {
      precioConDescuento = precioBase * (1 - descuento);
    }
  
    let precioConImpuestos = precioConDescuento * (1 + impuestos);
  
    let seguirComprando = true;
    while (seguirComprando) {
      alert(`El precio final del producto es: $${precioConImpuestos.toFixed(2)}`);
      let continuarComprando = confirm("¿Desea seguir comprando?");
  
      if (!continuarComprando) {
        break;
      }
  
      precioBase = parseFloat(prompt("Ingrese el precio del siguiente producto:"));
      formaPago = prompt("Ingrese la forma de pago (Efectivo/Tarjeta de credito o debito)").toLowerCase();
      impuestos = 0;
      if (formaPago === "tarjeta de credito" || formaPago === "tarjeta de debito") {
        impuestos = 0.2;
        alert("Se aplicara un impuesto del 20% por pagar con tarjeta de credito o debito.");
      }
  
      rebaja = confirm("¿Desea aplicar algun descuento?");
      descuento = 0;
      if (rebaja) {
        descuento = aplicarDescuento(precioBase);
      }
  
      precioConDescuento = precioBase;
      if (descuento > 0) {
        precioConDescuento = precioBase * (1 - descuento);
      }
  
      precioConImpuestos = precioConDescuento * (1 + impuestos);
    }
  }
  
  calcularPrecioFinal();