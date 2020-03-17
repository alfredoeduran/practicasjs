var a = 30;

//para definir una funcion

function primeraFuncion()
//cuando el nombre de la funcion es compuesta de dos palabras o mas se utiliza el camel case
    {
        var a = 20;

        console.log(a);
    }

    //para invocar una funcion

    primeraFuncion(a);
    //js primero pregunta si el entorno de la funcion si existe la variable deseada
    //si no existe la varible se utiliza la variable global
    //si la variable se encuentra debajo de la funcion no sera tomada, recordar que js hace un barrido
    //las funciones y procedimientos son iguales
    //solo hay un tipo de funcion 
    //todas las funciones regresan un valor

    //esta es una funcion que retorna el valor de la segunda parte
    var a = primeraFuncion();

    console.log (a);

    //si no se colocan los paretesis a la funcion, esta no se invocara pero se definira