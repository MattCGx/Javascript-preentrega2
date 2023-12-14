console.log(
  ` inicializacion de la aplicación 
     ============================================================ `
);
// Arrays de Ejemplo iniciales

let agentes = [
  {
    nombre: "JUAN PÉREZ",
    posicion: "Supervisor",
    sector: "Fabricación",
    legajo: 2134,
  },
  {
    nombre: "ANA GARCÍA",
    posicion: "Operador",
    sector: "Reposición",
    legajo: 5678,
  },
  {
    nombre: "CARLOS LÓPEZ",
    posicion: "Encargado",
    sector: "Ventas",
    legajo: 9876,
  },
  {
    nombre: "MARÍA RODRÍGUEZ",
    posicion: "Supervisor",
    sector: "Facturación",
    legajo: 5432,
  },
  {
    nombre: "PEDRO MARTÍNEZ",
    posicion: "Operador",
    sector: "Fabricación",
    legajo: 8765,
  },
  {
    nombre: "LAURA GÓMEZ",
    posicion: "Operador",
    sector: "Ventas",
    legajo: 4321,
  },
  {
    nombre: "DIEGO SÁNCHEZ",
    posicion: "Supervisor",
    sector: "Reposición",
    legajo: 7890,
  },
  {
    nombre: "ELENA FERNÁNDEZ",
    posicion: "Operador",
    sector: "Facturación",
    legajo: 2345,
  },
  {
    nombre: "ROBERTO TORRES",
    posicion: "Operador",
    sector: "Ventas",
    legajo: 6789,
  },
  {
    nombre: "SOFÍA RAMÍREZ",
    posicion: "Encargado",
    sector: "Fabricación",
    legajo: 1098,
  },
];
let tareas = [
  {
    id: 1,
    tipo: "Fabricación",
    prioridad: "Baja",
    descripcion: "REVISAR Y AJUSTAR MAQUINARIA",
    estado: "Pendiente",
    creacion: new Date("2023-12-01T08:00:00"),
  },
  {
    id: 2,
    tipo: "Reposición",
    prioridad: "Media",
    descripcion: "REPONER PRODUCTOS EN ESTANTERÍAS",
    estado: "Pendiente",
    creacion: new Date("2023-12-02T10:30:00"),
  },
  {
    id: 3,
    tipo: "Ventas",
    prioridad: "Alta",
    descripcion: "ENTREGAR PEDIDO AL CLIENTE",
    estado: "Pendiente",
    creacion: new Date("2023-12-03T14:45:00"),
  },
  {
    id: 4,
    tipo: "Facturación",
    prioridad: "Urgente",
    descripcion: "EMITIR FACTURAS",
    estado: "Pendiente",
    creacion: new Date("2023-12-08T12:45:00"),
  },
];
let tareasCompletadas = [];
let insumos = [
  { nombreInsumo: "REACTIVOS DE PH", tipoInsumo: "Fabricación", stock: 500 },
  { nombreInsumo: "GUANTES", tipoInsumo: "Fabricación", stock: 600 },
  { nombreInsumo: "FILTROS", tipoInsumo: "Fabricación", stock: 450 },
  { nombreInsumo: "CEPILLOS", tipoInsumo: "Fabricación", stock:0},
  { nombreInsumo: "SILICONA", tipoInsumo: "Materias Primas", stock: 1000 },
  { nombreInsumo: "DETERGENTE", tipoInsumo: "Materias Primas", stock: 750 },
  { nombreInsumo: "EMULSIONANTE", tipoInsumo: "Materias Primas", stock: 200 },
  { nombreInsumo: "CERA", tipoInsumo: "Materias Primas", stock:0},
  { nombreInsumo: "ALCOHOL", tipoInsumo: "Materias Primas", stock: 300 },
  { nombreInsumo: "PAPEL DE OFICINA", tipoInsumo: "Administrativo", stock: 500,},
  { nombreInsumo: "BOLÍGRAFOS", tipoInsumo: "Administrativo", stock: 200 },
  { nombreInsumo: "CINTA ADHESIVA", tipoInsumo: "Administrativo", stock: 150 },
  { nombreInsumo: "PAPEL TOALLA", tipoInsumo: "Administrativo", stock: 300 },
];

