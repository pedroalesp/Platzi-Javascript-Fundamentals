var pedro = {       
    nombre: 'Pedro',
    apellido: 'Silva',
    edad: 23
}

var graciel = {       
    nombre: 'Graciel',
    apellido: 'Mendez',
    edad: 24
}

var juan = {       
    nombre: 'Juan',
    apellido: 'Lopez',
    edad: 22
}

var gustavo = {       
    nombre: 'Gustavo',
    apellido: 'Blanco',
    edad: 22
}

var samuel = {       
    nombre: 'Samuel',
    apellido: 'Hidalgo',
    edad: 22
}

var rafa = {       
    nombre: 'Rafa',
    apellido: 'Blanco',
    edad: 20
}

var personas = [pedro, graciel, juan, gustavo, samuel, rafa]

//Formas de iterar un array
for (i = 0; i < personas.length; i++) {
    var persona = personas[i]  //La var persona será igual a la var i que itera por el array
    console.log(`${persona.nombre} ${persona.apellido} tiene ${persona.edad} años`)
}

//Otra forma de hacerlo es  sin declarar una variable, usando el nombre del array, el index del iterador e indicando la propiedad
for (i = 0; i < personas.length; i++) {
    console.log(`${personas[i].nombre} ${personas[i].apellido} tiene ${personas[i].edad} años`)
}

//FILTRAR UN ARRAY
const MAYORES = persona => persona.edad > 22
//el metodo filter es una función que recibe a otra función que será la que de la condición
//En este caso la var mayores es una arrow function que devolverá a las personas mayores de 22 años
//Se puede desglozar el objeto personas a ( {edad} ) y reemplazar persona.edad por edad
var personasMayores = personas.filter(MAYORES)

const MENORES =  ({edad}) => edad <= 22
var personasMenores = personas.filter(MENORES)

//METODO MAP
const ANNIOSAMESES = persona => {
    return {
        ...personas,
        edad: persona.edad *= 12
    }
}

var edadEnMeses = personas.map(ANNIOSAMESES)

//MÉTODO REDUCER
var totalMeses = 0

for (i = 0; i < personas.length; i++) {
    totalMeses += personas[i].edad
}
//Esta operación se puede escribir de otra forma con el metodo reducer

const reducer = (contador, {edad}) =>  contador + edad


var mesesEnTotal = personas.reduce(reducer, 0)
//Reduce requiere dos parámetros, una función y un contador inicial.
//La función reducer recibe al contador y a la persona