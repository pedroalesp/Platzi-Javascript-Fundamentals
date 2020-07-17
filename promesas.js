const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const OPTS = { crossDomain: true}

//Modificamos para que la función nos devuelva una promesa en vez de recibir un callback como parámetro
//Para contruir una promesa se le pasa una función que recibe dos parámetros, resolve y reject
//Esto a su vez son funciones que se van a ejecutar si la promesa se resuelve (then) o no (catch)

function obtenerPersonaje (id) {
    return new Promise( (resolve, reject) => {
        //Adentro de esta arrow function realizamos el llamado asíncrono
        const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        
        $
        .get(URL, OPTS, function (data) {
            //cuando esta respuesta llegue se va a ejecutar el callback, nos va a llegar una data y con eso vamos a resolver la promesa. la función resolve no se ejecutará hasta que el get sea exitoso
            resolve(data)
        })
        .fail( () => reject(id) )//la funcion .fail solo va a rechazar la promesa, pasándole el id del personaje que buscabamos obtener
                 //.then(function (personaje) {
                //console.log(`El personaje 1 es ${personaje.name}`)
            //})
            //.catch(onError)//Esto es una forma de escribir lo de arriba. es lo mismo
        })
}

//Los metodos then y catch se pueden escribir adentro de la promesa y quedaría mas legible, por efctos de la clase los dejaremos afuera

function onError (id) {
    console.log(`No se pudo obytener el personaje ${id}`)
}

//Para obtener el valor de la promesa usamos la función .then que va a tener una función que se va a ejecutar cuando la promesase realic exitosamente
//Si tenermoss un error podemos usar la función .catch que va a tener una función tambien, en vez de recibir personaje va a recibir el id
obtenerPersonaje(1)
    .then( personaje1 => {
    console.log(`El personaje 1 es ${personaje1.name}`)
        return obtenerPersonaje(2)
    })

    .then( personaje2 => {
        console.log(`El personaje 2 es ${personaje2.name}`)
        return obtenerPersonaje(3)
    })

    .then( personaje3 => {
        console.log(`El personaje 3 es ${personaje3.name}`)
        return obtenerPersonaje(4)
    })

    .then( personaje4 => {
        console.log(`El personaje 4 es ${personaje4.name}`)
        return obtenerPersonaje(5)
    })

    .then( personaje5 => {
        console.log(`El personaje 5 es ${personaje5.name}`)
        return obtenerPersonaje(6)
    })

    .then( personaje6 => {
        console.log(`El personaje 26 es ${personaje6.name}`)
    })


    //.catch(function (id) {
    //    onError(id)
   // })
   .catch(onError)//Esto es una forma de escribir lo de arriba. es lo mismo

//El id del catch llega de la función reject del .fail. mientras que el personaje del then llega de la data de la función resolve que a su vez
//obtiene la data de la función callback si el .get es exitoso

//////////////////////////////////////////////////////////////////////////////////////////
//PROMESAS EN PARALELO

//1. creamos un array con los id de los personajes
//2. usamos el metodo map para generar un nuevo array, este metodo recibe una función cuyo objetivo será devolvernos un nuevo array en el que los ids fueron reemplazados por promesas
//3. usamos el metodo Promise para generalizar todas las promesas. ademas de the y catch tendrá un metodo llamado .all que recibirá como parámetro un array de promesas

var ids = [1, 2, 3, 4, 5, 6]

//var promesas = ids.map(function (id) {
 //   return obtenerPersonaje(id)
//})

var promesas = ids.map( id => obtenerPersonaje(id) )

Promise
    .all(promesas)
    .then( personaje => console.log(personaje))
    .catch(onError)

////////////////////////////////////////////////////////
//ASYNC-AWAIT
//Este es un método mas lineal de de hacer promesas en paralelo
//1.creamos una función en donde va todo el codigo y la ejecutamos
//2. vamos a crear una variable en donde guardaremos el resultado de todas las promesas con el metodo Promise.all
//pero antes del metodo usamos la palabra reservada await para detener el codigo en ese punto, , para esperar a que todas las promesas estén resueltas.
//3. ademas usamos la palabra reservada async antes de la función para indicar que es asincrona
//4. ocupamos el metodo try catch con dichas palabras reservadas, en donde try llevará la parte asincrona (la var donde se guardará el resultado de las promesas)
//y el .then que se ejecutará cuando sea exitoso el resultado.
//5. en catch irá nuestro .catch de siempre, esta vez invocando a la función onError con id como parámetros 
//Recuerda que es solo una forma gigante de un if/else 

async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6]
    var promesas = ids.map( id => obtenerPersonaje(id) )
    try {
        var personajes = await Promise.all(promesas)
        .then( personaje => console.log(personaje))
    } catch (id){
        onError(id)
    }
}

obtenerPersonajes()

