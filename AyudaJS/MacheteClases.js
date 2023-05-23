 CLASE 3: Ciclos e interaciones
/* 
*****
Tipos de Ciclos en JS
*****

- Por conteo:
    Se ejecutará un bloque de código una cantidad determinada de veces
    Ciclo: FOR

- Por condición:
    Ejecuta un bloque de código hasta que se cumpla una condición (que resulte true)    
    Ciclo: While - Do...While

//////////////////////////Ciclo For//////////////////////////

 - Sintaxis: 
        palabraReservada (desde; hasta; actualizador) {
            códigoAEjecutar
        }

        desde:        Declara la variable de control y le asigna su valor inicial [ let i = 0 ]
        hasta:        Determina la cantidad de iteraciones (repeticiones) que se realizaran del bloque de código 
                      Se ejecutará mientras i sea menor a 4 [ i < 4 ]  
        actualizador: Modifica la variable de control tras cada iteración [ i++ ]

        for (let i = 0; i < 4; i++){
            alert(`Esta es la iteración nro ${i}`)
        }

        -+-+ Código ejemplo Reserva Restaurante con 4 mesas: +-+-

        for (let i = 0; i < 4; i++){
            let nombreReserva = prompt("A nombre de quién será la reserva?")
            alert(``La mesa nro ${i} fue reservada para ${nombreReserva}`) 
            //Para que los nros de la mesa vayan del 1-4 en lugar de 0-3 se puede plantear ${i+1}
        }        

        **BREAK (palabra reservada)**
        Cuando el navegador se topa con esta palabra reservada interrumpe la ejecución del ciclo 
        dandolo por terminado, independientemente del valor de su variable de control
        
        let sillasTotales = 20
        let sillasReservadas = 0
        let mesas = 4

        for (let i = 0; i < mesas; i++){
            let nombreReserva = prompt("A nombre de quién será la reserva?")
            let cantidadReservada = parseInt(prompt("Cuántas personas vendrán?"))
            sillasReservadas +=  cantidadReservada
            alert(`Para confirmar la reserva de ${nombreReserva} x ${cantidadReservada} comensales. Debe enviar el pago al 1111111`)
            
            //Si la cantidad de reservadas es mayor o igual a las totales, se terminan las reservas
            //sin importar la cantidad de mesas que se hayan reservado aún 
            if (sillasReservadas >= sillasTotales){
                break;
            }
        }

        El problema de este ejemplo es que permite sobrepasar la cantidad de sillasTotales 
        en la última iteración. Es a modo de ejemplo para el introducir el concepto de break.

        ****CONTINUE****

        Cuando se topa con esta palabra reservada termina la iteración omitiendo el código restante.
        Pasa al actualizador y, si corresponde, comienza un nueva iteración 
        Tras terminar la iteración, continúa con el ciclo como si hubiera finalizado toda la iteración.

        let sillasTotales = 20
        let sillasReservadas = 0
        let mesas = 4

        for (let i = 0; i < mesas; i++){
            let nombreReserva = prompt("A nombre de quién será la reserva?").toLowerCase()
            let cantidadReservada = parseInt(prompt("Cuántas personas vendrán?"))
            sillasReservadas +=  cantidadReservada

            //Evalúa si la reserva será para tito. 
            //Tito come gratis, si la reserva es para él, le lanzamos un mensaje de OK y terminamos la iteración
            //Si no pasamos esta validación continuará al mensaje donde pide confirmación con $$
            if (nombreReserva == "tito"){
                alert(${nombreReserva}, ya tenes tu mesa para ${cantidadReservada}. Pasarla bien.)
                continue;
            }
            alert(`Para confirmar la reserva de ${nombreReserva} x ${cantidadReservada} comensales. Debe enviar el pago al 1111111`)
        }

//////////////////////////Ciclo While//////////////////////////

- Sintaxis: 
        palabraReservada (condicion){
            código a ejecutar
        }

    Evalúa una condición, si resulta true ejecuta el código (itera) entre llaves y al finalizar
    vuelve a evaluar la condición para realizar una nueva iteración o bien salir del ciclo
    Es importante que dentro del código a ejecutar se modifique la variable que se evalúa en la condición para no generar loops infinitos

    +-+- Código ejemplo reserva restaurante con derecho de admisión (no se dejan entrar Hugos) -+-+
    
    let nombre = prompt("A nombre de quién será la reserva?").toLowerCase()
    while (nombre != "hugo"){
        alert("Bienvenido al sistema de reservas para Restaurante Selectivo")
        let cantidadReservada = parseInt(prompt("Cuántas personas vendrán?"))
        alert(`La reserva a nombre de ${nombre} fue realizada correctamente`)
        nombre = prompt("A nombre de quién será la reserva?").toLowerCase()
    }   
    alert(`No se admiten HUGOS. No insista.`)

//////////////////////////Ciclo DO..While//////////////////////////
    Es muy similar al ciclo While, con la salvedad que nos asegura que el código se iterará al menos una vez.
    En el ejemplo anterior, si el primer ingreso era Hugo, no se ejecutaría el código

    - Sintaxis:
            palabraReservada{
                códigoAEjecutar
            }palabraReservada (condición) 

    let nombre = "" 
    do{
        nombre = prompt("A nombre de quién será la reserva?").toLowerCase()
        if (nombre != "hugo"){
            alert("Bienvenido al sistema de reservas para Restaurante Selectivo")
            let cantidadReservada = parseInt(prompt("Cuántas personas vendrán?"))
            alert(`La reserva a nombre de ${nombre} fue realizada correctamente`)
        }
    }while(nombre != "hugo")
    alert("No se admiten Hugos, no insista.")


//Switch

// Sintaxis:

 /* 
 
        palabraReservada (variableAEvaluar){
            palabraReservada variante:
                código a ejecutar si es esta variante
                palabraReservada;
            palabraReservada variante:
                código a ejecutar si es esta variante
                palabraReservada;
            palabraReservada variante:
                código a ejecutar si es esta variante
                palabraReservada;    
        }
        
 */ 