// =================================================================
// Defino Variables globales
let menuPpalState = true;
let menuAgState;
let menuTareasState;
let menuInsumosState;
let tareaID = 5; // <- la empiezo desde 5 por el ultimo ID del array de ejemplo. Sino iniciaria en 1

// =================================================================

// Defino clases

class Agente {
  constructor(nombre, posicion, sector) {
    this.nombre = nombre;
    this.posicion = posicion;
    this.sector = sector;
    this.legajo = generarLegajo(agentes);
  }
}

class Tarea {
  constructor(tipo, prioridad, descripcion) {
    this.tipo = tipo;
    this.prioridad = prioridad;
    this.descripcion = descripcion;
    this.estado = "Pendiente";
    this.creacion = new Date();
    this.id = tareaID;
  }
}

class Insumo {
  constructor(nombreInsumo, tipoInsumo, stock) {
    this.nombreInsumo = nombreInsumo;
    this.tipoInsumo = tipoInsumo;
    this.stock = stock;
  }
}

// =================================================================

// Defino funciones globales

const generarLegajo = (agentes) => {
  let legajo;

  do {
    legajo = Math.floor(Math.random() * 9000) + 1000;
  } while (agentes.some((agente) => agente.legajo === legajo));

  return legajo;
};

// =================================================================
// ciclo menu principal

const menuInicio = () => {
  while (menuPpalState) {
    let seleccion = parseInt(
      prompt(`Sistema de Administración de Quimishop SRL. 
        Por favor elija una opción para continuar:

        1- Administrar Agentes
        2- Administrar Tareas
        3- Administrar Insumos       
        4- Salir
        `)
    );
    switch (seleccion) {
      case 1:
        menuAgentes();
        break;
      case 2:
        menuTareas();
        break;
      case 3:
        menuInsumos();
        break;
      case 4:
        alert("Cerrando Sesion");
        menuPpalState = false;
        break;
      default:
        alert("Seleccion inválida, por favor indique nuevamente la opción");
        break;
    }
  }
};

// Ciclo menu modulo agentes

const menuAgentes = () => {
  menuAgState = true;
  while (menuAgState) {
    let seleccionAg = parseInt(
      prompt(` Administrar nómina de empleados.
      
        1- Ver nómina
        2- Alta nuevo agente  
        3- Baja agente      
        4- Volver
        `)
    );
    switch (seleccionAg) {
      case 1:
        verNomina();
        break;
      case 2:
        altaAgente();
        break;
      case 3:
        bajaAgente();
        break;
      case 4:
        menuInicio();
        menuAgState = false;
        break;
      default:
        alert("Seleccion inválida, por favor indique nuevamente la opción");
        break;
    }
  }
};

// Funciones Menu Agentes

const verNomina = () => {
  let seleccionNomina = parseInt(
    prompt(` Nómina de Empleados de Quimishop SRL.

    Conteo Total de empleados: ${agentes.length}
    
      1- Nómina Completa
      2- Sector Ventas
      3- Sector Reposición 
      4- Sector Fabricación  
      5- Sector Facturación    
      6- Volver
      `)
  );
  switch (seleccionNomina) {
    case 1:
      let nomina = agentes.map(
        (agente) =>
          `${agente.nombre} - ${agente.posicion} en ${agente.sector} - Legajo: ${agente.legajo} `
      );
      if (nomina.length > 0) {
        alert(nomina.join("\n"));
      } else {
        alert("Sin agentes activos");
      }
      break;
    case 2:
      let nominaVentas = agentes.filter((agente) => agente.sector === "Ventas");
      let mostrarVentas = nominaVentas.map(
        (agente) =>
          `${agente.nombre} - ${agente.posicion} en ${agente.sector} - Legajo: ${agente.legajo} `
      );
      if (mostrarVentas.length > 0) {
        alert(mostrarVentas.join("\n"));
      } else {
        alert("Sin agentes activos en el sector");
      }
      break;
    case 3:
      let nominaRepo = agentes.filter(
        (agente) => agente.sector === "Reposición"
      );
      let mostrarRepo = nominaRepo.map(
        (agente) =>
          `${agente.nombre} - ${agente.posicion} en ${agente.sector} - Legajo: ${agente.legajo} `
      );
      if (mostrarRepo.length > 0) {
        alert(mostrarRepo.join("\n"));
      } else {
        alert("Sin agentes activos en el sector");
      }
      break;
    case 4:
      let nominaFab = agentes.filter(
        (agente) => agente.sector === "Fabricación"
      );
      let mostrarFab = nominaFab.map(
        (agente) =>
          `${agente.nombre} - ${agente.posicion} en ${agente.sector} - Legajo: ${agente.legajo} `
      );
      if (mostrarFab.length > 0) {
        alert(mostrarFab.join("\n"));
      } else {
        alert("Sin agentes activos en el sector");
      }
      break;
    case 5:
      let nominaFact = agentes.filter(
        (agente) => agente.sector === "Facturación"
      );
      let mostrarFact = nominaFact.map(
        (agente) =>
          `${agente.nombre} - ${agente.posicion} en ${agente.sector} - Legajo: ${agente.legajo} `
      );
      if (mostrarFact.length > 0) {
        alert(mostrarFact.join("\n"));
      } else {
        alert("Sin agentes activos en el sector");
      }
      break;
    case 6:
      alert("Volviendo al Menu de Administracion de Agentes");
      break;
    default:
      alert("Seleccion inválida, por favor indique nuevamente la opción");
      break;
  }
};

