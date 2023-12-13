console.log(
  ` inicializacion de la aplicación 
     ============================================================ `
);

// Defino clases

class Operador {
  constructor(nombre, posicion, sector) {
    this.nombre = nombre;
    this.posicion = posicion;
    this.sector = sector;
    // this.legajo = null;
  }
}

class Tarea {
  constructor(tipo, prioridad, descripcion) {
    this.tipo = tipo;
    this.prioridad = prioridad;
    this.descripcion = descripcion;
  }
}

class Insumo {
  constructor(nombreInsumo, tipoInsumo, stock) {
    this.nombreInsumo = nombreInsumo;
    this.tipoInsumo = tipoInsumo;
    this.stock = stock;
  }
}

// Defino Variables globales
let menuPpal = true;
let menuUsuario;
let menuTareas;

let operadores = [];

// Defino funciones globales

// ciclo menu principal

const menuInicio = () => {
  while (menuPpal) {
    let seleccion = parseInt(
      prompt(`Iniciando App de Lista de Tareas.
        Por favor elija una opción para continuar:

        1- Administrar Operadores
        2- Administrar Tareas
        3- Administrar Insumos       
        4- Salir
        `)
    );
  }

  switch (seleccion) {
    case 1:
      menuOperadores();
      break;
    case 2:
      menuTareas();
      break;
    case 3:
      break;
    case 4:
      alert("Gracias por usar Nuestro servicio.");
      menuPpal = false;
      break;
    default:
      alert("Seleccion inválida, por favor indique nuevamente la opción");
      break;
  }
};

// Ciclo menu modulo usuarios

// Ciclo menu modulo tareas
