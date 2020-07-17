function imprimirEdad(nombre, edad) {   //los parametro nombre y edad harán referencia a los datos que se suministran al invocar la función
    console.log(`${nombre} tiene ${edad} años`) //Aquí nombre y edad tomarán los valores de los datos suministrados al invocar la función, ya establecidos con los parámetros
}

imprimirEdad('Pedro', 23)
imprimirEdad('Graciel', 24)
imprimirEdad('Luna', 22)
imprimirEdad('Gustavo', 20)
imprimirEdad('Logan', 3)



var nombre = 'Pedro' //Esta variable tiene un alcance global, por lo que puede ser invocada usando window.nombre (alcance maximo en el navegador, objeto global)
                    //Si estuvieramos en un servidor tendria el alcance global de node
c// suministro el dato como parámetro de la función, quiere decir que 'nombre' pasará a ser n