const altaAgente = () => {
  let nombre;
  let posicion;
  let sector;
  let selecPosicion;
  let selecSector;

  do {
    nombre = prompt("Indique nombre y apellido del nuevo agente").toUpperCase();
  } while (!isNaN(nombre) || nombre === null);

  while (
    isNaN(selecPosicion) ||
    selecPosicion === null ||
    selecPosicion < 1 ||
    selecPosicion > 3
  ) {
    selecPosicion = parseInt(
      prompt(`Seleccione el puesto en la empresa para ${nombre}.

1- Operador
2- Encargado
3- Supervisor
`)
    );
    switch (selecPosicion) {
      case 1:
        posicion = "Operador";
        break;
      case 2:
        posicion = "Encargado";
        break;
      case 3:
        posicion = "Supervisor";
        break;
      default:
        alert("Opción inexistente");
        break;
    }
  }

  while (
    isNaN(selecSector) ||
    selecSector === null ||
    selecSector < 1 ||
    selecSector > 4
  ) {
    selecSector = parseInt(
      prompt(`Seleccione el sector de en la empresa al que ingresa el ${posicion}: ${nombre}.

  1- Facturación
  2- Ventas
  3- Fabricacion
  4- Reposición
  `)
    );
    switch (selecSector) {
      case 1:
        sector = "Facturación";
        break;
      case 2:
        sector = "Ventas";
        break;
      case 3:
        sector = "Fabricación";
        break;
      case 4:
        sector = "Reposición";
        break;
      default:
        alert("Opción inexistente");
        break;
    }
  }
  let agente = new Agente(nombre, posicion, sector);
  agentes.push(agente);

  alert(` Se ha ingresado al nuevo agente a la base de datos:

========================
Puesto: ${agente.posicion}
Nombre: ${agente.nombre} 
Sector: ${agente.sector}  
Legajo: ${agente.legajo}
=========================
 `);
};

