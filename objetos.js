//DIFERENTES FORMAS DE DESGLOZAR Y ACCEDER A UN OBJETO
var pedro = {       //Un objeto no es mas que clave: valor (key: value)
    nombre: 'Pedro',
    apellid: 'Silva',
    edad: 23
}

function imprimirNombreEnMayusc (persona) { //Aquí se le indica a la función que entre al objeto pedro
    var nombre = persona.nombre.toUpperCase() //Y tome el atributo nombre
    //var { nombre } = persona --> de esta forma podemos hacer lo mismo que arriba, se está declarando la variable {nombre} que va a ser igual a persona.nombre
    console.log(nombre)
}

imprimirNombreEnMayusc(pedro)
//-------------------------------------------------------------------------------------------------------

//De esta forma se puede hacer exactamente lo mismo sin declarar una nueva variable
function imprimirNombreEnMayusc (persona) {
    console.log(persona.nombre.toUpperCase())
}

imprimirNombreEnMayusc(pedro)
//-------------------------------------------------------------------------------------------------------

//O simplemente podemos acceder al atributo que nos interesa de esta forma
function imprimirNombreEnMayusc ({nombre}) {
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusc(pedro)
//-------------------------------------------------------------------------------------------------------

//Podemos definir un objeto dentro de la misma llamada de la función

imprimirNombreEnMayusc({ nombre: 'Cuchurrumi' })
//-------------------------------------------------------------------------------------------------------
//Pequeño reto de la clase
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

//De ambas formas esto puede tener resultado

function imprimirNombreyEdad (persona) {
    console.log(`Hola, mi nombre es ${persona.nombre} ${persona.apellido} y tengo ${edad} años`)
}

function imprimirNombreyEdad ({ nombre, apellido, edad }) {
    console.log(`Hola, mi nombre es ${nombre} ${apellido} y tengo ${edad} años`)
}

imprimirNombreyEdad(pedro)
imprimirNombreyEdad(graciel)

//-------------------------------------------------------------------------------------------------------
//Como los objetos se comportan al ser pasados como parámetros en js

var pedroDelFuturo = function (persona) {
    return {
        ... persona, //De esta forma creamos un objeto exactamente igual
        edad: persona.edad + 1
    }
}
//Al final puedo tener dos objetos, el original y el que me regresará esta función que puedo guardar cmo variable, que tendrá mi edad modificada

//-------------------------------------------------------------------------------------------------------
//Pequeña práctica de condicionales con objetos
//ojo que no todo tiene un sentido aquí
var pedro = {
    nombre: 'Pedro',
    edad: 23
}

var graciel = {
    nombre: 'Graciel',
    edad: 15
}

const MAYORIA_DE_EDAD = 18

function esAdulto (persona) { //Estafunción solo me regresará un valor booleano
    return persona.edad >= MAYORIA_DE_EDAD
}

const ES_ADULTO =  ({ edad }) => edad >= MAYORIA_DE_EDAD //arrow function, misma función que la de arriba
     

function esMayor (persona) {
    if (esAdulto (persona)) //El if recibe como condición el resultado de la función esAdulto(), al mismo tiempo la ejecuta
    {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} no es mayor de edad`)
    }
}

const ES_MENOR = ({ edad }) => edad < MAYORIA_DE_EDAD

function entrada(persona) {
    if (ES_MENOR (persona)) {
        console.log('no entras pibe')
    } else { console.log('dale')}
}