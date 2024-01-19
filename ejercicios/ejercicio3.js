/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

function fibonacci() {
    let x= 0, y = 1, z; 
    console.log("n0"+ " = "+ x);
    console.log("n1"+ " = "+ y);
    
    for (let i = 0; i <= 50; i++) {
            z = x + y
            console.log("n"+ i + " = "+ z);

            x = y;
            y = z;
    }
}

fibonacci();