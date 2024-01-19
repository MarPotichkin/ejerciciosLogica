/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

/*
 * para permitir que el usuario ingrese una cadena
 * no puedo usar prompt porque es una función específica de navegador
 * uso módulo readlineen Node.js para leer la entrada del usuario desde la consola
 */

//importar el módulo
const readline = require("readline");

//crear interfaz
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese una cadena de texto: ", (texto) => {
  function validarEntrada(cadena) {
    return cadena != "";
  }

  function invertirOrden() {
    if (validarEntrada(texto)) {
      let textoInvertido = "";

      for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
      }
      console.log("Texto ingresado: " + texto);
      console.log("Texto invertido: " + textoInvertido);
      rl.close();
    } else {
      console.log("no se ingresó ningún texto")
      rl.close();
    }

  }

  invertirOrden();
});
