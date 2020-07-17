var nombre = 'Pedro', apellido = 'Silva', edad = 23;

var nombreMayusc = nombre.toUpperCase()//función para convertir a mayusculas

var apellidoMinusc = apellido.toLocaleLowerCase()//función para convertir a minúsculas

var primeraLetra = nombre.charAt(0) //funcion para saber cual es el primer caracters

var cantidadLetras = nombre.length //Atributo para conocer la cantidad de letras. Ojo, no es una funcion, no lleva ()

var nombreCompleto = `${nombre} ${apellido}` //Interpolar una variable, forma mas nueva de concatenar

var str = nombre.substr(1, 2) //Acceder a un sub string, se pasa por parametro la posicion del caracter que queremos
                                // ej: desde el que esta en la posicon 1 hasta el que esta en la posicon 2.

var ultimaLetra = nombre.charAt(nombre.length - 1)


function imprimirEdad() {
    console.log(`${nombre} ${apellido} tiene ${edad} años`)
}



var precioVino = 200.3

var total = precioVino * 100 * 3 / 100 //Multiplicamos y luego dividimos por 100 para que el resultador sea un vaor decimal mas cerrado

//Math. es el modulo de matematicas en Js, la funcion .round sirve para redondear un valor
var total = Math.round(precioVino * 100 * 3) / 100

//la funcion toFixed considera pasa como parametro el numero de decimales que queremos considerar despues de la coma, pero convierte el valor a un string
var totalStr = total.toFixed(2)

var total2 = parseFloat(totalStr)