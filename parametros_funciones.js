console.info("---PARAMETRO PARA LAS FUNCIONES---");

function imprimir (nombre, apellido){
    //si desean enviar varios parametros se separan por coma
    //las funciones pueden recibir tipos primitivos, objetos y funciones

    //nomenclatura de signos
    //para igualacion del valor y el objeto son el mismo se usan === 
    
    if (apellido === undefined){
        apellido = "xxx";
    }

    //hay una manera mas corta 

    apellido = apellido || "xxx";

    //para decir "o" en una determinacion de variable se usa ||
    console.log(nombre + "" + apellido);

}


imprimir("Alfred");
//variable anonima noesta explicita en el codigo la estoy creando en el momento en el que estoy llamando la funcion


//variable explicita
var nombre ="juan";

//una buena practica es colocar las funnciones al principio del archivo


//ejemplo de funcion con objeto

//queremos imprimir el nombre de la persona mediante un objeto

function imprimir ( persona){
    console.log (persona.nombre + "" + persona.apellido);
}
imprimir({
    nombre: "Juan",
    apellido: "Padilla"
});

var obj = {
    nombre: "Juan",
    apellido: "Padilla"
}

imprimir (obj);

//las variables y los objetos pueden ser anonimos

//mandar una funcion dentro de otra funcion

function imprimir (fn){
    fn();

}

function imprimir (fn1, fn2, var1, var2, obj1, obj2){
    // si no se envian la cantidad de paramtros establecidos seran mostrados como undefined
    

}
//fn tambien se puede definir funcion
//las funciones son objetos

imprimir (function(){
    console.log("Funcion anonima");

});

//funcion explicita

var miFuncion = function(){
    console.log("miFuncion");
}

imprimir(miFuncion);