/*         let opcion = parseInt(prompt("Seleccione la opción deseada: 1. Comer 2. Dormir 3. Codear."))

        switch (opcion){
            case 1:
                alert("A alimentarse y seguir codeando")
                break;
            case 2:
                alert("Hay que dormir bien para codear mejor")
                break;
            case 3:
                alert("No te olvides de comer y dormir para codear aún mejor")
                break;
            default: 
                alert("Ingresá una opción válida")
        } */
/* 
      let opcion = parseInt(prompt("Seleccione la opción deseada:  1. Comer 2. Dormir 3. Codear 99. Salir"))
    while(opción != 99){
        switch (opcion){
            case 1:
                alert("A alimentarse y seguir codeando!")
                break 
            case 2: 
                alert("Hay que dormir bien para seguir codeando!")
                break;
            case 3: 
                alert("No olvides comer y dormir para seguir codeando bien !")
                break;
            default:
                alert("Ingresá una opción válida ! ")
        }
        opcion = parseInt(prompt("Seleccione la opción deseada:  1. Comer 2. Dormir 3. Codear 99. Salir"))
    }
    No es necesario que esté dentro de un while el switch, es solo a fines de mostrar como pueden acoplarse


 */
/*   let materia = prompt("Ingrese materia por la que queire consultar").toLowerCase()

  switch(materia){
    case 'matematica':
            alert("el programa de matematica es este:")
            break;
    case 'lengua':
            alert("el programa de lengua y literatura es este:")
            break;
    default:
            alert("Ingresé una materia de la curricula por la que desee cosutlar.")
  }
   */

  
/*
 ===== Propiedad Lenght =======

 Nos devuelve la cantidad de caracteres que componen la cadena de caracteres que almacenamos.
 Sólo sirve para strings, en boolean/number devuelve undefined

 let nombre = "Martín Martinez"
 console.log(nombre.length) //15 tiene en cuenta el espacio

 
===== Método toString() =======
 La contracara del método parseInt
 Convierte el dato numérico en cadena de caracteres

 let numero = 456789
 numero = numero.toString()
 console.log(numero.length)


===== Método typeof() =======
 Devuelve el tipo de dato que está almacenado en la variable

 - Sintaxis
     palabraReservada(contenidoAEvaluar)

     estaComision = "JavaScript - 54925"
     typeof(estaComision) //string


===== Método isNaN() =======
 Evalúa si el valor de dato es Not a Number
 Más allá del tipo de dato: 
     "123" es un valor numérico más allá de estar en un string ->  false
     "asd" son caracteres alfanuméricos, Not a Number -> Devuelve true
 
 - Sintaxis
     palabraReservada(contenidoAEvaluar)

     isNaN(123) //false
         
 let estaComision = 54925
 console.log(isNaN(estaComision)) //false
 
 estaComision = "JavaScript - 54925"
 console.log(isNaN(estaComision)) //true

 */

/*     for (let i = 0; i < 4; i++){
        let nombreReserva = prompt("A nombre de quién será la reserva?") 
        let cantidadReservada = parseInt(prompt("Cuantos comensales serán?")) //"pepe" --> NaN

        while (isNaN(cantidadReservada)){
            alert("Ingresaste un valor no numerico, reintentalo")
            cantidadReservada = parseInt(prompt("Cuantos comensales serán?"))
        }
        alert(`La mesa ${i+1} para ${cantidadReservada} de ${nombreReserva} ya está confirmada`)
    }
 */








    CLASE 4: FUNCIONES 
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~SINTAXIS

    palabraReservada nombreFuncion () {
        códigoAEjecutar
    }

    function validarCurso(){
        let cursoUSer = parseInt(prompt("Cuál es tu camada"))
        if (cursoUser == 54925){
            alert("pertenece a esta comision")
        }else{
            alert("no pertenece a esta comision")
        }
    }


    Este bloque de código sólo se ejecutará cuando se llame (mencione) validarCurso()
    Para llamar a la function basta con plantear validarCurso()
    Puede ser útil en varios casos en los que haya que validar a qué curso pertenece el usuario


~~~~~~~~~~~~~~~~~~~~~~~~~~~FUNCIONES EN FLUJO DE TRABAJO

    function validarCurso(){
        let cursoUSer = parseInt(prompt("Cuál es tu camada"))
        if (cursoUser == 54925){
            alert("pertenece a esta comision")
        }else{
            alert("no pertenece a esta comision")
        }
    }

    alert("Bienvenido a la plataforma de Coder")
    let nombreUser = prompt("Ingrese su nombre")
    validarCurso() //Busca la declaración de esta function, ejecuta el código y luego regresa a esta linea
    alert(`Gracias ${nombreUser} por tu consulta`)


~~~~~~~~~~~~~~~~~~~~~~~~~~~PARAMETROS

    Los parámetros son los valores con los cuales vamos a ejecutar una function
    Utilizar parámetros en nuestras funciones nos permite aportarle dinamismo (puede aplicarse a diversos contextos) y complejidad a la function

    function suma(){
        alert(1+2)
    }

    function sumaParametros(num1, num2){
        alert(num1+num2)
    }

    sumaParametros(10,20)

    Los parámetros se envían entre paréntesis. Pueden ser valores estáticos o dinámicos
    Si son más de 1, deben enviarse separados por coma.
    Su asignación es posicional (el primer valor, al primer parámetro)
    El valor que enviemos se asignará al parámetro como una variable. 
    Sólo existirá mientras estemos ejecutando la function, una vez fuera de ella se libera

    si tuvieramos:

    function saludito(nombre, edad){
        alert(`Hola ${nombre}, tenes ${edad} años! `)
    }

    saludito("Nico", 31)
    saludito(31, "Nico")

    Los parámetros pueden contar con valores predeterminados para trabajar cuando no reciban un parámetro

    function saludito(nombre, edad=8){
        alert(`Hola ${nombre}, tenes ${edad} años! `)
    }

