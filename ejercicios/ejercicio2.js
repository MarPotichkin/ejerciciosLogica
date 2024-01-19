/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//tiene más de un caracter y no tiene espacios en blanco 
function validarEntrada(palabra) {
  return palabra.length > 1 && !/\s/.test(palabra);
}

function mensajeError() {
  console.log("No se ingresó una palabra, sucesión de caracteres válidos o hay espacios");
}

function pedirPalabra(callback) {
  rl.question("Ingrese la palabra: ", (palabra) => {
    if (validarEntrada(palabra)) {
      callback(palabra);
    } else {
      mensajeError();
      pedirPalabra(callback);
    }
  });
}

function comparacionPalabras(palabra1, palabra2) {
  if ( palabra1.length !== palabra2.length || palabra1.toLowerCase() === palabra2.toLowerCase()) {
   return false 
  }

  //divido la cadena, ordeno alfabeticamente y junto 
  p1 = palabra1.toLowerCase().split("").sort().join("");
  p2 = palabra2.toLowerCase().split("").sort().join("");

  return p1 === p2
}

function anagrama() {
  console.log("PRIMERA PALABRA:");
  pedirPalabra((palabra1) => {
    console.log("SEGUNDA PALABRA");
    pedirPalabra((palabra2) => {
      console.log("Las palabras son: " + palabra1 + " y " + palabra2);
      console.log(comparacionPalabras(palabra1, palabra2));
      rl.close();
    });
  });
}

anagrama();
