# Documentación del Juego del Número Secreto

## Información General
Este código implementa un juego llamado "Juego del número secreto" como parte del contenido de la clase "Lógica de programación: explorar funciones y listas" y "Git y GitHub: repositorio, commit y versiones" de la unidad **Principiante en Programación G8 - ONE** perteneciente a la certificación **ORACLE ONE G8- INACAP**.

### Descripción del Juego
El objetivo del juego es que el usuario adivine un número secreto generado aleatoriamente por el sistema. El juego proporciona pistas indicando si el número secreto es mayor o menor al ingresado por el usuario. El juego finaliza cuando el usuario acierta el número secreto.

---

## Variables Principales

- **`numeroSecreto`**: Almacena el número secreto generado aleatoriamente.
- **`intentos`**: Contador del número de intentos realizados por el usuario.
- **`listaNumerosSorteados`**: Lista que almacena los números ya sorteados para evitar repeticiones.
- **`numeroMaximo`**: Valor máximo del rango en el que se genera el número secreto (valor predeterminado: 10).

---

## Funciones

### `asignarTextoElemento(elemento, texto)`
Asigna un texto específico a un elemento HTML.
- **Parámetros:**
  - `elemento`: Selector CSS del elemento HTML.
  - `texto`: Contenido de texto que se asignará al elemento.
- **Retorno:** Ninguno.

### `verificarIntento()`
Verifica si el número ingresado por el usuario coincide con el número secreto.
- **Proceso:**
  1. Obtiene el número ingresado por el usuario desde un campo de entrada.
  2. Compara el número ingresado con el número secreto:
     - Si coincide, indica el éxito y habilita el botón de reinicio.
     - Si no coincide, proporciona una pista (mayor/menor) y aumenta el contador de intentos.
  3. Limpia el campo de entrada.
- **Retorno:** Ninguno.

### `limpiarCaja()`
Limpia el valor del campo de entrada de texto.
- **Parámetros:** Ninguno.
- **Retorno:** Ninguno.

### `generarNumeroSecreto()`
Genera un número secreto aleatorio que no haya sido sorteado previamente.
- **Proceso:**
  1. Genera un número aleatorio entre 1 y `numeroMaximo`.
  2. Comprueba si el número ya ha sido sorteado.
  3. Si ya se han sorteado todos los números posibles, muestra un mensaje informativo.
  4. De lo contrario, agrega el número generado a la lista de números sorteados y lo retorna.
- **Retorno:** Número secreto generado.

### `condicionesIniciales()`
Establece las condiciones iniciales del juego.
- **Proceso:**
  1. Muestra los encabezados y mensajes iniciales.
  2. Genera un nuevo número secreto.
  3. Reinicia el contador de intentos.
- **Retorno:** Ninguno.

### `reiniciarJuego()`
Reinicia el estado del juego para una nueva partida.
- **Proceso:**
  1. Limpia el campo de entrada.
  2. Establece las condiciones iniciales.
  3. Deshabilita el botón de reinicio.
- **Retorno:** Ninguno.

---

## Flujo de Ejecución
1. **Inicialización:**
   - La función `condicionesIniciales()` se ejecuta automáticamente al cargar el código.
   - Se generan los encabezados y mensajes iniciales, y el número secreto.

2. **Interacción del Usuario:**
   - El usuario ingresa un número e intenta adivinar el número secreto.
   - La función `verificarIntento()` gestiona cada intento.

3. **Finalización:**
   - Cuando el usuario acierta, se muestra un mensaje de éxito y se habilita el botón de reinicio.

4. **Reinicio del Juego:**
   - Al presionar el botón de reinicio, se ejecuta la función `reiniciarJuego()` para iniciar una nueva partida.

---

## Elementos HTML Esperados
- **Campo de entrada con ID:** `valorUsuario`
- **Elemento de párrafo para mensajes:** `<p>`
- **Encabezado:** `<h1>`
- **Botón de reinicio con ID:** `reiniciar`

---

## Notas Adicionales
- El rango del número secreto puede ajustarse cambiando el valor de la variable `numeroMaximo`.
- Se realiza un control de repetición para garantizar que cada número generado sea único hasta agotar todas las opciones posibles.
- Mensajes interactivos ayudan al usuario a comprender las pistas proporcionadas por el sistema.