_____________________________Siguiendo el ejemplo: 

    function validarCurso(comision){
        let cursoUSer = parseInt(prompt("Cuál es tu camada"))
        if (cursoUser == comision){
            alert("pertenece a esta comision")
        }else{
            alert("no pertenece a esta comision")
        }
    }

    validarCurso(54925)
    validarCurso(13245)

~~~~~~~~~~~~~~~~~~~~~~~~~~~RETURN

Las funciones pueden utilizarse para ejecutar un bloque de código y finalizar un proceso 
(Como el ejemplo del validador que se viene planteando, donde se analiza el curso, se responde y se termina el código)
Su uso también puede estar orientado a realizar un determinado proceso y devolver el resultado del mismo para seguir trabajando
En esos casos, utilizamos la palabra reservada return para indicar el contenido a 'devolver' 
Esa devolución debe ser recibida y almacenada en una function para que no se pierda
Una vez que el navegador se topa con la palabra reservada 'return' finaliza la ejecución de la function

function calculaIVA(valor){
    return valor*1.21
}

let montoCompra = 100;
let montoFactura = calculaIVA(montoCompra)
alert(`El monto de su compra es de ${montoCompra} si desea factura será de ${montoFactura}`)


En el ejemplo del validador, se podría devolver un true/false si el usuario pertenece a la comisión

    function validarCursoReturn(comision){
        let cursoUSer = parseInt(prompt("Cuál es tu camada"));
        if (cursoUser == comision){
            return true;
        }else{
            return false;
        };
    };

    alert("bienvenido a Coder")
    let validado = validarCursoReturn(54925)

    if(validado){
        alert("Estas son las actividades que tenemos para su curso:")
    }else{
        alert("No pudimos verificar su validacion, si quiere inscribirse...")
    }


~~~~~~~~~~~~~~~~~~~~~~~~~~~SCOPE

Entendemos por Scope al ambito/alcance de una variable.
Según dónde sea definida, pertenecerá a un contexto u otro delimitando así su uso y alcance

en JS el scope puede ser Global y Local

Scope Global:
    Refiere a aquellas variables a las que se puede acceder desde cualquier punto del código
    Su declaración no está sujeta a ninguna estructura (ej. No está dentro de una condicion) 

Scope Local:
    Aquellas variables declaradas dentro de una function o bloque de código sólo exisitrán dentro de él
    Fuera de la ejecución de esa function, se libera el espacio de memoria reservado bajo ese nombre y no se puede acceder
    Cada vez que se ejecuta la function, se declara nuevamente
    Los nombres de las variables locales se pueden repetir de una function a otra

En el caso de validarCursoReturn() la variable cursoUser tiene un scope local, ya que su declaración está dentro de la function.
En cambio, la variable 'validado' es de scope global y se puede acceder a ella desde cualquier lado


~~~~~~~~~~~~~~~~~~~~~~~~~~~FUNCIONES ANONIMAS

    Son funciones que no tienen un nombre que las identifique.
    Se asignan a una variable, a la cual hay que llamar para ejecutar su contenido

    palabraReservada nombreVariable operadorAsignacion palabraReservada (parametros){
        código a ejecutar
    }

    const miFuncion = function (){
        alert("Esta es mi funcion")
    }

    Para hacer uso de la function anonima hay que mencionar a la variable donde fue guardada
    miFuncion()

    Su uso cobra valor cuando tenemos que pasar una function como parámetro (Ej. utilizando el método map, lo veremos luego)
    
~~~~~~~~~~~~~~~~~~~~~~~~~~~FUNCIONES FLECHA

    Se introducen con ES6, plantean una sintaxis simplificada para la escritura de funciones
    El código a ejecutar se almacena en una variable. Es recomendable que esta variable sea de tipo const para 'pisar' su contenido

    palabraReservada nombreFunction operadorAsignacion (parametros) flecha {
        código a ejecutar
    }

    const calcularIVA = (precio) => {
        return precio * 1.21
    }

    Sintaxis simplificada:
    Cuando se trabaja con un sólo parámetro se pueden prescindir de los paréntesis a su alrededor
    También, si se trabaja con una sola linea de código se puede prescindir del return y las llaves contendoras

    const calcularIVA = precio => precio * 1.21
    
    