const bajaAgente = () => {
  let confirmar = false;
  let agenteEliminado = prompt(
    "Ingrese el NOMBRE o el numero de LEGAJO del agente que desea dar de baja"
  );

  if (
    !isNaN(agenteEliminado) &&
    agentes.some((agente) => agente.legajo === parseInt(agenteEliminado))
  ) {
    while (!confirmar) {
      const agentePorLegajo = agentes.find(
        (agente) => agente.legajo === parseInt(agenteEliminado)
      );

      let confirmacion = parseInt(
        prompt(`¿Esta seguro de que desea eliminar al siguiente agente?

        ===============
         Puesto: ${agentePorLegajo.posicion}
         Nombre: ${agentePorLegajo.nombre}
         Sector: ${agentePorLegajo.sector}
         Legajo: ${agentePorLegajo.legajo}
         ===============
      1. SI
      2. NO`)
      );

      switch (confirmacion) {
        case 1:
          alert(
            `Se eliminó el agente: ${agentePorLegajo.nombre} del sector ${agentePorLegajo.sector}`
          );
          agentes = agentes.filter(
            (agente) => agente.legajo !== parseInt(agenteEliminado)
          );
          confirmar = true;
          break;
        case 2:
          alert("Baja Cancelada");
          confirmar = true;
          break;
        default:
          alert("Opcion inválida");
          break;
      }
    }
  } else if (
    isNaN(agenteEliminado) &&
    agentes.some((agente) => agente.nombre === agenteEliminado.toUpperCase())
  ) {
    while (!confirmar) {
      const agentePorNombre = agentes.find(
        (agente) => agente.nombre === agenteEliminado.toUpperCase()
      );

      let confirmacion = parseInt(
        prompt(`¿Esta seguro de que desea eliminar al siguiente agente?

        ===============
         Puesto: ${agentePorNombre.posicion}
         Nombre: ${agentePorNombre.nombre}
         Sector: ${agentePorNombre.sector}
         Legajo: ${agentePorNombre.legajo}
        ===============

      1. SI
      2. NO`)
      );

      switch (confirmacion) {
        case 1:
          alert(
            `Se eliminó el agente: ${agentePorNombre.nombre} del sector ${agentePorNombre.sector}`
          );
          agentes = agentes.filter(
            (agente) => agente.nombre !== agenteEliminado.toUpperCase()
          );
          confirmar = true;
          break;
        case 2:
          alert("Baja Cancelada");
          confirmar = true;
          break;
        default:
          alert("Opcion inválida");
          break;
      }
    }
  } else {
    alert("No se encontró ningún agente con el legajo o nombre proporcionado.");
  }
};

// =========================================================================

// Ciclo menu modulo tareas

const menuTareas = () => {
  menuTareasState = true;
  while (menuTareasState) {
    let seleccionTarea = parseInt(
      prompt(` Lista de tareas pendientes.

        1- Ver Tareas
        2- Agregar Tareas Nuevas
        3- Marcar Tarea Realizada        
        4- Salir
        `)
    );
    switch (seleccionTarea) {
      case 1:
        verTareas();
        break;
      case 2:
        agregarTarea();
        break;
      case 3:
        tareaRealizada();
        break;
      case 4:
        menuInicio();
        menuTareasState = false;
        break;
      default:
        alert("Seleccion inválida, por favor indique nuevamente la opción");
        break;
    }
  }
};

// Funciones Menu Tareas
const verTareas = () => {
  let listaTareas = tareas.map(
    (tarea) =>
      `ID:${tarea.id} - ${tarea.descripcion} en ${tarea.tipo} - con prioridad: ${tarea.prioridad} - ${tarea.estado}`
  );
    if (listaTareas.length > 0) {
    alert(listaTareas.join("\n ------- \n"));
  } else {
    alert("Sin Tareas Pendientes");
  }

  if (tareasCompletadas.length > 0) {
    let listaCompletadas = tareasCompletadas.map((tarea) => `ID:${tarea.id} - ${tarea.descripcion} en ${tarea.tipo} - ${tarea.estado}`);
    alert(`Tareas Completadas:
    ==================
    ${listaCompletadas.join("\n ------- \n")}`);
  };
};

const agregarTarea = () => {
  let descripcion;
  let tipoTarea;
  let prioridad;
  let selecTipo;
  let selecPrio;

  do {
    descripcion = prompt(
      "Indique brevemente la descripción de la nueva tarea"
    ).toUpperCase();
  } while (!isNaN(descripcion) || descripcion === null);

  while (
    isNaN(selecTipo) ||
    selecTipo === null ||
    selecTipo < 1 ||
    selecTipo > 4
  ) {
    selecTipo = parseInt(
      prompt(`Seleccione el tipo de tarea para su clasificación:

1- Fabricación
2- Reposición
3- Ventas
4- Facturación
`)
    );
    switch (selecTipo) {
      case 1:
        tipoTarea = "Fabricación";
        break;
      case 2:
        tipoTarea = "Reposición";
        break;
      case 3:
        tipoTarea = "Ventas";
        break;
      case 4:
        tipoTarea = "Facturación";
        break;
      default:
        alert("Opción inexistente");
        break;
    }
  }

  while (
    isNaN(selecPrio) ||
    selecPrio === null ||
    selecPrio < 1 ||
    selecPrio > 4
  ) {
    selecPrio = parseInt(
      prompt(`Indique el nivel de prioridad de la nueva tarea.

  1- Baja
  2- Media
  3- Alta
  4- Urgente
  `)
    );
    switch (selecPrio) {
      case 1:
        prioridad = "Baja";
        break;
      case 2:
        prioridad = "Media";
        break;
      case 3:
        prioridad = "Alta";
        break;
      case 4:
        prioridad = "Urgente";
        break;
      default:
        alert("Opción inexistente");
        break;
    }
  }
  let tarea = new Tarea(descripcion, tipoTarea, prioridad);
  tareas.push(tarea);
  tareaID++;

  alert(` Se ha ingresado la nueva tarea a la lista de pendientes:

========================
ID: ${tarea.id}
Descripción: ${tarea.descripcion}
Tipo: ${tarea.nombre} 
Prioridad: ${tarea.prioridad}  
Fecha: ${tarea.creacion}
=========================
 `);
};

