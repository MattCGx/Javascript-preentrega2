console.log(
  ` inicializacion de la aplicación 
     ============================================================ `
);

// Defino Variables globales
let menuPpalState = true;
let menuAgState;
let menuTareasState;
let menuInsumosState;

// =================================================================

// Defino funciones globales

function generarLegajo(agentes) {
  let legajo;
  while (!agentes.some((agente) => agente.legajo === legajo)) {
    legajo = Math.floor(Math.random() * 9000) + 1000;
  }
  return legajo;
}

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
    this.estado = null;
    this.creacion = null;
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
    tipo: "Fabricación",
    prioridad: "Baja",
    descripcion: "REVISAR Y AJUSTAR MAQUINARIA",
  },
  {
    tipo: "Reposición",
    prioridad: "Media",
    descripcion: "REPONER PRODUCTOS EN ESTANTERÍAS",
  },
  {
    tipo: "Ventas",
    prioridad: "Alta",
    descripcion: "ENTREGAR PEDIDO AL CLIENTE",
  },
  {
    tipo: "Fabricación",
    prioridad: "Urgente",
    descripcion: "LIMPIAR ÁREA DE PRODUCCIÓN CON URGENCIA",
  },
  {
    tipo: "Fabricación",
    prioridad: "Baja",
    descripcion: "REALIZAR INSPECCIÓN DE PRODUCTOS ACABADOS",
  },
  {
    tipo: "Reparación",
    prioridad: "Media",
    descripcion: "REPARAR EQUIPO DE OFICINA",
  },
  {
    tipo: "Ventas",
    prioridad: "Alta",
    descripcion: "ATENDER A CLIENTES EN MOSTRADOR",
  },
  {
    tipo: "Facturación",
    prioridad: "Urgente",
    descripcion: "EMITIR FACTURAS CON URGENCIA",
  },
  {
    tipo: "Resposicion",
    prioridad: "Baja",
    descripcion: "VERIFICAR Y REPONER STOCK EN ALMACÉN",
  },
  {
    tipo: "Fabricación",
    prioridad: "Media",
    descripcion: "REALIZAR MANTENIMIENTO PREVENTIVO DE EQUIPOS",
  },
];
let insumos = [
  { nombreInsumo: "REACTIVOS DE PH", tipoInsumo: "Fabricación", stock: 500 },
  { nombreInsumo: "SILICONA", tipoInsumo: "Materias Primas", stock: 1000 },
  { nombreInsumo: "DETERGENTE", tipoInsumo: "Materias Primas", stock: 750 },
  { nombreInsumo: "PAPEL TOALLA", tipoInsumo: "Administrativo", stock: 300 },
  { nombreInsumo: "EMULSIONANTE", tipoInsumo: "Materias Primas", stock: 200 },
  { nombreInsumo: "CERA", tipoInsumo: "Materias Primas", stock: 400 },
  { nombreInsumo: "GUANTES", tipoInsumo: "Fabricación", stock: 600 },
  { nombreInsumo: "FILTROS", tipoInsumo: "Fabricación", stock: 450 },
  { nombreInsumo: "CEPILLOS", tipoInsumo: "Fabricación", stock: 350 },
  { nombreInsumo: "ALCOHOL", tipoInsumo: "Materias Primas", stock: 300 },
  {
    nombreInsumo: "PAPEL DE OFICINA",
    tipoInsumo: "Administrativo",
    stock: 500,
  },
  { nombreInsumo: "BOLÍGRAFOS", tipoInsumo: "Administrativo", stock: 200 },
  { nombreInsumo: "CINTA ADHESIVA", tipoInsumo: "Administrativo", stock: 150 },
];

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
        2- Administrar agente
        3- Alta nuevo agente  
        4- Baja agente      
        5- Volver
        `)
    );
    switch (seleccionAg) {
      case 1:
        verNomina();
        break;
      case 2:
        administrarAgente();
        break;
      case 3:
        altaAgente();
        break;
      case 4:
        bajaAgente();
        break;
      case 5:
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

const administrarAgente = () => {};

const altaAgente = () => {};

const bajaAgente = () => {};

// Ciclo menu modulo tareas

const menuTareas = () => {
  menuTareasState = true;
  while (menuTareasState) {
    let seleccionTarea = parseInt(
      prompt(` Nómina de Empleados de Quimishop SRL.

        1- Ver Nómina
        2- Administrar Agente
        3- Alta Nuevo Agente  
        4- Baja Agente      
        5- Salir
        `)
    );
    switch (seleccionTarea) {
      case 1:
        verNomina();
        break;
      case 2:
        administrarAgente();
        break;
      case 3:
        altaAgente();
        break;
      case 4:
        bajaAgente();
        break;
      case 5:
        menuInicio();
        menuTareasState = false;
        break;
      default:
        alert("Seleccion inválida, por favor indique nuevamente la opción");
        break;
    }
  }
};

// Ciclo menu modulo insumos

const menuInsumos = () => {
  menuInsumosState = true;
  while (menuInsumosState) {
    let seleccionInsumos = parseInt(
      prompt(` Nómina de Empleados de Quimishop SRL.

        1- Ver Nómina
        2- Administrar Agente
        3- Alta Nuevo Agente  
        4- Baja Agente      
        5- Salir
        `)
    );
    switch (seleccionInsumos) {
      case 1:
        verNomina();
        break;
      case 2:
        administrarAgente();
        break;
      case 3:
        altaAgente();
        break;
      case 4:
        bajaAgente();
        break;
      case 5:
        menuInicio();
        menuInsumosState = false;
        break;
      default:
        alert("Seleccion inválida, por favor indique nuevamente la opción");
        break;
    }
  }
};

menuInicio();