~~~~~~~~~~~~~~~~~~~~~~~~~~~HOISTING

    Previo a comenzar la lectura del script, el navegador recopila todas aquellas funciones declaradas con la primera sintaxis
    permitiendo el acceso a ellas sin importar si el llamado se realiza antes de la declaración de l misma
    Es decir, puedo tener la function validarCurso() declarada en la linea 127 y un llamado a validarCurso en la linea 8, gracias al hoisting
    
    Esto no funciona para funciones flecha ni anónimas

    */









    CLASE 5: OBJETOS
 /*   ~~~ METODOS

    Para incorporar métodos (funciones que están ligadas a objetos, sin ellos no se podrían ejecutar)
    Así se le da a cada objeto un comportamiento especifico asociado a él

    Por ejemplo, un método que muestre toda la información del objeto, podría ser:

    const estudiante = {
        nombre: "Martin",
        apellido: "Martinez",
        comision: 54925,
        presentarse: function(){
            alert(`Hola, yo soy ${this.nombre} ${this.apellido} y pertenezco a la comisión ${this.comision}`)
        }
    }

    El método presentarse es parte del objeto estudiante, con lo cual es necesario invocarlo/llamarlo antes de ejecutar el método
    estudiante.presentarse()

~~~ EJEMPLOS DE METODOS QUE YA CONOCEMOS

        .toLowerCase() --> Metodo
        .toFixed() --> Metodo
        .length --> Propiedad, no termina en ()

~~~ METODOS PERSONALIZADOS
    
        const perro = {
            nombre: "Bobby",
            raza: "Callejero"
            ladrar: function(){
                alert("Guau guau")
            }
            romper: function(queRompo){
                alert(`Olvidate de tu ${queRompo}`)
            }
            manguear: function(){
                alert("me das?")
            }
        }

        perro.ladrar()
        perro.romper("basura")
        perro.manguear()


~~~  THIS

    Palabra reservada que refiere al objeto que se está trabajando
    Por ejemplo, en presentarse() hacemos mencion a this.nombre ya que queremos la propiedad nombre del
    objeto desde el cual estamos llamando a presentarse()

    Sería lo mismo que decir 'yo soy ${estudiante.nombre}' pero eso nos sacaría dinamismo: porque si mi proximo objeto se llama nuevoEstudiante,
    tengo que modificar el código de mi método. En cambio, utilizando this, se hace referencia al contexto donde trabajamos
    El valor que queremos mostrar es el contenido de la propiedad 'nombre' perteneciente a este (this) objeto --> estudiante 


~~~ OBJETOS LITERALES

    Entendemos por objetos literales a aquellos objetos declarados manualmente, entre llaves, para encapsular en ellas las propiedades y métodos

    Se diferencian de los objetos construidos

~~~ OBJETOS CONSTRUIDOS
    Son aquellos objetos que son instanciados (creados) a partir del uso de una function constructora, que define propiedades y métodos del tipo de objeto
    La function constructora es el molde a partir del cual se van a instanciar los distintos objetos de ese tipo.
    Cuando trabajamos con objetos que vayan a tener las mismas características pero cada cual con sus particularidades, podemos estandarizar su creación con los constructores
    Los objetos instanciados a partir de constructores heredan sus propeidades y métodos

        palabraReservada nombreFuncion (parametros){
            palabraReservada.propiedad = valor,
            palabraReservada.propiedad = valor,
            palabraReservada.propiedad = funcion
        }

        function Estudiante(nombre, apellido, comision){
            this.nombre = nombre;
            this.apellido = apellido;
            this.comision = comision
            this.presentarse = function () {
                alert(`Hola, yo soy ${this.nombre} ${this.apellido} y pertenezco a la comisión ${this.comision}`)
            }
        }
        Todos los objetos instanciados a partir de Estudiante heredarán las propiedades nombre, apellido y comisión
        También heredan el metodo presentarse()

    Cómo instancio objetos a partir de una function moldeadora? utilizando la palabra reservada NEW

    palabraReservada nombreObjeto operadorAsignación palabraReservada functionMoldeadora (parametros)

    const estudiante1 = new Estudiante ("Martin", "Martinez", 54925)
    
    Se enviarán esos valores como parámetros a la function Estudiante, la cual asignará los valores enviados como parámetros a un nuevo objeto que almacenará en estudiante1


~~~ CLASES 
    Aportan una sintaxis más clara y simple para utilizar como instanciador de objetos.
    Su incorporación deja de lado el uso de la función constructora, prefiriendo siempre el uso de class constructor

    //SINTAXIS
        
        palabaReservada NombreClase{
            palabraReservada(parametros){
                palabraReservada.propiedad = valor,
                palabraReservada.propiedad = valor
            }
        }

        class Perros{
            constructor(nombrePerro, razaPerro){
                this.nombre = nombrePerro,
                this.raza = razaPerro
            }
        }

        const bobby = new Perro("Bobby", "Callejero")
        const micki = new Perro("Micki", "Caniche")

        class Estudiante{
            constructor(nombre, comision){
                this.nombre = nombre,
                this.comision = comision,
                this.nota1 = 0,
                this.nota2 = 0,
                this.nota3 = 0,
                this.final = ""
            }
        }

        const estudiante1 = new Estudiante("Martín Martinez", 54925)

    //METODOS EN CLASES

        utilizando clases los métodos no se declaran como funciones anónimas dentro de las propiedades.
        Se declaran dentro de la clase pero fuera del constructor, prescindiendo de la palabraReservada function

        palabaReservada NombreClase{
            palabraReservada(parametros){
                palabraReservada.propiedad = valor,
                palabraReservada.propiedad = valor
            }
            nombreMetodo(parametros){
                codigo del método
            }
        }

        class Perros{
            constructor(nombrePerro, razaPerro, comidaPerro){
                this.nombre = nombrePerro,
                this.raza = razaPerro,
                this.comida = comidaPerro
            }
            ladrar(){
                alert("Guau guau")
            }
            romper(queRompo){
                alert(`Olvidate de tu ${queRompo}`)
            }
            gustosComida(nuevaComida){
                this.comida = nuevaComida,
                alert("")
            }
        }

        class Estudiante{
            constructor(nombre, comision){
                this.nombre = nombre,
                this.comision = comision,
                this.nota1 = 0,
                this.nota2 = 0,
                this.nota3 = 0,
                this.final = ""
            }
            calificarExamen(trimestre, nota){
                if(trimestre == 1){
                    this.nota1 = nota;
                    alert(`${this.nombre} obtuvo un ${this.nota1} en el primer examen`)
                }else if(trimestre == 2){
                    this.nota2 = nota;
                    alert(`${this.nombre} obtuvo un ${this.nota2} en el segundo examen`)
                }else if(trimestre == 3){
                    this.nota3 = nota;
                    alert(`${this.nombre} obtuvo un ${this.nota3} en el tercer examen`)
                }else{
                    alert("Ingrese un trimestre válido y reintente")
                }
            }
            evaluacionFinal(){
                let promedio = (this.nota1 + this.nota2 + this.nota3 ) / 3
                if (promedio >= 7){
                    this.final = "Aprobado"
                }else if(promedio >= 4){
                    this.final = "Rinde final"
                }else{
                    this.final = "Recursará"
                }
                alert(`El resultado de ${this.nombre} en la comision ${this.comision} fue ${this.final}`)
            }
        }

        const estudiante1 = new Estudiante("Martín Martinez", 54925)
        estudiante1.calificarExamen(1, 8)
        estudiante1.calificarExamen(2, 7)
        estudiante1.calificarExamen(3, 9)
        estudiante1.evaluacionFinal()


~~~ IN / FOR IN
    
El operador IN devuelve true o false según si el valor que enviamos existe como propiedad del objeto

console.log(propiedad in objeto)

console.log(comision in estudiante1) --> true
console.log(curso in estudiante1) --> false

el ciclo for..in recorre las propiedades del objeto y por cada una de ellas realiza una determinada acción

for (alias in estudiante1){
    console.log(estudiante1[alias])
    //Para acceder a las propiedades dinamicamente utilizamos la notacion de [] en lugar del punto
    //Ya que el . interpreta que litearlmente le estamos pidiendo esa propiedad estáticamente 
    //si planteamos estudiante1.alias va a buscas la propiedad 'alias' en lugar del contenido variable de alias
    //'alias' es un nombre definido manualmente, puede ser cualquier nombre mientras se respete su uso en el código
}*/









 CLASE 6: ARRAYS  

  //Sintaxis Arrays:

    //palabraReservada nombreArray operadorAsignacion [contenidoArray]

    //const estudiantes = [];
    //Se puede declarar un array vacío, o bien asignarle elementos separándolos con comas
    
    //const escritorio = ["Vaso", "Anotador", {tipo: "taza", estado: "vacía"},  "Estuche lentes"];
    //  Indice de elemento    0         1                    2                      3
                  
    // const arrayNotas = [8, 9, 2];