const tareaRealizada = () => {

let confirmarTarea = false;
let tareaBuscada = parseInt(prompt(`Ingrese el ID de la tarea que desea revisar`));

if (
  !isNaN(tareaBuscada) &&
  tareas.some((tarea) => tarea.id === tareaBuscada)
) {
  while (!confirmarTarea) {
const marcarTarea = tareas.find((tarea) => tarea.id === tareaBuscada);


let opcion = parseInt(prompt(`
Desea marcar la tarea como completada y eliminarla de la lista de pendientes?
1- Si
2- No
--------------
ID: ${marcarTarea.id}
Descripción: ${marcarTarea.descripcion}
Tipo: ${marcarTarea.tipo}
Prioridad: ${marcarTarea.prioridad}
Fecha de Creación: ${marcarTarea.creacion}
Estado: ${marcarTarea.estado}
`));

switch (opcion) {
  case 1: 
  marcarTarea.estado = "Completada";
  alert(`La tarea:
  ----------------
ID: ${marcarTarea.id}
Descripción: ${marcarTarea.descripcion}
Tipo: ${marcarTarea.tipo}
Prioridad: ${marcarTarea.prioridad}
Fecha de Creación: ${marcarTarea.creacion}
Estado: ${marcarTarea.estado}
  ----------------
  se ha eliminado de la lista de pendientes.`);

  tareasCompletadas.push(marcarTarea);
  tareas = tareas.filter((tarea) => tarea.id !== marcarTarea.id);
  confirmarTarea = true;
  break;
  case 2: 
  alert(`La tarea:
  ----------------
ID: ${marcarTarea.id}
Descripción: ${marcarTarea.descripcion}
Tipo: ${marcarTarea.tipo}
Prioridad: ${marcarTarea.prioridad}
Fecha de Creación: ${marcarTarea.creacion}
Estado: ${marcarTarea.estado}
  ----------------
  permanecerá en la lista de pendientes.`);
  confirmarTarea = true;
  break;
  default:
    alert("Opcion invalida")
    break;
};
};
};
};


// =================================================================================

// Ciclo menu modulo insumos

const menuInsumos = () => {
  menuInsumosState = true;
  while (menuInsumosState) {
    let seleccionInsumos = parseInt(
      prompt(` Listado de Stock de Insumos:

        1- Ver Insumos
        2- Buscar y Administrar Insumos
        3- Agregar Nuevo Insumo        
        4- Volver
        `)
    );
    switch (seleccionInsumos) {
      case 1:
        verInsumos();
        break;
      case 2:
        administrarInsumos();
        break;
      case 3:
        agregarInsumos();
        break;
      case 4:
        menuInicio();
        menuInsumosState = false;
        break;       
      default:
        alert("Seleccion inválida, por favor indique nuevamente la opción");
        break;
    }
  }
};

