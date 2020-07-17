//Creación de prototipos en js
function persona (nombre, apellido, altura) //parámetros recibidos
{
   this.nombre = nombre //asignación de valor de atributos
   this.apellido = apellido
   this.altura = altura
}

var graciel = new persona('Graciel', 'Mendez', 1.60)
var gustavo = new persona('Gustavo', 'Blanco', 1.83)
var pedro = new persona('Pedro', 'Silva', 1.70)//Parámetros enviados
//La palabra reservada new va a crear un nuevo objeto con el prototipo persona, implícitamente la función va a retornar un nuevo objeto
//con los atributos que se pasaron por parámetro. this.nombre y this.apellido hacen referencia a los atributos del nuevo objeto mientras que nombre y apellido
//se refieren a los valores asignados que se pasaron por parámetros, en este caso 'Pedro' y 'Silva'

//Así podemos asignar nuevos atributos para que cumplan una función
persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
//Recuerda que la palabra this hace referencia al prototipo persona
persona.prototype.tamannio = function () { 
    //Esto igual lo puedes hacer con return this.altura > 1.8 y regresará un boolean
    if (this.altura >= 1.80) {
        console.log('Soy alto')
    } else {
        console.log('No soy alto :(')
    }
}


//pedro.saludar()

////////////////////////////
//HERENCIA EN JS 
 
function desarrollador (nombre, apellido) {
this.nombre = nombre
this.apellido = apellido
}

heredaDe(desarrollador, persona)

desarrollador.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy dev`)
}


function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo.prototype
}

var alejandro = new desarrollador('Pedro', 'Alejandro', 1.60)

//ESTO SE PUEDE HACER DE OTRA FORMA CON EL NUEVO ESTANDAR ENMASCRPT6
//Recuerda que por debajo todo es un prototipo

class persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
        }

        saludar() { //Nótese que ya no hace falta la palabra function para agregar los metodos
            console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
        }

        tamannio() {
            if (this.altura >= 1.80) {
                console.log('Soy alto')
            } else {
                console.log('No soy alto :(')
            }
        }
    }
//De esta forma creamos la clase persona que va a tener un metodo llamado constructor que se va a ejecutar cada vez que creemos un 
//nuevo objeto de esta classe.
//Ahora, ¿Cómo hacemos para crear una nueva clase, ej desarrollador y que herede los métodos de perosna?
//pues en js no se hereda, se extiende

class desarrollador extends persona {
    constructor (nombre, apellido, altura) {
        super (nombre, apellido, altura) //No podemos hacer uso de this y los atributos sin antes llamar al super constructor de esta forma. Haciendo referencia a la clase persona
        //this.nombre = nombre
        //this.apellido = apellido
       // this.altura = altura
        }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy dev`)
    }
}
    
    
    var alejandro = new desarrollador('Pedro', 'Alejandro', 1.60)
    var graciel = new persona('Graciel', 'Mendez', 1.60)
    var gustavo = new persona('Gustavo', 'Blanco', 1.83)
    var pedro = new persona('Pedro', 'Silva', 1.70)