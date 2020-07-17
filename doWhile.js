var contador = 0

const LLUEVE = () => Math.random() < 0.25 // La arrow function devolverá un valor menor a 0.25, lo que se refiere que llvueve menos del 25% de las veces
                //Se ponen los () de todos modos aunqye no se le pase parámetros

do {

    contador++

} while (!LLUEVE()) //Se va a ejecutar el bloque de código al menos una vez y se repetirá MIENTRAS no llueva

if (contador === 1) {
    console.log(`Fuí a ver si llovía ${contador} vez`)
} else {
    console.log(`Fuí a ver si llovía ${contador} veces`)
}