// Funciones Menu Insumos
const verInsumos = () => {
  let opcionVistaInsumos = parseInt(
    prompt(` Base de Stock e Insumos de Quimishop SRL

      
      1- Lista completa de Insumos
      2- Ver Solo Administrativos
      3- Ver Solo Fabricacion 
      4- Ver Solo Materias Primas
      5- Ver Faltantes    
      6- Volver
      `)
  );
  switch (opcionVistaInsumos) {
    case 1:
      let listaInsumos = insumos.map(
        (objeto) =>
          `${objeto.tipoInsumo}: ${objeto.nombreInsumo} - Stock: ${objeto.stock} unidades`
      );
      if (listaInsumos.length > 0) {
        alert(listaInsumos.join("\n"));
      } else {
        alert("Empresa desabastecida por completo");
      }
      break;
    case 2:
      let filtroAdmin = insumos.filter((objeto) => objeto.tipoInsumo === "Administrativo");
      let listaAdmin = filtroAdmin.map(
        (objeto) =>
          `${objeto.tipoInsumo}: ${objeto.nombreInsumo} - Stock: ${objeto.stock} unidades`
      );
      if (listaAdmin.length > 0) {
        alert(listaAdmin.join("\n"));
      } else {
        alert("Sin recursos de al categoría Administrativo");
      }
      break;
    case 3:
      let filtroFabricacion = insumos.filter(
        (objeto) => objeto.tipoInsumo === "Fabricación"
      );
      let listaFabricacion = filtroFabricacion.map(
        (objeto) =>
          `${objeto.tipoInsumo}: ${objeto.nombreInsumo} - Stock: ${objeto.stock} unidades`
      );
      if (listaFabricacion.length > 0) {
        alert(listaFabricacion.join("\n"));
      } else {
        alert("Sin recursos de al categoría Fabricación");
      }
      break;
    case 4:
      let filtroMaterias = insumos.filter(
        (objeto) => objeto.tipoInsumo === "Materias Primas"
      );
      let listaMaterias = filtroMaterias.map(
        (objeto) =>
          `${objeto.tipoInsumo}: ${objeto.nombreInsumo} - Stock: ${objeto.stock} unidades`
      );
      if (listaMaterias.length > 0) {
        alert(listaMaterias.join("\n"));
      } else {
        alert("Sin Materias Primas");
      }
      break;
    case 5:
      let filtroFaltantes = insumos.filter(
        (objeto) => objeto.stock === 0
      );
      let listaFaltantes = filtroFaltantes.map(
        (objeto) =>
          `${objeto.tipoInsumo}: ${objeto.nombreInsumo} - Stock: ${objeto.stock} unidades`
      );
      if (listaFaltantes.length > 0) {
        alert(listaFaltantes.join("\n"));
      } else {
        alert("Sin Faltantes");
      }
      break;
    case 6:
      alert("Volviendo al Menu de Insumos");
      break;
    default:
      alert("Seleccion inválida, por favor indique nuevamente la opción");
      break;
  }


}; 

const administrarInsumos = () => {};


const agregarInsumos = () => {

  let nombreNuevoInsumo;
  let categoriaNuevoInsumo;
  let stocknuevoInsumo;
  let selecCategoria;
  

  do {
    nombreNuevoInsumo = prompt(
      "Indique el nombre del insumo a agregar:"
    ).toUpperCase();
  } while (!isNaN(nombreNuevoInsumo) || nombreNuevoInsumo === null);

  while (
    isNaN(selecCategoria) ||
    selecCategoria === null ||
    selecCategoria < 1 ||
    selecCategoria > 3
  ) {
    selecCategoria = parseInt(
      prompt(`Seleccione el tipo de tarea para su clasificación:

1- Administrativo
2- Fabricación
3- Materias Primas
`)
    );
    switch (selecCategoria) {
      case 1:
        categoriaNuevoInsumo = "Administrativo";
        break;
      case 2:
        categoriaNuevoInsumo = "Fabricación";
        break;
      case 3:
        categoriaNuevoInsumo = "Materias Primas";
        break;
      default:
        alert("Opción inexistente");
        break;
    }
  }
 
  do {
    stocknuevoInsumo = parseInt(prompt(
      "Indique el nombre del insumo a agregar:"
    ));
  } while (isNaN(stocknuevoInsumo) || stocknuevoInsumo === null);

  let nuevoInsumo = new Insumo(nombreNuevoInsumo, categoriaNuevoInsumo, stocknuevoInsumo);
  insumos.push(nuevoInsumo);

alert(`Se agregaron ${nuevoInsumo.stock} unidades de ${nuevoInsumo.nombreInsumo} a la lista, bajo la categoria ${nuevoInsumo.tipoInsumo}`);

};

menuInicio();
