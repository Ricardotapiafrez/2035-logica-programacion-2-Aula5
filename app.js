// Declaración de variables globales.
let numeroSecreto = 0; // Almacena el número secreto que el usuario debe adivinar.
let intentos = 0; // Lleva el conteo de intentos realizados por el usuario.
let listaNumerosSorteados = []; // Almacena los números que ya han sido sorteados para evitar repeticiones.
let numeroMaximo = 10; // Determina el rango máximo del número secreto.

// Función para asignar texto a un elemento HTML.
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento); // Selecciona el elemento HTML según el selector proporcionado.
  elementoHTML.innerHTML = texto; // Establece el contenido del elemento HTML al texto proporcionado.
  return; // Finaliza la ejecución de la función.
}

// Función para verificar si el intento del usuario es correcto.
function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value); // Obtiene y convierte a número el valor ingresado por el usuario.

  if (numeroDeUsuario === numeroSecreto) {
    // Si el número ingresado coincide con el número secreto.
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    ); // Muestra un mensaje indicando que acertó y cuántos intentos realizó.
    document.getElementById("reiniciar").removeAttribute("disabled"); // Habilita el botón para reiniciar el juego.
  } else {
    // Si el número ingresado no coincide con el número secreto.
    if (numeroDeUsuario > numeroSecreto) {
      // Si el número ingresado es mayor al número secreto.
      asignarTextoElemento("p", "El número secreto es menor"); // Informa que el número secreto es menor.
    } else {
      // Si el número ingresado es menor al número secreto.
      asignarTextoElemento("p", "El número secreto es mayor"); // Informa que el número secreto es mayor.
    }
    intentos++; // Incrementa el contador de intentos.
    limpiarCaja(); // Limpia la caja de texto donde el usuario ingresa su número.
  }
  return; // Finaliza la ejecución de la función.
}

// Función para limpiar la caja de texto.
function limpiarCaja() {
  document.querySelector("#valorUsuario").value = ""; // Vacía el valor del campo de entrada de texto.
}

// Función para generar un número secreto único.
function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1; // Genera un número aleatorio entre 1 y el número máximo.

  console.log(numeroGenerado); // Muestra el número generado en la consola para depuración.
  console.log(listaNumerosSorteados); // Muestra la lista de números ya sorteados en la consola.

  if (listaNumerosSorteados.length == numeroMaximo) {
    // Si ya se han sorteado todos los números posibles.
    asignarTextoElemento("p", "Ya se sortearon todos los números posibles"); // Muestra un mensaje indicando que no quedan más números por sortear.
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      // Si el número generado ya está en la lista de números sorteados.
      return generarNumeroSecreto(); // Llama recursivamente a la función para generar otro número.
    } else {
      // Si el número generado es único.
      listaNumerosSorteados.push(numeroGenerado); // Agrega el número a la lista de números sorteados.
      return numeroGenerado; // Devuelve el número generado.
    }
  }
}

// Función para establecer las condiciones iniciales del juego.
function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto!"); // Muestra el título del juego.
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`); // Muestra un mensaje con el rango de números permitido.
  numeroSecreto = generarNumeroSecreto(); // Genera y asigna el número secreto.
  intentos = 1; // Reinicia el contador de intentos.
  console.log(numeroSecreto); // Muestra el número secreto en la consola para depuración.
}

// Función para reiniciar el juego.
function reiniciarJuego() {
  limpiarCaja(); // Limpia la caja de texto.
  condicionesIniciales(); // Establece las condiciones iniciales nuevamente.
  document.querySelector("#reiniciar").setAttribute("disabled", "true"); // Deshabilita el botón de reinicio.
}

// Llama a las condiciones iniciales al cargar el script.
condicionesIniciales();
