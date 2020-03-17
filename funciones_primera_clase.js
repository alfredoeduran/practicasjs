console.info("***Funciones de primera clase***");

//js 

function a(){

    console.log("Función a");
    
}

function b(){

    console.log("Función b");
}

a();

a.nombre = "Maria";

/*las funciones son objetos, la funcion a se le esta asignando una propiedad
con el nombre maria */


b();
b.nombre = "Maria";
b.direccion = {
    pais: "Venezuela",
    ciudad: "Caracas",
    edificio:{
        piso: "7mo",
        nombre: "Edificio principal"
    }
}