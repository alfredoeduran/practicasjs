var persona = {
    nombre: "Alfredo",
    apellido: "Duran",
    edad: 25,
    direccion: {
        pais: "Venezuela",
        ciudad: "Caracas",
        edificio:{
            nombre: "Edificio Principal",
            telefono: "2222-3333"
        }
    }

};

persona.direccion.zipcode = 11101;

var edificio = persona.direccion.edificio;

//persona.direccion.edificio.area.lugar.nombreJefe;

edificio.nopiso = "8vo piso";

console.log(persona);

// cuando queremos accesar a valores directamente que sabemos que no van a cambiar, se usa la notacion de punto.
//cuando queremos traer datos de manera dinamica, se usa la notacion de corchete
// esgenial para decir que campo quieres

var campo = "edad";

console.log( persona[campo]);
console.log( persona["direccion"]);



