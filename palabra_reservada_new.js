console.log("---PALABRA RESERVADA NEW---");

//NOS CREA EL ESPACIO EN MEMORIA PARA TRABAJAR
//LA FUNCION AGARRA UNA FUNCION PARECIDA A 
function Persona(){
     this.nombre = "Oriana";
     this.apellido = "Mendoza";
     this.edad = 24;

     this.imprimirPersona = function(){
         return this.nombre + " " + this.apellido;
     }

}

//si no se llaman con el valor "new" caen en el objeto global

var oriana = new Persona();

console.log(oriana);
console.log(oriana.nombre);
console.log(oriana.imprimirPersona() );

//podemos meter metodos propiedades

console.log("---P R A C T I C A---");
function rutaA() {

    console.log("rutaA");
}
function rutaB() {

    console.log(rutaB(edificio));
}

rutaA();
    rutaA.edificio = "Veronica";
    rutaA.direccion = {
        ciudad: "Caracas",
        municipio: "Libertador",
        piso: "PB"
    }

    rutaB();
    rutaB.edificio = "Frailejon";
    rutaB.direccion = {
        ciudad: "Miranda",
        municipio: "Baruta",
        piso: "1A"
    }

    