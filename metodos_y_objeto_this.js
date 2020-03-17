/* cada vez que un contexto de ejeucion es corrido se crea el objeto
 window pero a su vez js crea este otro : this
que tambien hace referencia a la ventana.
*/
console.log("---Metodos y objeto this---");

var nombre = "Alfredo Duran";

var persona = {

    nombre: "Oriana",
    apellido: "Mendoza",
    imprimirNombre:  function () {

        console.log(this.nombre + " " + this.apellido);
    },
    direccion:{
        pais: "Venezuela",
        obtenerPais: function(){

            var self = this;

            var nuevaDireccion = function(){

                console.log(self);
                console.log("La direccion es en " + self.pais);
            }

            nuevaDireccion();
            
        }
    }
};


persona.nombre= "Ernesto";

persona.imprimirNombre();
persona.direccion.obtenerPais();