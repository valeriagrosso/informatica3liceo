// Los objetos se pueden crear directamente
let miVaso = {
    // PROPIEDADES
    color: "blue",
    capacidad: 300,
    contenidoActual: 200,
    material: "vidrio",
    dueno: "Luis",
    // PROPIEDADES
    regarAgua: function (cantidad) {
      this.contenidoActual -= cantidad;
    },
    llenar: function () {
      this.contenidoActual = this.capacidad;
    },
  };
  console.log(miVaso.capacidad);
  console.log(miVaso.contenidoActual);
  miVaso.regarAgua(15);
  console.log(miVaso.contenidoActual);
  miVaso.llenar();
  console.log(miVaso.contenidoActual);
  
  // La función siguiente se llama FACTORY FUNCTION, y su tarea es crear objetos con
  // las propiedades deseadas. La ventaja que tiene es que se puede utilizar muchas veces para generar muchos objetos de la misma clase.
  function Vaso(color, capacidad, contenidoActual, material, dueno) {
    this.color = color;
    this.capacidad = capacidad;
    this.contenidoActual = contenidoActual;
    this.material = material;
    this.dueno = dueno;
    (this.regarAgua = function (cantidad) {
      this.contenidoActual -= cantidad;
    }),
      (this.llenar = function () {
        this.contenidoActual = this.capacidad;
      });
  }
  
  // En este punto se utiliza la factory function para crear un objeto nuevo
  let miNuevoVaso = new Vaso("red", 500, 250, "plastico", "Guevara");
  console.log(miNuevoVaso.capacidad);
  console.log(miNuevoVaso.color);
  console.log(miNuevoVaso.contenidoActual);
  miNuevoVaso.regarAgua(20);
  console.log(miNuevoVaso.contenidoActual);
  
  // Se puede crear otro vaso, y será independiente del primero.
  let vaso2 = new Vaso("yellow", 300, 100, "vidrio", "Sara");
  console.log(vaso2.capacidad);
  console.log(vaso2.color);
  console.log(vaso2.contenidoActual);
  vaso2.regarAgua(15);
  console.log(vaso2.contenidoActual);