//Acceso a la información

    //Usamos los índices para ubicar los distintos elementos de nuestro array

    //console.log(escritorio[0]) //vaso
   // console.log(escritorio) // Todo el array

     /* 
    if (escritorio[2].estado == "vacía"){
        alert("Tenes que recargar tu taza")
    }

      */
    // Una vez individualizado el elemento podemos tratarlo como tal:
    //let promedio = (arrayNotas[0] + arrayNotas[1] + arrayNotas[2]) / 3
    //console.log(promedio)

// Recorrer Arrays


    //       Utilizando ciclos podemos recorrer el array realizando distintas acciones con sus elementos
    //      Por ejemplo, nos serviría para ahorrarnos escribir arrayNotas[] tres veces en el código anterior
    
    let promedio = 0
  
    for (let i = 0; i < arrayNotas.length; i++){
        promedio += arrayNotas[i];
    }
//    Se establece el límite del ciclo de acuerdo a la cantidad de elementos que posea el array para aportarle dinamismo


// AGREGAMOS ELEMENTOS AL ARRAY
//Durante la ejecución de nuestro código podemos sumar elementos a nuestro array utilizando métodos propios de los arrays

    //** PUSH ** 
    //Envía un elemento recibido como parámetro al final del array
    //escritorio.push("Mouse")



    //** UNSHIFT ** 
    //Sumamos el elemento enviado como parámetro al inicio del array posicion [0]
   // escritorio.unshift("otra cosa")


// QUITAR ELEMENTOS DEL ARRAY
    //Así como podemos sumar elementos durante la ejecución, podemos eliminarlos.

    // **POP**
    //Método que elimina el último item del array mencionado

    //escritorio.pop()


    // **SHIFT**
    // Método para eliminar el item de la posicion [0]

    //escritorio.shift()


// MANIPULANDO ELEMENTOS

    // **SPLICE**
    /*   Se utiliza este método cuando se quiere eliminar uno o más elementos a partir de determinada posición
    Su llamado lleva dos parámetros:
         - Indice donde se posicionará
         - Cantidad de elementos a eliminar a partir de ese índice */

    //const escritorio = ["Vaso", "Anotador", {tipo: "taza", estado: "vacía"},  "Estuche lentes"];

  //  escritorio.splice(1, 2)
  //  console.log(escritorio)
    
    // **JOIN**
    /* Devuelve string concatenando todos los elementos del array. No modifica el mismo.
            Se le puede enviar como parámetro un valor para colocar entre elementos
     */
        let arrayUnido = escritorio.join("-")  // Vaso-Anotador-{Object Object}-Estuche Lentes

    //**CONCAT**
        //Si queremos unificar dos arrays utilizamos el método concat
        //El método se invoca sobre un array, enviando como parámetro el array a concatenar
        //Debemos asignar el resultado del método en un nuevo array ya que no se puede reasignar el contenido de un array
        const arrayNumeros = [1, 2, 3, 4]

         const arrayConcatenado = escritorio.concat(arrayNumeros)
         console.log(arrayConcatenado)

    // **Reverse**
        //Invierte el orden de los elementos del array sobre el que se invoque, modificando el array original
        arrayNumeros.reverse()

    // **SLICE**
        //  Genera un nuevo array a partir de un array preexistente. 
        //  Lleva un parámetro que le indicará el índice a partir del cual copiar los elementos.
        //  Opcionalmente puede llevar un segundo parámetro para delimitar el final del corte. 
        //  Este parámetro es excluyente, es decir se toma hasta un indice anterior a él

        //const arraySlice = escritorio.slice(1);
        //console.log(arraySlice)

        //Si pasamos dos parámetros a este método
        const arraySlice = escritorio.slice(0, 2);
        console.log(arraySlice)

//BUSQUEDA DE ELEMENTOS

    //**indexOf()**

    let indiceAnotador = escritorio.indexOf("Anotador")
    let escritorioDesdeAnotador = escritorio.slice(indiceAnotador)
    //Devuelve el índice del elemento enviado como parámetro. Si no lo encuentra devuelve -1

    // **includes()**
    //Nos devolverá un true o false según si el array sobre el cuál se aplique contenga el valor enviado como parámetro o no
    
    console.log(escritorio.includes("Vaso")) //true
    console.log(escritorioDesdeAnotador.includes("Vaso")) // false

