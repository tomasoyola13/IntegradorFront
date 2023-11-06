function resumen() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let email = document.getElementById("email").value;
  let cantidad = parseInt(document.getElementById("cantidad").value);
  let categoria = parseInt(document.getElementById("categoria").value);
  let total = document.getElementById("total");
  let valor = calcular(cantidad, categoria);

  total.textContent = calcular(cantidad, categoria);

  alert(
    nombre +
      " " +
      apellido +
      " ha comprado " +
      cantidad +
      " tickets.\n\n" +
      "El total ha sido: $" +
      valor +
      "\n\n" +
      "El comprobante será enviado a " +
      email
  );
}

// Función para calcular el valor total de los tickets comprados
function calcular(cantidad, categoria) {
  let subtotal = cantidad * 200;
  let descuento;
  let valorFinal;

  switch (categoria) {
    case 1:
      descuento = parseInt(subtotal * 80) / 100;
      valorFinal = subtotal - descuento;
      break;

    case 2:
      descuento = parseInt(subtotal * 50) / 100;
      valorFinal = subtotal - descuento;
      break;

    case 3:
      descuento = parseInt(subtotal * 15) / 100;
      valorFinal = subtotal - descuento;
      break;
  }

  return valorFinal;
}

function borrar(){
  document.getElementById("formulario").reset()
}
