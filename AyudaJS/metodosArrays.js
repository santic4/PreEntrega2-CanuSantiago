//Métodos que nos permiten manipular arrays (su contenido)


const nombresEstudiantes = ["Alejandra", "Nehuen", "Franco"]

//AGREGANDO CONTENIDO:

// Push() 
// Recibe un valor por parámetro y lo coloca al FINAL del contenido del array
nombresEstudiantes.push("Martin") //nombresEstudiantes = ["Alejandra", "Nehuen", "Franco", "Martin"]

// Unshift()
// coloca el valor recibido en la posicion 0 del array (al comienzo)
nombresEstudiantes.unshift("Valentin") //nombresEstudiantes = ["Valentin", "Alejandra", "Nehuen", "Franco", "Martin"]


//QUITAR CONTENIDO

// Pop()
// Elimina el último elemento del array
    nombresEstudiantes.pop() //nombresEstudiantes = ["Valentin", "Alejandra", "Nehuen", "Franco"]

// shift()
// Elimina el elemento de la posición  0 del array
    nombresEstudiantes.unshift()//nombresEstudiantes = ["Alejandra", "Nehuen", "Franco"]

// splice()
// Eliminar uno o más elementos a partir de determinada posicion
// Recibe dos parámetros: 
//              1: Indice donde se posicionara
//              2: Cuántos elementos cortará a partir de donde está posicionado


//nombresEstudiantes = ["Valentin", "Alejandra", "Nehuen", "Franco", "Martin"]

nombresEstudiantes.splice(2, 2) //nombreEstudiantes = ["Valentin", "Alejandra", "Martin"]

//MANIPULANDO CONTENIDO

// join()
    //Genera una cadena de texto con los valores uqe contenga el array separándolos con el caracter enviado como parámetro

    console.log(nombresEstudiantes.join(" - "))

// concat()
    //Unificar dos arrays en uno nuevo

    const cuerpoDocente = ["Nico", "Lauta", "Exe"]

    const todos54925 = nombresEstudiantes.concat(cuerpoDocente)

// reverse() 
    //Altera el orden del array 
    cuerpoDocente.reverse()

// Slice()
    //Generar un nuevo array a partir de recortar el array donde se lo haya invocado

    const arrayNuevo = todos54925.slice(2, 2);


// BUSCAR ELEMENTOS

//indexOf ()
    //Nos va a retornar la posicion (indice) dentro del array de un determinado valor
    todos54925.indexOf("Nico") // retorna 2

//includes()
    //Nos retorna true o false según el array contenga o no el valor enviado como parametro
    todos54925.includes("Juan José") // false
    todos54925.includes("Martin") //true