// ARRAYS DE OBJETOS

        class Estudiante{
            constructor(nombre, comision){
                this.nombre = nombre,
                this.comision = comision,
                this.nota1 = 0,
                this.nota2 = 0,
                this.nota3 = 0,
                this.final = ""
            }
        }

        const estudiante1 = new Estudiante("Martin Martinez", 54925);
        const estudiante2 = new Estudiante("Jorge Jorginez", 54925);
        const estudiante3 = new Estudiante("Josefina Josefinez", 54925);
        const estudiante4 = new Estudiante("Victoria Victoriez", 54925);

        const estudiantes54925 = [estudiante1, estudiante2, estudiante3, estudiante4]


        //Accedo a la propiedad nombre del elemento (objeto) almacenado en la posicion 1 del array estudiantes54925
        console.log(estudiantes54925[1].nombre); //Jorge Jorginez

    //Trabajando con objetos dinámicos:

/*         let nombreUser = prompt("Digame el nombre del estudiante");
        let comisionUser = parseInt(prompt("A que comision pertenece?"));

        if (comisionUser == 54925){
            
            estudiantes54925.push(new Estudiante(nombreUser, comisionUser))
        } */

        console.log(estudiantes54925)
        const todosEstudiantes = [];

        //let cantidadEstudiantes = parseInt(prompt("Cuantos estudiantes desea registrar?"))//100
/*      //Declaro un ciclo a partir de la cnatidad de estudiantes que el usuario desea registrar:
        // Dentro de este ciclo, consulto nombre y comisión, evalúo esta última: si coincide con 54925 lo instancio y pusheo a mi array
        // Si no coincide la comision, lo instancio y pusheo al array todosEstudiantes
        for (let i = 0; i < cantidadEstudiantes; i++){
            let nombreUser = prompt("Digame el nombre del estudiante");
            let comisionUser = parseInt(prompt("A que comision pertenece?"));

            if (comisionUser == 54925){
                estudiantes54925.push(new Estudiante(nombreUser, comisionUser))
            }else{
                todosEstudiantes.push(new Estudiante(nombreUser, comisionUser))
            }

        } */

        //for..of


        /* 
          Ciclo que nos permite recorrer los elementos (objetos) que contenga un array realizando un conjunto de insturcciones por cada elemento
        A cada iteración podemos acceder a cada objeto que se haya colocado en el alias con el cual recorramos el array como lo harímos con el mismo objeto

            palabraReservada (alias palabraReservada arrayARecorrer){
                codigo a ejecutar en cada iteracion
            }
        */

            for (elemento of estudiantes54925){
             //console.log(elemento.nombre)   //Nombre: martin martinez, comision: 54925, nota1: 0

                alert(`Vamos a califica a ${elemento.nombre}`)

                let nota1 = parseInt(prompt(" cual es la nota 1?"))
                elemento.nota1 = nota1;
                let nota2 = parseInt(prompt(" cual es la nota 2?"))
                elemento.nota2 = nota2;
                let nota3 = parseInt(prompt(" cual es la nota 3?"));
                elemento.nota3 = nota3;
            }


            






 CLASE 7: Funciones de orden superior I
