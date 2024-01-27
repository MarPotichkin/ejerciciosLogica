/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

function aBinario(num){
    if(num == 0){
        console.log("El número " + num + " en binario es: 0" )
    } else {
        let result = num;
        let binario = [];

        while (result > 0) {
            let resto = result % 2;
            binario.unshift(resto);
            result = Math.floor(result / 2);
            console.log(result)
        }
        console.log("El número " + num + " en binario es: " + binario.join(""))
    }
}

aBinario(21354);
aBinario(278);