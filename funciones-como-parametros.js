class persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
        }

        saludar(fn) { //Recibimos como parámetro a la función fn (puede tener cualquier nombre)
            var {nombre,apellido} = this
            console.log(`Hola, me llamo ${nombre} ${apellido}`)
            if (fn) { //Esta condicional va a validar si se mandó algo o nor por parámetro, el codigo no se va a ejecutar si no nos pasaron nada
                fn(nombre, apellido, false) //SI esta función existe la vamos a llamar como hacemos siempre
                                            //una función va a dar verdadero si se pasa como parámetro
            }
        }

        tamannio() {
            if (this.altura >= 1.80) {
                console.log('Soy alto')
            } else {
                console.log('No soy alto :(')
            }
        }
    }

class desarrollador extends persona {
    constructor (nombre, apellido, altura) {
        super (nombre, apellido, altura)
        }

    saludar(fn) {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy dev`)
        var {nombre,apellido} = this
        //eso de arriba es 100% equivalente a var nombre = nombre, var apellido = apellido
        if (fn) { 
            fn(nombre, apellido, true) 
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev) {
        console.log('Ah mirá, no sabía que eras dev')
    }
}

var alejandro = new desarrollador('Pedro', 'Alejandro', 1.60)
var pedro = new persona('Pedro', 'Silva', 1.70)
var graciel = new persona('Graciel', 'Mendez', 1.60)

pedro.saludar(responderSaludo)//La función saludar está recibiendo como parámetro a la función respondeSaludo
alejandro.saludar(responderSaludo)//el fn hace que la función sea opcional
graciel.saludar()//Puede no ser mandada