/*
  //FUNCIONES DE ORDEN SUPERIOR

  Son aquellas funciones que manipulan otras funciones: ya sea retornando una nueva función o recibiéndola como parámetro
  Nos vamos a centrar sobre las funciones que reciben otra función como parámetro

  
~~~~~~Funciones que retornan una funcion
      (Para comprenderlas, las podemos pensar como moldeadores de funciones)
      Las funciones que retornan, suelen ser funciones anónimas
  
//Funcion para generar funciones de comparación
  function mayorQue(n){
      return (m) => m > n;
  }
      //Declaramos una function que recibirá un parámetro (n) y retornará una function flecha que recibe un parámetro (m) 
      //y devuelve el resultado de evaluar si ese segundo parámetro (m) es mayor al parámetro (n)

  let mayorQueDiez = mayorQue(10); //mayorQueDiez = (m) => m > 10
      //creamos un espaco de memoria donde asignamos una function que lleva como parámetro 10.
      //Tras la asignación, mayorQueDiez pasa a contener una funcion que recibirá un parámetro y retornara su comparacion > 10

  console.log(mayorQueDiez(12))
      //Al llamar a mayorQueDiez enviandole 12 como parámetro, se asigna este a m
      //(12) => 12 > 10 //false

//Otro Ejemplo: funciones para sumar
      function sumador(numero){
          return function (nuevoValor){
              return numero + nuevoValor 
          }
      }

      let sumarle2 = sumador(2)
      console.log(sumarle2(8)) //10

      function validador(estaComision){
          return (comisionUser) => estaComision == comisionUser;
      };

      const validar54925 = validador(54925)
      if (validar54925(parseInt(prompt("decime tu comision")))){
          alert("pertenece")
      }else{
          alert("No pertenece")
      }


~~~~~~Funciones que RECIBEN FUNCIONES POR PARAMETRO

  Ejemplo fábrica cerámica:
      Una fábrica que hace distintos objetos de cerámica tiene un proceso comun para la elaboración de todos sus productos, 
      pero varía en lo específico de cada uno.

      funcion crearProducto(detalleProducto){
          //Proceso para hacer que la cerámica sea moldeable
          detalleProducto();
          //Proceso de empaquetado
      }

      function detallesJarras(){
          //Proceso para crear Jarras
      }

      function detallesVasos(){
          //PRoceso para crear vasos
      }

      crearProducto(detallesVasos) //Ejecuta la function crearProductos y usa detallesVasos() cuando lo precisa
      Así como el proceso de creación de un producto utiliza las funciones para moldear el producto en cuestión
      las funciones que reciben funciones por parámetro las utilizan para realizar tareas específicas


  Las utilizamos, por ejemplo, cuando queremos ejecutar una function con cada elemento de un array.

  function cadaElemento(array, funcion){
      for (let elem of array){
          funcion(elem) 
          //A cada iteración se ejecuta la funcion recibida como segundo parámetro, enviandole 
          //como parámetro el elemento de la iteración.
      }
  }

  const VOCALES = ["A","E","I","O","U"]
  
  cadaElemento(VOCALES, console.log)

  cadaElemento(VOCALES, elem => console.log(elem.toLowerCase()))

  
  const VocalesMinusculas = [];

  function aMinusculas(vocal){
      VocalesMinusculas.push(vocal.toLowerCase())
  }

  cadaElemento(VOCALES, aMinusculas)

(BREAK)


~~~~~~Funciones de orden superior nativas JS

  Ejemplos con:

      const VOCALES = ["A","E","I","O","U"]

      const ESTUDIANTES = [
          {nombre:"Martín Marquesi", comision:54925, nota:10},
          {nombre:"Luis Luisillo", comision:54000, nota:3},
          {nombre:"Perico Pereyra", comision:54925, nota:8},
          {nombre:"Romina Peralta", comision:53000, nota:8}

      ]

  **forEach()**
      Recorre el array sobre el que se invoca y, por cada elemento encontrado, 
      ejecuta la función recibida como parámetro
      
      VOCALES.forEach((elem) => console.log(e
      se diferencia del ciclo for..of por ser específico para arrays, (con el for..of se puede iterar por ejemplo el DOM)
      No admite el uso de break o cointinue para controlar el flujo de su ejecución
      

  **find()**
      Método para buscar coincidencias. Se envia como parámetro el valor que se desea comparar
      Cuando encuentra una coincidencia finaliza la ejecución retornando el elemento encontrado,
      sin importar si luego había una segunda o tercera coincidencia . Solo busca la primera
      Este elemento retornado se puede guardar en una variable para utilizarlo luego.
      Cuando no hay coincidencia, retorna undefined.

      VOCALES.find(e => e == "U") //U
      VOCALES.find((e) => {return e == "X"}) //undefined

      ESTUDIANTES.find(e => e.comision == 54925)

      Utilizando este método, se asigna cada elemento del array -de a uno por vez- al alias 'e' y luego se ejecuta y retorna el código de la función
      En este caso, evalúa si la propiedad comisión del elemento almacenado en e es igual a 54925 y nos devuelve el primer objeto que coincida
      
  **filter()**
      Al igual que el método find() recibe como parámetro una función comparadora. 
      Se diferencia del find() por retornar un NUEVO ARRAY con TODAS las coincidencias encontrada
      Debemos almacenar el contenido en un nuevo array para perdurarlo

      const estudiantes54925 = ESTUDIANTES.filter(e => e.comision == 54925)

  **some()**
      Con un funcionamiento similar a los dos métodos anteriores, se diferencia por retornar true o false
      según haya o no alguna coincidencia con la condición planteada

      ESTUDIANTES.some(e => e.comision == 54999) //Hay algún estudiante de la comision 54999? FALS

  **map()**
      Crea un nuevo array a partir de un array preexistente al que se le aplica, a cada elemento, una modificación enviada al método.
      Por ejemplo, si unificaramos todos los estudiantes a la comision 12345:

      const comision12345 = ESTUDIANTES.map(e => {
                                          e.comision = 12345; 
                                          return e
                              })
                              
      A partir de aplicar el método map se crea un nuevo array comision12345 que contendrá los mismos objetos que ESTUDIANTES
      Solo que todos los elementos tendran como valor en la propiedad comision el valor 12345
      
  **reduce()**

      Permite obtener un único vaor a partir de distintos valores que contenga el array
      Es útil, por ejemplo, si quisiera saber el precio final de un carrito de compras con varios elementos
      O bien para obtener todas las calificaciones y consultar el promedio del curso

      Este método recibe dos parámetros: el primero es la función que permitirá acumular los valores, 
      la segunda  será el valor inicial del acumulador

      let promedioCurso = ESTUDIANTES.reduce((acum, elem) => {
           if(elem.comision == 54925) {
              return acum + elem.nota
          }else{
              return acum
          }
      },0)/ESTUDIANTES.length

      */EJ:
      class Fruta{
        constructor(id,nombre,precio){
            this.id = id,
            this.nombre = nombre,
            this.precio = precio,
            this.stock = 100
        }
        restaStock(){
            alert(`sumaste ${this.nombre} a tu carrito`);
            this.stock = this.stock -1;
        }
      }

      const fruta1 = new Fruta(1, "Banana", 100)
      const fruta2 = new Fruta(2, "Pera", 100)
      const fruta3 = new Fruta(3, "Mandarina", 100)
      const fruta4 = new Fruta(4, "Manzanas", 100)

      const miCarrito = [fruta1, fruta2, fruta3, fruta4]

      let totalCompra = miCarrito.reduce((acumulador, elemento)=>{
         return acumulador += elemento.precio;
      },0)

/* 
      Es importante que haya siempre un return (no dejar el else vacío) para que el acumulador no se vuelva undefined

  **sort()**    
      Modifica el array sobre el que se ejecuta ordenando los elementos según el criterio enviado.
      Como parámetro, se envia una funcion que recibe dos elementos del array para compararlos retornando 1, 0, -1 
      indicando cómo se posiciona un elemento respecto de otro

      ESTUDIANTES.sort((a, b) => a.nota - b.nota)

      Por cada iteración, se evalúan dos valores: se resta la b.nota de a.nota. 
      Si el resultado es un número positivo: a era más grande que b.
      Si el resultado es un número negativo: b era más grande que a.
      Si el resultado es 0: son iguales.
    
      Ej. se utiliza para ordenar una lista de menor a mayor precio o viscebersa
*/ 





CLASE:8 Funciones de Orden Superior II

//Objeto Math

/* 
    Métodos del objeto Math

*/

//Max - Min
    //Recibe una serie de valores y retorna el más grande (cuando se usa Max) o el más chico (cuando se usa Min)

    /* console.log(Math.max(15, 200, 20, 60, 4))
    console.log(Math.min(15, 200, 20, 60, numeroChico))

    let numeroChico = 5 */

    /* let numeroUser = parseInt(prompt("Decime un numero"))
    const arrayNumeros = [10, 15, 3000]
    let numeroMasGrande = Math.max(200, 300, 500, arrayNumeros[2], numeroUser)
    

    if (numeroMasGrande == numeroUser){
        alert("Ingresast un numero más grande que los existentes")
    }else{
        alert("No superaste el numero máximo")
    } */

