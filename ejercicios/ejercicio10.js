/*
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
 */

const morse = { 
    a: ".-",
    b: "-...",
    c: "-.-.",
    ch: "----",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    ñ: "--.--",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...", 
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    " ": "/",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    '"': ".-..-.",
    "/": "-..-."
}

function aMorse(frase){
    let fraseMorse = []
    for (let i = 0; i < frase.length; i++) {
        if(frase[i].toLowerCase() == "c" && frase[i+1].toLowerCase() == "h" ){
            fraseMorse.push(morse.ch + " " )
            i++;
        } else if(morse[frase[i].toLowerCase()] == undefined) {
            fraseMorse.push(" ")
        } else {
            fraseMorse.push(morse[frase[i].toLowerCase()] + " ")
        }
    }
    console.log(fraseMorse.join(""));
}

// aMorse("Hola como estas");
aMorse("¿tyuo?")