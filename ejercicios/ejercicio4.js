/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function esPrimo(numero){
  if (numero === 1){
    return false
  }

  //verificar si un número tiene o no divisores menores o iguales a su raíz
  //ej 9 => 3/3 
  for (let i = 2; i <= Math.sqrt(numero); i++){
    if(numero % i == 0){
      return false
    }
  }

  return true
}

function numeros(){
  for (let i = 1; i <= 100; i++) {
    if (esPrimo(i)){
      console.log(i + " es un número primo")
    }
  }
}

numeros();