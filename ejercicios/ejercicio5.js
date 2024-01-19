/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function validarEntrada(entrada) {
  numero = parseInt(entrada);
  return !isNaN(numero) && numero >= 0;
}

function mensajeError(){
  console.log("No se ingresó un dato válido")
  rl.close()
}

function areaTriangulo() {
  rl.question("Ingrese la base: ", (base) => {
    if (validarEntrada(base)) {
      b = parseInt(base);
      rl.question("Ingrese la altura: ", (altura) => {
        if (validarEntrada(altura)) {
          h = parseInt(altura);
          let triangulo = (b * h) / 2;
          console.log("Área del triangulo = " + triangulo);
          rl.close();
        } else {
          mensajeError()
        }
      });
    } else {
      mensajeError()
    }
  });
}

function areaCuadrado() {
  rl.question("Ingrese el lado: ", (lado) => {
    if (validarEntrada(lado)) {
      l = parseInt(lado);
      console.log("Área del cuadrado = " + l * l);
      rl.close();
    } else {
      mensajeError()
    } 
  });
}

function areaRectangulo() {
  rl.question("Ingrese el largo: ", (largo) => {
    if (validarEntrada(largo)) {
      l = parseInt(largo);
      rl.question("Ingrese el ancho: ", (ancho) => {
        if (validarEntrada(ancho)) {
          a = parseInt(ancho);
          console.log("Área del rectangulo = " + l * a);
          rl.close();
        } else {
          mensajeError()
        } 
      });
    } else {
      mensajeError()
    } 
  });
}

function areaPoligono(opcion) {
  poligono = parseInt(opcion);
  switch (poligono) {
    case 1:
      areaTriangulo();
      break;

    case 2:
      areaCuadrado();
      break;

    case 3:
      areaRectangulo();
      break;

    default:
      console.log("opción no válida, ingrese un número del 1 al 3");
      rl.close();
      break;
  }
}

rl.question(
  "Ingrese el número correspondiente al tipo de polígono que quiere calcular el área: 1= Triángulo 2= Cuadrado 3= Rectángulo : ",
  (opcion) => {
    areaPoligono(opcion);
  }
);
