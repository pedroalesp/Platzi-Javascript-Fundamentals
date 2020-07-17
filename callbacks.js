const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

//En jq se usa el metodo $.get para hacer el request. Como parametro se pasa la url completa, por eso concatenamos las dos kconstantes de arriba
//¡pero espera! debemos reemplazar el :id por 1, en este caso. Para eso usamos el método de todos los strings para reemplazar
//.replace('string que será reemplazado', string (o lo que sea) que tomará el nuevo lugar)
//Eso es solo el primer parámetro, como segundo parámetro debemos indicarle a jq que queremos el archivo en otra página o lugar

//$.get(`${API_URL}${PEOPLE_URL.replace(':id', 1)}`, { crossDomain: true})
//La petición de arriba pudo ser estilizada de esta forma:
const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const OPTS = { crossDomain: true}

$.get(LUKE_URL, OPTS, function (luke) {//La función solo se va a ejecutar si el request es exitoso y la va a ejecutar el $.get
   // console.log(arguments) //arguments es una var que tienen todas las funciones que nos dará un array con los parámetros que recibe esa función
    console.log(`Hola yo soy ${luke.name}`)
})

//Se podría también guardar la función en una var y quedaría así:

const onPeopleResponse = function (persona) {
     console.log(`Hola, yo soy ${persona.name}`)
 }

$.get(LUKE_URL, OPTS, onPeopleResponse)

/////////////////////////////////////////////////////////////////////////////

//HACER MÚLTIPLES REQUEST (ojo, no tiene que ver con lo de arriba, clases diferentes)
//1. creamos una función para obtener personajes a partir de un ID como parámetro
//2. creamos una variable que será la misma url pero reemplazando el id por el id que vamos a solicitar
//3. cambiamos la url específica de luke por la url general
//4. cuando termine ejecutamos el call back onPeopleResponse

function obtenerPersonaje (id) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(URL, OPTS, onPeopleResponse)
}

obtenerPersonaje(4) //con 4 siendo el id, mostrará a darth vader :D. Todos los id que le pasamos los pasará a buscar a la api
obtenerPersonaje(3)
obtenerPersonaje(2)
obtenerPersonaje(1)