const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const OPTS = { crossDomain: true}

//1. la funcion obtenerPerosnaje va a tener dos parámetros esta vez, el id del personaje que queremos y una fuunción llamada callback
//2. al invocar obtenerperosnaje pasamos el id y una función anónima haciendo referencia a callback (realmente puede tener cualquier nombre, callback es por gusto, puede ser fn, y asi)
//3. esa función anónima va a invocar nuevamente obtenerPersonaje y asi irá sucesivamente.
//4. en el cuerpo de la función obtenerPersonaje debemos usar una condicional que llame al callback, si es que hay callback

function obtenerPersonaje (id, callback) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(URL, OPTS, function (persona) {
        console.log(`Hola, yo soy ${persona.name}`)
        if (callback) {
            callback()
        }
    })
}

//Esto es conocido como el CALLBACK HELL
obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3, function () {
            obtenerPersonaje(4, function () {
                obtenerPersonaje(5, function () {
                    obtenerPersonaje(6)
                })
            })
        })
    }) 
})

////////////////////////////////////////////////////////////////
//Podemos abordar esta situación de otra manera
//En vez de invocar la función que llama al callback en el .get, podemos llamar directamente al callback como parámetro.
//Así la primera vez que se invoca la función obtenerPersonaje, pasará como segundo parámetro la función anónima que es el propio callback
//y esta función ademas recibirá como parámetro personaje (recordemos que en la documentación de jq dice que tiene mas parámetros pero solo nos interesa ese)
//hacemos que el callback ademas de logear el nombre del personaje, llame al personaje 2, y el personaje 2 luego llame al 3, y asi

function obtenerPersonaje (id, callback) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
    .get(URL, OPTS, callback)
    .fail( () => { console.log(`No se pudo obtener el personaje ${id} :(`)} ) 
}

obtenerPersonaje(1, function (personaje) {
        console.log(`Hola, yo soy ${personaje.name}`)
   
    obtenerPersonaje(2, function (personaje) {
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(3, function (personaje) {
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonaje(4, function (personaje) {
                console.log(`Hola, yo soy ${personaje.name}`)

                obtenerPersonaje(5, function (personaje) {
                    console.log(`Hola, yo soy ${personaje.name}`)

                    obtenerPersonaje(6, function (personaje) {
                        console.log(`Hola, yo soy ${personaje.name}`)
                    })
                })
            })
        })
    }) 
})