//Ceil
    //Método que recibe un valor como parámetro y lo redondea hacia el entero mayor más proximo

    //console.log(Math.ceil(7.98)) //Devuelve 8
    //console.log(Math.ceil(7.53))  //Devuelve 8
    //console.log(Math.ceil(7.001)) //Devuelve 8


//Floor 
    //Recibe un parametro y devuelve el entero más cercano hacia abajo (el piso)

    //console.log(Math.floor(7.98)) //Devolver 7
    //console.log(Math.floor(7.53))  //Devolver 7
    //console.log(Math.floor(7.001))  //Devolver 7

//Round
    //Recibir un valor como parámetro y lo va a redondear hacia el entero más cercano

    /* console.log(Math.round(7.98)) //Devuelve 8
    console.log(Math.round(7.001)) //Devuelve 7
    console.log(Math.round(7.5)) //Devuelve 8 */

    /* let promedioCon5 = (5 + 8 + 9)/3 //7.333333

    console.log(Math.round(promedioCon5))

    let promedioCon6 = (6 + 8 + 9)/3 // 7.66666
    console.log(Math.round(promedioCon6)) */

//Sqare Root (raiz cuadrada)
    //Recibir un parámetro y retornar la raiz cuadrada del mismo

    /*     console.log(Math.sqrt(9)) // Retorna 3
        console.log(Math.sqrt(144)) // Retorna 12
    //Obtenemos el valor de la Raiz cuadrada y lo redondeamos para tener un entero:
        let raizCuadrada = Math.sqrt(811) 
        raizCuadrada = Math.round(raizCuadrada)
        console.log(raizCuadrada)
    */

//Random

    //Genera un número pseudo aleatorio

    //console.log(Math.random())  //Devuelve un numero entre 0 (no excluyente) y 1 (1 excluyente)

    //Numero entre 0 y 10 (10 excluyente)
   // console.log(Math.random() * 10) //Aumento el tope del número que me puede devolver

    //establecer un resultado mínimo
   // console.log(Math.random() + 20) // 0 y 1 --> 20 y 21 

    //Establecemos mínimo y máximo:
   // console.log(Math.random * 10 + 20) 

//Ejemplito práctico - Apuestas (mayor/menor)
   /*  let numeroUser = parseInt(prompt("Decime un numero del 1 al 100"))

    let numeroPC = Math.random() * 100 //99.999999

    numeroPC = Math.ceil(numeroPC) //Math.round(numeroPC)

    if (numeroUser > numeroPC){
        alert(`LE ganaste con tu ${numeroUser} a mi ${numeroPC} `)
    }else if (numeroUser == numeroPC){
        alert("Habian pocas chances, pero fue un empate")
    }else{
        alert(`No le pudiste ganar al buen ${numeroPC} de la PC`)
    } */


// Class Date
    //Instancia un objeto 'ahora' de tipo Date con la información del momento de la ejecución
    const ahora = new Date()

    //Usando su constructor podemos instanciar objetos con fecha distinta.}
    //No solo podemos manipular la fecha: año, mes, día, hora, minutos, segundos, milisegundos

    //Los meses se numeran del 0 (enero) al 11 (diciembre)

        //const naceNico = new Date(1992, 3, 1); //Wed Apr 01 1992 00:00:00 GMT-0300 (hora estándar de Argentina)
        //Aquellos valores que no envíe como parámetro, me los asignará en 0

        const naceNico = new Date(1992, 3, 1, 14, 20, 46); //Wed Apr 01 1992 14:20:46 GMT-0300 (hora estándar de Argentina)

    //Obtener valores de las distintas propiedades del objeto

        //getMonth()
            //Retornar el valor que representa el mes (entre 0 y 11)
            console.log(naceNico.getMonth())
        
        //getFullYear()
            //Retorna el valor año del objeto
            console.log(naceNico.getFullYear()) //1992

        //getDay()
            //Retorna el día del objeto según su representación en la semana (1 -> Lunes // 7 -> Domingo)
            console.log(naceNico.getDay())  //3 (Miércoles)
        
        //getDate()
            //Retorna el día como valor en si (del 1 al 31)
            console.log(naceNico.getDate()) // 1

        //toDateString()
            console.log(naceNico.toDateString()) //Wed Apr 01 1992
            //Devuelve la infomación de la fecha sin la hora ni la zona horario

        //toLocaleString()
            console.log(naceNico.toLocaleString()) //1/4/1992, 14:20:46
            //Retorna la información acorde al formato local del contexto donde se ejecuta

        //toLocaleDateString()
            console.log(naceNico.toLocaleDateString()) //1/4/1992
            //Retorna únicamente la fecha acorde al formato del contexto

        //toTimeString()
            //Retornar únicamente el horario y la zona horaria
            console.log(naceNico.toTimeString())

//Ejemplito para instanciar objetos con class y luego incorporarle un objeto Date a una de sus propiedades
        /* class Estudiante{
    constructor(nombre, comision){
        this.nombre = nombre,
        this.comision = comision,
        this.fechaRegistro = ""
    }
}

const estudiante1 = new Estudiante("Nico", 54925)
const estudiante2 = new Estudiante("Pepe", 54000)
debugger

estudiante1.fechaRegistro = new Date()

console.table(estudiante1) */

//Calculos con fechas
//Podemos realizar calculos con fechas, sabiendo que nos retornará como resultado MILISEGUNDOS
    let edadNico = ahora - naceNico;
    console.log(` Tiene ${edadNico} milisegundos`) //Edad representada en Milisegundos

    const milisegundosPorDia = 86400000;

    let edadNicoDias = edadNico / milisegundosPorDia //Edad representada en dias
    console.log(`Tiene ${edadNicoDias} días`)

    const diasAnio = 365;
    
    let edadNicoAnios = parseInt(edadNicoDias / diasAnio) //Edad representada en años
    console.log(`Tiene ${edadNicoAnios} años`)


