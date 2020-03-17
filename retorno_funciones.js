//valores de retorno
/* que puede regresar una funcion de js
tipo primitivo
undefined 
objeto
function

la palabra reservada para retornar un valor es return*/
console.info("---EL R E T O R N O DE F U N C I O N E S---");
function obtenerAleatorio(){

    return Math.random();
}

function obtenerNombre(){
    return "Alfred";
}

console.log(obtenerNombre() + " Duran");
console.info("---retorno una cifra aleatoria---");
console.log(obtenerAleatorio() + 10);

//hacer que la funcion retorne booleano
console.info("---Retorno de un booleano---");
function esMayor05(){
    //dentro de la funcion se pueden llamar funciones del objeto principal o el objeto global

    if (obtenerAleatorio () > 0.5){
        return true;
    }else{
        return false;
    }
}

console.log(esMayor05());

if(esMayor05() ){
    console.log("Es mayor a 0.5");
    }else{
        console.log("Es menor a 0.5");
    }

//las funciones pueden retornar objetos
console.info("---retorno de objetos---");

function crearPersona( nombre, apellido){
    /*los objetos las podemos devolver de dos maneras 
        explicitas o anonimas */
    
    //explicito
    var obj = {};

    //anonimo nos ahorramos espacios en memoria
    return {
        nombre: nombre,
        apellido: apellido
    }
}

var persona = crearPersona("Maria","Paz");
console.log (persona.nombre);
console.log(persona.apellido);

console.info("---funciones que retornan funciones---")

function creaFuncion(){
    return function(nombre){
        console.log("Me creo " + nombre);
        return function(){
            console.log("Segunda funcion ejecutada");
        }
    }
}
//las funciones pueden retonar una funcion y otra
var nuevaFuncion = creaFuncion();
var segundaFuncion = nuevaFuncion( persona.nombre );

segundaFuncion();   

