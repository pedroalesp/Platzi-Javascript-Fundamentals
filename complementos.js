const hoy = new Date()
const nacimiento = new Date(1997, 2, 28)

function dias (fecha1, fecha2) {
    const day = 1000 * 60 * 60 * 24
    const dif = Math.abs(fecha1, fecha2) 
     return Math.floor(div/day)
}

dias(hoy, nacimiento)
//------------------------------------------------------------

//Funciones recursivas

/*
13  |_4____

13 - 4 = 9    1 //esta es la parte de recursividad, que se seguirá llamando dentro de la misma función 
9  - 4 = 5    1
5  - 4 = 1    1
1  - 4 = -3   0
*/

function divisionEntera (dividendo, divisor) {
    if (dividendo < divisor) {
        return 0 //Parte base, cuando ya no puede seguir avanzando 
    } else {
        return 1 + divisionEntera(dividendo - divisor, divisor)
    }
}

//-------------------------------------------------------------
//CLOUSURES

function crearSaludo(finalDeFrase) { //Será una función generadora de otras funciones 
    return function (nombre) { //Esta función anonima retornada por crearSaludo será cada una de estas *
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }
}

const saludoArgentino = crearSaludo('che') //* Cada una de estas funciones está recordando cual era la variable que se envió cuando se invocó a la función crear saludo
const saludoMexicano = crearSaludo('wey') //*
const saludoVenezolano = crearSaludo('pana') //*

saludoArgentino('Pedro')
saludoMexicano('Pedro')
saludoVenezolano('Pedro')

//---------------------------------------------------------------
//CONTEXTO DE LAS FUNCIONES 

const pedro = {
    nombre: 'Pedro',
    apellido: 'Silva'
}

function saludar() {
    console.log(`Hola mi nombre es ${this.nombre}`)
}