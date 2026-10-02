// ==========================================
// CONFIGURACIÓN - GOOGLE APPS SCRIPT
// ==========================================
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby73wBltoTjoLSkhGoDM-NYz7YCE3gvgUibLLCw7tnbcmugV4fDZPR8EMk2vjTg-_g0/exec';

// ==========================================
// ✅ DICCIONARIO DE AUTOCORRECCIÓN AMPLIADO
// Se aplica al texto antes de guardar.
// Funciona en TODOS los dispositivos (PC, Android, iOS).
// ==========================================
const DICCIONARIO_CORRECCION = {
    
    // 🔧 ABREVIACIONES TÉCNICAS GENERALES
    "MTTO": "MANTENIMIENTO",
    "MANTTO": "MANTENIMIENTO",
    "MANTNIMIENTO": "MANTENIMIENTO",
    "MANTENIMINETO": "MANTENIMIENTO",
    "MANTENIMIENTIO": "MANTENIMIENTO",
    "PREV": "PREVENTIVO",
    "CORR": "CORRECTIVO",
    "REV": "REVISIÓN",
    "INSP": "INSPECCIÓN",
    "INST": "INSTRUMENTACIÓN",
    "INSTL": "INSTALACIÓN",
    "LUB": "LUBRICACIÓN",
    "CAL": "CALIBRACIÓN",
    "CALIB": "CALIBRACIÓN",
    "OPER": "OPERACIÓN",
    "ADMIN": "ADMINISTRACIÓN",
    "PROG": "PROGRAMACIÓN",
    "COORD": "COORDINACIÓN",
    "SUP": "SUPERVISIÓN",
    "SUPERV": "SUPERVISIÓN",
    "DOC": "DOCUMENTACIÓN",
    "REP": "REPORTE",
    "INFOR": "INFORME",
    "CERT": "CERTIFICACIÓN",
    "PTE": "PENDIENTE",
    "PEND": "PENDIENTE",
    
    // ⚙️ MECÁNICA Y EQUIPOS ROTATIVOS
    "MOTORR": "MOTOR",
    "MOTORES": "MOTORES",
    "BOMBAS": "BOMBAS",
    "BOMBA": "BOMBA",
    "COMPRESOR": "COMPRESOR",
    "COMPRESORES": "COMPRESORES",
    "TURBINA": "TURBINA",
    "TURBINAS": "TURBINAS",
    "GENERADOR": "GENERADOR",
    "GENERADORES": "GENERADORES",
    "VENTILADOR": "VENTILADOR",
    "EXTRACTOR": "EXTRACTOR",
    "REDUCTOR": "REDUCTOR",
    "ACOPLE": "ACOPLE",
    "ACOPLES": "ACOPLES",
    "RODAMIENTO": "RODAMIENTO",
    "RODAMIENTOS": "RODAMIENTOS",
    "SELLO": "SELLO",
    "SELLOS": "SELLOS",
    "EMPAQUE": "EMPAQUE",
    "EMPAQUES": "EMPAQUES",
    "BUJE": "BUJE",
    "BUJES": "BUJES",
    "PIÑON": "PIÑÓN",
    "PIÑONES": "PIÑONES",
    "ENGRANAJE": "ENGRANAJE",
    "ENGRANAJES": "ENGRANAJES",
    "CORREA": "CORREA",
    "CORREAS": "CORREAS",
    "CADENA": "CADENA",
    "CADENAS": "CADENAS",
    "POLEA": "POLEA",
    "POLEAS": "POLEAS",
    "MANIFOLD": "MANIFOLD",
    "TURBOCARGADOR": "TURBOCARGADOR",
    "INYECTOR": "INYECTOR",
    "INYECTORES": "INYECTORES",
    "CULATA": "CULATA",
    "CULATAS": "CULATAS",
    "CAMISA": "CAMISA",
    "CAMISAS": "CAMISAS",
    "PISTON": "PISTÓN",
    "PISTONES": "PISTONES",
    "CIGUEÑAL": "CIGÜEÑAL",
    "ARBOL": "ÁRBOL",
    "LEVAS": "LEVAS",
    "VALVULA": "VÁLVULA",
    "VALVULAS": "VÁLVULAS",
    "TAPA": "TAPA",
    "TAPAS": "TAPAS",
    "MOTOBOMBA": "MOTOBOMBA",
    "MOTOBOMBAS": "MOTOBOMBAS",
    "ELECTROBOMBA": "ELECTROBOMBA",
    "HIDRAULICA": "HIDRÁULICA",
    "HIDRAULICO": "HIDRÁULICO",
    "NEUMATICA": "NEUMÁTICA",
    "NEUMATICO": "NEUMÁTICO",
    
    // ⚡ ELÉCTRICO Y POTENCIA
    "ELEC": "ELÉCTRICO",
    "ELECTRICO": "ELÉCTRICO",
    "ELECTRICA": "ELÉCTRICA",
    "ELECTRICIDAD": "ELECTRICIDAD",
    "ELECTRONICO": "ELECTRÓNICO",
    "ELECTRONICA": "ELECTRÓNICA",
    "TABLERO": "TABLERO",
    "TABLEROS": "TABLEROS",
    "BREAKER": "BREAKER",
    "BREAKERS": "BREAKERS",
    "INTERRUPTOR": "INTERRUPTOR",
    "CONTACTOR": "CONTACTOR",
    "CONTACTORES": "CONTACTORES",
    "RELE": "RELÉ",
    "RELES": "RELÉS",
    "FUSIBLE": "FUSIBLE",
    "FUSIBLES": "FUSIBLES",
    "TRANSFORMADOR": "TRANSFORMADOR",
    "TRANSFORMADORES": "TRANSFORMADORES",
    "VARIADOR": "VARIADOR",
    "VARIADORES": "VARIADORES",
    "ARRANCADOR": "ARRANCADOR",
    "ARRANCADORES": "ARRANCADORES",
    "CABLEADO": "CABLEADO",
    "CABLE": "CABLE",
    "CABLES": "CABLES",
    "BORNERA": "BORNERA",
    "BORNERAS": "BORNERAS",
    "TERMINAL": "TERMINAL",
    "TERMINALES": "TERMINALES",
    "CONEXION": "CONEXIÓN",
    "CONEXIONES": "CONEXIONES",
    "TIERRA": "TIERRA",
    "POLO": "POLO",
    "POLOS": "POLOS",
    "FASE": "FASE",
    "FASES": "FASES",
    "MONOFASICO": "MONOFÁSICO",
    "TRIFASICO": "TRIFÁSICO",
    "TRIFASICA": "TRIFÁSICA",
    "MONOFASICA": "MONOFÁSICA",
    "TRANSFORMACION": "TRANSFORMACIÓN",
    "TRANSFORMADORR": "TRANSFORMADOR",
    "VARIADORR": "VARIADOR",
    "ILUMINACION": "ILUMINACIÓN",
    "LUMINARIA": "LUMINARIA",
    "LUMINARIAS": "LUMINARIAS",
    "LAMPARA": "LÁMPARA",
    "LAMPARAS": "LÁMPARAS",
    "FOCO": "FOCO",
    "FOCOS": "FOCOS",
    
    // 🛢️ PETRÓLEO, GAS Y POZOS
    "INYECCION": "INYECCIÓN",
    "INYECCIONES": "INYECCIONES",
    "INYECTORA": "INYECTORA",
    "PRODUCCION": "PRODUCCIÓN",
    "PRODUCCIONES": "PRODUCCIONES",
    "EXTRACCION": "EXTRACCIÓN",
    "REFINACION": "REFINACIÓN",
    "PERFORACION": "PERFORACIÓN",
    "PERFORADORA": "PERFORADORA",
    "CABEZA": "CABEZA",
    "CABEZAL": "CABEZAL",
    "POZO": "POZO",
    "POZOS": "POZOS",
    "YACIMIENTO": "YACIMIENTO",
    "YACIMIENTOS": "YACIMIENTOS",
    "CRUDO": "CRUDO",
    "GASODUCTO": "GASODUCTO",
    "OLEODUCTO": "OLEODUCTO",
    "POLIDUCTO": "POLIDUCTO",
    "DUCTO": "DUCTO",
    "DUCTOS": "DUCTOS",
    "LINEA": "LÍNEA",
    "LINEAS": "LÍNEAS",
    "TUBERIA": "TUBERÍA",
    "TUBERIAS": "TUBERÍAS",
    "TUBO": "TUBO",
    "TUBOS": "TUBOS",
    "FLANGE": "FLANGE",
    "FLANGES": "FLANGES",
    "BRIDA": "BRIDA",
    "BRIDAS": "BRIDAS",
    "CODO": "CODO",
    "CODOS": "CODOS",
    "REDUCCION": "REDUCCIÓN",
    "REDUCCIONES": "REDUCCIONES",
    "NIPLE": "NIPLE",
    "NIPLES": "NIPLES",
    "UNION": "UNIÓN",
    "UNIONES": "UNIONES",
    "SEPARADOR": "SEPARADOR",
    "SEPARADORES": "SEPARADORES",
    "TANQUE": "TANQUE",
    "TANQUES": "TANQUES",
    "TANQUILLA": "TANQUILLA",
    "DEPOSITO": "DEPÓSITO",
    "DEPOSITOS": "DEPÓSITOS",
    "GUNBARREL": "GUNBARREL",
    "HEADER": "HEADER",
    "MULTIPLE": "MÚLTIPLE",
    "MULTIPLES": "MÚLTIPLES",
    "ESTRANGULADOR": "ESTRANGULADOR",
    "MACAROLLA": "MACAROLLA",
    "CABILLA": "CABILLA",
    "CABILLAS": "CABILLAS",
    "VARILLA": "VARILLA",
    "VARILLAS": "VARILLAS",
    "BALANCIN": "BALANCÍN",
    "BALANCINES": "BALANCINES",
    "UNIDAD": "UNIDAD",
    "BOMBEO": "BOMBEO",
    "MECANICO": "MECÁNICO",
    "MECANICA": "MECÁNICA",
    "MECANICOS": "MECÁNICOS",
    "MECANICAS": "MECÁNICAS",
    "PISTONEO": "PISTONEO",
    "SWAB": "SWAB",
    "SWABEO": "SWABEO",
    "SURGENCIA": "SURGENCIA",
    "ARTIFICIAL": "ARTIFICIAL",
    "LEVANTAMIENTO": "LEVANTAMIENTO",
    
    // 💧 FLUIDOS Y PRESIÓN
    "PRESION": "PRESIÓN",
    "PRESIONES": "PRESIONES",
    "PRESURIZAR": "PRESURIZAR",
    "DESPRESURIZAR": "DESPRESURIZAR",
    "DESPRESURIZACION": "DESPRESURIZACIÓN",
    "TEMPERATURA": "TEMPERATURA",
    "TEMPERATURAS": "TEMPERATURAS",
    "VISCOSIDAD": "VISCOSIDAD",
    "DENSIDAD": "DENSIDAD",
    "GRAVEDAD": "GRAVEDAD",
    "CAUDAL": "CAUDAL",
    "CAUDALES": "CAUDALES",
    "FLUJO": "FLUJO",
    "FLUJOS": "FLUJOS",
    "FUGA": "FUGA",
    "FUGAS": "FUGAS",
    "GOTEO": "GOTEO",
    "DERRAME": "DERRAME",
    "DERRAMES": "DERRAMES",
    "MANOMETRO": "MANÓMETRO",
    "MANOMETROS": "MANÓMETROS",
    "TERMOMETRO": "TERMÓMETRO",
    "TERMOMETROS": "TERMÓMETROS",
    "CAUDALIMETRO": "CAUDALÍMETRO",
    "FLUJOMETRO": "FLUJÓMETRO",
    "PRESOSTATO": "PRESOSTATO",
    "TERMOSTATO": "TERMOSTATO",
    "TRANSMISOR": "TRANSMISOR",
    "TRANSMISORES": "TRANSMISORES",
    "SENSOR": "SENSOR",
    "SENSORES": "SENSORES",
    "INDICADOR": "INDICADOR",
    "INDICADORES": "INDICADORES",
    "ROTAMETRO": "ROTÁMETRO",
    "ROTAMETROS": "ROTÁMETROS",
    
    // 📏 MEDICIÓN E INSTRUMENTACIÓN
    "MEDICION": "MEDICIÓN",
    "MEDICIONES": "MEDICIONES",
    "MEDIDOR": "MEDIDOR",
    "MEDIDORES": "MEDIDORES",
    "CALIBRACION": "CALIBRACIÓN",
    "CALIBRACIONES": "CALIBRACIONES",
    "PATRON": "PATRÓN",
    "PATRONES": "PATRONES",
    "INSTRUMENTO": "INSTRUMENTO",
    "INSTRUMENTOS": "INSTRUMENTOS",
    "INSTRUMENTACION": "INSTRUMENTACIÓN",
    "VERIFICACION": "VERIFICACIÓN",
    "VERIFICACIONES": "VERIFICACIONES",
    "AJUSTE": "AJUSTE",
    "AJUSTES": "AJUSTES",
    "TOLERANCIA": "TOLERANCIA",
    "TOLERANCIAS": "TOLERANCIAS",
    "PRECISION": "PRECISIÓN",
    "EXACTITUD": "EXACTITUD",
    "RANGO": "RANGO",
    "RANGOS": "RANGOS",
    "ESCALA": "ESCALA",
    "ESCALAS": "ESCALAS",
    "LECTURA": "LECTURA",
    "LECTURAS": "LECTURAS",
    "REGISTRO": "REGISTRO",
    "REGISTROS": "REGISTROS",
    "ANALOGO": "ANÁLOGO",
    "ANALOGICA": "ANALÓGICA",
    "ANALOGICO": "ANALÓGICO",
    "DIGITAL": "DIGITAL",
    "DIGITALES": "DIGITALES",
    
    // 🏗️ ESTRUCTURAS Y TALLER
    "ESTRUCTURA": "ESTRUCTURA",
    "ESTRUCTURAS": "ESTRUCTURAS",
    "SOPORTE": "SOPORTE",
    "SOPORTES": "SOPORTES",
    "BASE": "BASE",
    "BASES": "BASES",
    "PLACA": "PLACA",
    "PLACAS": "PLACAS",
    "PERFIL": "PERFIL",
    "PERFILES": "PERFILES",
    "VIGA": "VIGA",
    "VIGAS": "VIGAS",
    "COLUMNA": "COLUMNA",
    "COLUMNAS": "COLUMNAS",
    "TRAVIESA": "TRAVIESA",
    "TRAVIESAS": "TRAVIESAS",
    "SOLDADURA": "SOLDADURA",
    "SOLDADURAS": "SOLDADURAS",
    "SOLDAR": "SOLDAR",
    "SUELDA": "SUELDA",
    "ELECTRODO": "ELECTRODO",
    "ELECTRODOS": "ELECTRODOS",
    "ESMERILAR": "ESMERILAR",
    "ESMERILADO": "ESMERILADO",
    "CORTE": "CORTE",
    "CORTES": "CORTES",
    "TALADRO": "TALADRO",
    "TALADROS": "TALADROS",
    "BROCA": "BROCA",
    "BROCAS": "BROCAS",
    "LLAVE": "LLAVE",
    "LLAVES": "LLAVES",
    "DADO": "DADO",
    "DADOS": "DADOS",
    "HERRAMIENTA": "HERRAMIENTA",
    "HERRAMIENTAS": "HERRAMIENTAS",
    "EQUIPO": "EQUIPO",
    "EQUIPOS": "EQUIPOS",
    "MAQUINA": "MÁQUINA",
    "MAQUINAS": "MÁQUINAS",
    
    // 🏢 ÁREAS Y UBICACIONES
    "TALLER": "TALLER",
    "TALLERES": "TALLERES",
    "CAMPAMENTO": "CAMPAMENTO",
    "CAMPAMENTOS": "CAMPAMENTOS",
    "OFICINA": "OFICINA",
    "OFICINAS": "OFICINAS",
    "BODEGA": "BODEGA",
    "BODEGAS": "BODEGAS",
    "ALMACEN": "ALMACÉN",
    "ALMACENES": "ALMACENES",
    "PATIO": "PATIO",
    "PATIOS": "PATIOS",
    "FACILIDAD": "FACILIDAD",
    "FACILIDADES": "FACILIDADES",
    "ESTACION": "ESTACIÓN",
    "ESTACIONES": "ESTACIONES",
    "LOCACION": "LOCACIÓN",
    "LOCACIONES": "LOCACIONES",
    "AREA": "ÁREA",
    "AREAS": "ÁREAS",
    "ZONA": "ZONA",
    "ZONAS": "ZONAS",
    "SECTOR": "SECTOR",
    "SECTORES": "SECTORES",
    
    // 🌿 MEDIO AMBIENTE Y SEGURIDAD (HSEQ)
    "AMBIENTAL": "AMBIENTAL",
    "AMBIENTALES": "AMBIENTALES",
    "CONTAMINACION": "CONTAMINACIÓN",
    "CONTAMINANTE": "CONTAMINANTE",
    "RESIDUO": "RESIDUO",
    "RESIDUOS": "RESIDUOS",
    "VERTIMIENTO": "VERTIMIENTO",
    "VERTIMIENTOS": "VERTIMIENTOS",
    "SEGURIDAD": "SEGURIDAD",
    "INDUSTRIAL": "INDUSTRIAL",
    "INDUSTRIALES": "INDUSTRIALES",
    "SALUD": "SALUD",
    "OCUPACIONAL": "OCUPACIONAL",
    "RIESGO": "RIESGO",
    "RIESGOS": "RIESGOS",
    "PELIGRO": "PELIGRO",
    "PELIGROS": "PELIGROS",
    "ACCIDENTE": "ACCIDENTE",
    "ACCIDENTES": "ACCIDENTES",
    "INCIDENTE": "INCIDENTE",
    "INCIDENTES": "INCIDENTES",
    "EMERGENCIA": "EMERGENCIA",
    "EMERGENCIAS": "EMERGENCIAS",
    "EVACUACION": "EVACUACIÓN",
    "PROTECCION": "PROTECCIÓN",
    "PROTECCIONES": "PROTECCIONES",
    "ELEMENTO": "ELEMENTO",
    "ELEMENTOS": "ELEMENTOS",
    "CASCO": "CASCO",
    "GUANTES": "GUANTES",
    "BOTAS": "BOTAS",
    "GAFAS": "GAFAS",
    "ARNES": "ARNÉS",
    "ARNESES": "ARNESES",
    "TAPABOCAS": "TAPABOCAS",
    
    // 🔥 TRABAJOS EN CALIENTE Y ESPECIALES
    "CALIENTE": "CALIENTE",
    "CALIENTES": "CALIENTES",
    "PERMISO": "PERMISO",
    "PERMISOS": "PERMISOS",
    "FRIO": "FRÍO",
    "FRIOS": "FRÍOS",
    "ALTURA": "ALTURA",
    "ALTURAS": "ALTURAS",
    "ESPACIO": "ESPACIO",
    "CONFINADO": "CONFINADO",
    "CONFINADOS": "CONFINADOS",
    "EXCAVACION": "EXCAVACIÓN",
    "EXCAVACIONES": "EXCAVACIONES",
    "IZAJE": "IZAJE",
    "IZAJES": "IZAJES",
    "ANDAMIO": "ANDAMIO",
    "ANDAMIOS": "ANDAMIOS",
    "ESCALERA": "ESCALERA",
    "ESCALERAS": "ESCALERAS",
    
    // 🧹 LIMPIEZA Y ASEO
    "LIMPIEZA": "LIMPIEZA",
    "LIMPIEZAS": "LIMPIEZAS",
    "ASEO": "ASEO",
    "BARRIDO": "BARRIDO",
    "TRAPERO": "TRAPERO",
    "DESINFECCION": "DESINFECCIÓN",
    "LAVADO": "LAVADO",
    "ENJUAGUE": "ENJUAGUE",
    "SECADO": "SECADO",
    "HIDROLAVADO": "HIDROLAVADO",
    "VAPOR": "VAPOR",
    "QUIMICO": "QUÍMICO",
    "QUIMICA": "QUÍMICA",
    "QUIMICOS": "QUÍMICOS",
    "SOLVENTE": "SOLVENTE",
    "SOLVENTES": "SOLVENTES",
    "DESENGRASANTE": "DESENGRASANTE",
    "DETERGENTE": "DETERGENTE",
    
    // 🧪 CORRECCIONES ORTOGRÁFICAS GENERALES
    "ATRAVEZ": "A TRAVÉS",
    "ATRAVES": "A TRAVÉS",
    "ASERCAR": "ACERCAR",
    "ASER": "HACER",
    "ASIA": "HACIA",
    "HAIGA": "HAYA",
    "HUBIERON": "HUBO",
    "BAYA": "VAYA",
    "VALLA": "VAYA",
    "AYA": "HAYA",
    "LLEGO": "LLEGÓ",
    "PASO": "PASÓ",
    "REVISO": "REVISÓ",
    "CAMINO": "CAMINÓ",
    "CORRIO": "CORRIÓ",
    "SUPO": "SUPO",
    "HIZO": "HIZO",
    "DIJO": "DIJO",
    "VINO": "VINO",
    "PUSO": "PUSO",
    "QUISO": "QUISO",
    "TRAJO": "TRAJO",
    "PRODUJO": "PRODUJO",
    "CONDUJO": "CONDUJO",
    
    // 🔤 PALABRAS SIN TILDE → CON TILDE
    "ACCION": "ACCIÓN",
    "ACCIONES": "ACCIONES",
    "ADMINISTRACION": "ADMINISTRACIÓN",
    "APLICACION": "APLICACIÓN",
    "APLICACIONES": "APLICACIONES",
    "ATENCION": "ATENCIÓN",
    "CAPACITACION": "CAPACITACIÓN",
    "CERTIFICACION": "CERTIFICACIÓN",
    "CLASIFICACION": "CLASIFICACIÓN",
    "COMUNICACION": "COMUNICACIÓN",
    "CONDICION": "CONDICIÓN",
    "CONDICIONES": "CONDICIONES",
    "CONFIGURACION": "CONFIGURACIÓN",
    "CONSTRUCCION": "CONSTRUCCIÓN",
    "COORDINACION": "COORDINACIÓN",
    "CORRECION": "CORRECCIÓN",
    "CORRECIONES": "CORRECCIONES",
    "DECISION": "DECISIÓN",
    "DECISIONES": "DECISIONES",
    "DEFINICION": "DEFINICIÓN",
    "DIRECCION": "DIRECCIÓN",
    "DURACION": "DURACIÓN",
    "EDUCACION": "EDUCACIÓN",
    "EJECUCION": "EJECUCIÓN",
    "ELABORACION": "ELABORACIÓN",
    "ELIMINACION": "ELIMINACIÓN",
    "EMISION": "EMISIÓN",
    "EVALUACION": "EVALUACIÓN",
    "FABRICACION": "FABRICACIÓN",
    "FINALIZACION": "FINALIZACIÓN",
    "FORMACION": "FORMACIÓN",
    "FUMIGACION": "FUMIGACIÓN",
    "GESTION": "GESTIÓN",
    "IMPRESION": "IMPRESIÓN",
    "INFORMACION": "INFORMACIÓN",
    "INSCRIPCION": "INSCRIPCIÓN",
    "INSTALACION": "INSTALACIÓN",
    "INVESTIGACION": "INVESTIGACIÓN",
    "JUSTIFICACION": "JUSTIFICACIÓN",
    "MODIFICACION": "MODIFICACIÓN",
    "MOTIVACION": "MOTIVACIÓN",
    "NOTIFICACION": "NOTIFICACIÓN",
    "OBSERVACION": "OBSERVACIÓN",
    "OBSERVACIONES": "OBSERVACIONES",
    "OPERACION": "OPERACIÓN",
    "OPERACIONES": "OPERACIONES",
    "ORGANIZACION": "ORGANIZACIÓN",
    "PARTICIPACION": "PARTICIPACIÓN",
    "PLANIFICACION": "PLANIFICACIÓN",
    "PREPARACION": "PREPARACIÓN",
    "PREVENCION": "PREVENCIÓN",
    "PROGRAMACION": "PROGRAMACIÓN",
    "PRESENTACION": "PRESENTACIÓN",
    "RECOMENDACION": "RECOMENDACIÓN",
    "RECOMENDACIONES": "RECOMENDACIONES",
    "RECUPERACION": "RECUPERACIÓN",
    "REHABILITACION": "REHABILITACIÓN",
    "RELACION": "RELACIÓN",
    "REPARACION": "REPARACIÓN",
    "REPARACIONES": "REPARACIONES",
    "REVISION": "REVISIÓN",
    "REVISIONES": "REVISIONES",
    "SEPARACION": "SEPARACIÓN",
    "SOLUCION": "SOLUCIÓN",
    "SOLUCIONES": "SOLUCIONES",
    "SUPERVISION": "SUPERVISIÓN",
    "TRANSFERENCIA": "TRANSFERENCIA",
    "VERIFICACION": "VERIFICACIÓN",
    "VERIFICACIONES": "VERIFICACIONES",
    "VIBRACION": "VIBRACIÓN",
    "VIBRACIONES": "VIBRACIONES"
};

// ==========================================
// ✅ FUNCIÓN: AUTOCORREGIR TEXTO
// Aplica las reglas del diccionario.
// También limpia espacios dobles.
// ==========================================
function autocorregirTexto(texto) {
    if (!texto) return '';
    
    let resultado = String(texto).trim();
    
    // 1. Limpiar espacios dobles o múltiples
    resultado = resultado.replace(/\s+/g, ' ');
    
    // 2. Aplicar el diccionario palabra por palabra
    const lineas = resultado.split('\n');
    const lineasCorregidas = lineas.map(linea => {
        return linea.split(/\s+/).map(palabra => {
            const palabraMayus = palabra.toUpperCase().trim();
            if (DICCIONARIO_CORRECCION[palabraMayus]) {
                return DICCIONARIO_CORRECCION[palabraMayus];
            }
            return palabra;
        }).join(' ');
    });
    
    return lineasCorregidas.join('\n').trim();
}

// ESTADO GLOBAL
let allRecords = [];
let sortState = { field: '', direction: 'asc' };
let isAdmin = false;

// ==========================================
// ✅ FECHA EN ZONA HORARIA COLOMBIA (UTC-5)
// ==========================================
function getFechaColombia() {
    const fecha = new Date();
    const fechaColombia = new Date(fecha.getTime() - (5 * 60 * 60 * 1000));
    return fechaColombia.toISOString().split('T')[0];
}

// ==========================================
// ✅ CONVERTIR FECHA DE GOOGLE SHEETS A TEXTO
// ==========================================
function formatearFecha(fechaRec) {
    if (!fechaRec) return '';
    if (typeof fechaRec === 'string') {
        return fechaRec.split('T')[0];
    }
    try {
        const d = new Date(fechaRec);
        if (isNaN(d.getTime())) return String(fechaRec);
        const colombiaTime = new Date(d.getTime() - (5 * 60 * 60 * 1000));
        return colombiaTime.toISOString().split('T')[0];
    } catch (e) {
        return String(fechaRec);
    }
}

// ==========================================
// ✅ CONVERTIR AVANCE PARA MOSTRAR
// ==========================================
function convertirAvanceParaMostrar(avanceRaw) {
    if (avanceRaw === null || avanceRaw === undefined || avanceRaw === '') {
        return { texto: '', numero: 0 };
    }
    
    let valorStr = String(avanceRaw).replace('%', '').trim();
    let valor = parseFloat(valorStr);
    
    if (isNaN(valor)) {
        return { texto: String(avanceRaw), numero: 0 };
    }
    
    let texto = valor % 1 === 0 ? valor.toString() : valor.toFixed(1);
    return { texto: texto + '%', numero: valor };
}

// ==========================================
// CONVERTIR A MAYÚSCULAS
// ==========================================
function toUpperCaseInput(input) {
    input.value = input.value.toUpperCase();
}

// ==========================================
// INICIALIZACIÓN
// ==========================================
window.onload = function() {
    document.getElementById('role-badge').textContent = '👤 Usuario Normal';
    document.getElementById('role-badge').style.background = '#64748b';
    
    const textInputs = ['f-descripcion', 'f-tag', 'f-avance', 'f-ot', 'f-area'];
    textInputs.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('input', function() {
                toUpperCaseInput(this);
            });
        }
    });
    
    renderTable([]);
    
    if (localStorage.getItem('isAdminLoggedIn') === 'true') {
        adminLoginSuccess();
    }
    
    if (!sessionStorage.getItem('welcomeShown')) {
        setTimeout(() => {
            const welcomeModal = document.getElementById('welcome-modal');
            if (welcomeModal) {
                welcomeModal.style.display = 'flex';
                sessionStorage.setItem('welcomeShown', 'true');
            }
        }, 500);
    }
    
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
};

// ==========================================
// ✅ CERRAR MODAL DE BIENVENIDA
// ==========================================
function closeWelcomeModal() {
    document.getElementById('welcome-modal').style.display = 'none';
}

// ==========================================
// ✅ MOSTRAR MODAL DE AGRADECIMIENTO (con mensaje dinámico)
// ==========================================
function showSuccessModal(esDiaSiguiente) {
    const modal = document.getElementById('success-modal');
    if (!modal) return;
    
    const titulo = document.getElementById('success-modal-title');
    const mensaje = document.getElementById('success-modal-message');
    const badge = document.getElementById('success-modal-badge');
    const hint = document.getElementById('success-modal-hint');
    
    if (esDiaSiguiente) {
        const ahoraUTC = new Date();
        const ahoraColombia = new Date(ahoraUTC.getTime() - (5 * 60 * 60 * 1000));
        const mananaColombia = new Date(ahoraColombia.getTime() + (24 * 60 * 60 * 1000));
        const fechaMananaTexto = mananaColombia.toLocaleDateString('es-CO', { 
            day: '2-digit', 
            month: 'long', 
            year: 'numeric' 
        });
        
        titulo.textContent = '¡Actividad programada para mañana!';
        mensaje.textContent = 'Tu actividad ha sido registrada exitosamente. Ya está lista para ejecutarse el día de mañana.';
        badge.innerHTML = '📅 Programación registrada para el ' + fechaMananaTexto;
        hint.innerHTML = '💡 Mañana podrás filtrarla por <strong>📅 Hoy</strong> para completar los campos restantes.';
    } else {
        titulo.textContent = '¡Gracias por tu registro!';
        mensaje.textContent = 'Tu actividad ha sido guardada correctamente. Tu aporte ayuda a mantener el control de todas las actividades.';
        badge.innerHTML = '✅ Actividad registrada exitosamente';
        hint.innerHTML = '💡 Recuerda: puedes verificarla haciendo clic en el botón <strong>📅 Hoy</strong>';
    }
    
    modal.style.display = 'flex';
    
    setTimeout(() => {
        if (modal.style.display === 'flex') {
            modal.style.display = 'none';
        }
    }, 4500);
}

function closeSuccessModal() {
    document.getElementById('success-modal').style.display = 'none';
}

// ==========================================
// AYUDA EN CAMPOS
// ==========================================
function showFieldHelp(field) {
    const helpTexts = {
        'descripcion': 'Escribe una descripción clara y concisa de la actividad. El sistema corregirá automáticamente abreviaciones y errores comunes.',
        'tag': 'Escribe el TAG identificador del equipo. Ej: TAG-001.',
        'prog': 'Selecciona P si es Programada, o NP si es No Programada.',
        'estacion': 'Selecciona la estación donde se realizará la actividad.',
        'avance': 'Escribe el porcentaje (0-100). Se agrega el símbolo %.',
        'ot': 'Escribe la Orden de Trabajo. Puedes usar PTE si está pendiente.',
        'ejecutante': 'Escribe los nombres, uno por línea.',
        'subarea': 'Selecciona la subárea a la que pertenece.',
        'fecha': 'La fecha se llena automáticamente al crear. Al editar, se puede cambiar.',
        'area': 'Escribe el área o sistema general.'
    };
    document.getElementById('field-help-text').innerText = helpTexts[field] || 'Este campo es obligatorio.';
    document.getElementById('field-help-modal').style.display = 'flex';
}

function closeFieldHelp() {
    document.getElementById('field-help-modal').style.display = 'none';
}

// ==========================================
// ADMIN LOGIN
// ==========================================
function showAdminLogin() {
    document.getElementById('admin-login-modal').style.display = 'flex';
}

function closeAdminLogin() {
    document.getElementById('admin-login-modal').style.display = 'none';
}

function adminLogin() {
    const user = document.getElementById('admin-user').value;
    const pass = document.getElementById('admin-pass').value;
    
    if (user === 'Gestion' && pass === '2026') {
        localStorage.setItem('isAdminLoggedIn', 'true');
        closeAdminLogin();
        adminLoginSuccess();
    } else {
        document.getElementById('admin-login-error').style.display = 'block';
    }
}

function adminLoginSuccess() {
    isAdmin = true;
    document.getElementById('role-badge').textContent = '🔒 Administrador';
    document.getElementById('role-badge').style.background = '#2563eb';
    document.getElementById('btn-admin-login').style.display = 'none';
    document.getElementById('btn-logout').style.display = 'block';
    
    document.getElementById('user-toolbar').style.display = 'none';
    document.getElementById('admin-toolbar').style.display = 'flex';
    
    document.getElementById('search-descripcion').value = '';
    document.getElementById('filter-subarea').value = '';
    document.getElementById('filter-estacion').value = '';
    document.getElementById('filter-prog').value = '';
    document.getElementById('filter-date-from').value = '';
    document.getElementById('filter-date-to').value = '';
    
    loadData();
}

function logoutAdmin() {
    localStorage.removeItem('isAdminLoggedIn');
    isAdmin = false;
    
    document.getElementById('role-badge').textContent = '👤 Usuario Normal';
    document.getElementById('role-badge').style.background = '#64748b';
    document.getElementById('btn-admin-login').style.display = 'block';
    document.getElementById('btn-logout').style.display = 'none';
    
    document.getElementById('admin-toolbar').style.display = 'none';
    document.getElementById('user-toolbar').style.display = 'flex';
    
    document.getElementById('search-descripcion').value = '';
    document.getElementById('filter-subarea').value = '';
    document.getElementById('filter-estacion').value = '';
    document.getElementById('filter-prog').value = '';
    document.getElementById('filter-date-from').value = '';
    document.getElementById('filter-date-to').value = '';
    
    document.getElementById('user-filter-subarea').value = '';
    document.getElementById('user-date-from').value = '';
    document.getElementById('user-date-to').value = '';
    
    renderTable([]);
}

function toggleMobileFilters(role) {
    const content = document.getElementById(role === 'user' ? 'user-filters-content' : 'admin-filters-content');
    content.classList.toggle('hidden');
}

function showHelpModal() {
    document.getElementById('help-modal').style.display = 'flex';
}

function closeHelpModal() {
    document.getElementById('help-modal').style.display = 'none';
}

function clearUserFilters() {
    document.getElementById('user-filter-subarea').value = '';
    document.getElementById('user-date-from').value = '';
    document.getElementById('user-date-to').value = '';
    
    document.getElementById('activity-counter').style.display = 'none';
    document.getElementById('activity-counter').innerText = '0 actividades encontradas';
    renderTable([]);
}

function setTodayFilter() {
    const hoy = getFechaColombia();
    document.getElementById('user-date-from').value = hoy;
    document.getElementById('user-date-to').value = hoy;
    loadData();
}

function setTodayFilterAdmin() {
    const hoy = getFechaColombia();
    document.getElementById('filter-date-from').value = hoy;
    document.getElementById('filter-date-to').value = hoy;
    loadData();
}

// ==========================================
// ✅ LEER DATOS DESDE GOOGLE SHEETS (JSONP)
// ==========================================
function loadData() {
    const callbackName = 'jsonp_' + Date.now();
    let datosRecibidos = false;
    
    window[callbackName] = function(data) {
        datosRecibidos = true;
        
        try {
            if (!data.ok) {
                alert('Error al leer datos: ' + (data.error || 'Desconocido'));
                return;
            }
            
            allRecords = data.records;
            let filtered = [...allRecords];
            
            if (isAdmin) {
                const subareaFilter = document.getElementById('filter-subarea').value;
                const searchTerm = document.getElementById('search-descripcion').value;
                const estacionFilter = document.getElementById('filter-estacion').value;
                const progFilter = document.getElementById('filter-prog').value;
                const dateFrom = document.getElementById('filter-date-from').value;
                const dateTo = document.getElementById('filter-date-to').value;
                
                if (subareaFilter) filtered = filtered.filter(r => String(r['SUBÁREA'] || '').toUpperCase() === subareaFilter);
                if (searchTerm) filtered = filtered.filter(r => String(r['Descripción'] || '').toUpperCase().includes(searchTerm.toUpperCase()));
                if (estacionFilter) filtered = filtered.filter(r => String(r['ESTACION'] || '').toUpperCase() === estacionFilter);
                if (progFilter) filtered = filtered.filter(r => String(r['PROG/NÓ PROG'] || '').toUpperCase() === progFilter);
                if (dateFrom) filtered = filtered.filter(r => formatearFecha(r['FECHA']) >= dateFrom);
                if (dateTo) filtered = filtered.filter(r => formatearFecha(r['FECHA']) <= dateTo);
            } else {
                const userSubareaFilter = document.getElementById('user-filter-subarea').value;
                const userDateFrom = document.getElementById('user-date-from').value;
                const userDateTo = document.getElementById('user-date-to').value;
                
                if (userSubareaFilter) filtered = filtered.filter(r => String(r['SUBÁREA'] || '').toUpperCase() === userSubareaFilter);
                if (userDateFrom) filtered = filtered.filter(r => formatearFecha(r['FECHA']) >= userDateFrom);
                if (userDateTo) filtered = filtered.filter(r => formatearFecha(r['FECHA']) <= userDateTo);
            }
            
            const subareasOrder = [
                "MECANICA", "INSTRUMENTACIÓN", "ELÉCTRICO", "VALVULAS PSV Y PVV",
                "A&C", "CBM", "VSD", "FACILIDADES", "OBREROS DE PATIO",
                "CAMPAMENTERO", "HSEQ"
            ];
            
            filtered.sort((a, b) => {
                const subA = String(a['SUBÁREA'] || '').toUpperCase().trim();
                const subB = String(b['SUBÁREA'] || '').toUpperCase().trim();
                const indexA = subareasOrder.indexOf(subA);
                const indexB = subareasOrder.indexOf(subB);
                if (indexA === -1) return 1;
                if (indexB === -1) return -1;
                return indexA - indexB;
            });
            
            if (!isAdmin) {
                document.getElementById('activity-counter').style.display = 'block';
                document.getElementById('activity-counter').innerText = `${filtered.length} actividades encontradas`;
            }
            
            if (sortState.field) {
                sortRecords(filtered);
            } else {
                renderTable(filtered);
            }
        } catch (error) {
            console.error('Error procesando datos:', error);
        } finally {
            delete window[callbackName];
        }
    };
    
    const script = document.createElement('script');
    script.id = callbackName;
    script.src = SCRIPT_URL + '?callback=' + callbackName;
    
    script.onerror = function() {
        if (datosRecibidos) return;
        console.error('Error cargando el script JSONP');
        alert('Error al conectar con Google Sheets.');
        delete window[callbackName];
        if (script.parentNode) script.remove();
    };
    
    document.body.appendChild(script);
    
    setTimeout(() => {
        if (script.parentNode) script.remove();
        delete window[callbackName];
    }, 30000);
}

// ==========================================
// RENDER TABLA
// ==========================================
function renderTable(records) {
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = '';
    
    records.forEach(rec => {
        const avanceInfo = convertirAvanceParaMostrar(rec['AVANCE']);
        const avance = avanceInfo.texto;
        const avanceNum = avanceInfo.numero;
        
        let rowClass = '';
        if (avanceNum === 100) {
            rowClass = 'avance-100';
        } else if (avanceNum >= 50 && avanceNum < 100) {
            rowClass = 'avance-50';
        } else if (avanceNum === 0 || avance === '' || isNaN(avanceNum)) {
            rowClass = 'avance-0';
        }
        
        const fechaTexto = formatearFecha(rec['FECHA']);
        const idSeguro = String(rec.id).replace(/'/g, "\\'");
        
        const row = `
        <tr class="${rowClass}">
            <td>${String(rec['Descripción'] || '').toUpperCase()}</td>
            <td>${String(rec['TAG'] || '').toUpperCase()}</td>
            <td>${String(rec['PROG/NÓ PROG'] || '').toUpperCase()}</td>
            <td>${String(rec['ESTACION'] || '').toUpperCase()}</td>
            <td>${avance}</td>
            <td>${String(rec['OT'] || '').toUpperCase()}</td>
            <td>${String(rec['EJECUTANTE'] || '').toUpperCase()}</td>
            <td>${String(rec['SUBÁREA'] || '').toUpperCase()}</td>
            <td>${fechaTexto}</td>
            <td>${String(rec['AREA'] || '').toUpperCase()}</td>
            <td class="actions">
                <button class="btn-edit" onclick="editRecord('${idSeguro}')">Editar</button>
            </td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

function sortTable(field) {
    if (sortState.field === field) {
        sortState.direction = sortState.direction === 'asc' ? 'desc' : 'asc';
    } else {
        sortState.field = field;
        sortState.direction = 'asc';
    }
    loadData();
    
    document.querySelectorAll('th').forEach(th => th.innerHTML = th.innerHTML.replace(' ⬆', ' ⬍').replace(' ⬇', ' ⬍'));
    const clickedTh = [...document.querySelectorAll('th')].find(th => th.innerText.includes(field));
    if (clickedTh) clickedTh.innerHTML = clickedTh.innerHTML.replace(' ⬍', sortState.direction === 'asc' ? ' ⬆' : ' ⬇');
}

function sortRecords(records) {
    const sorted = [...records].sort((a, b) => {
        let valA = String(a[sortState.field] || '').toLowerCase();
        let valB = String(b[sortState.field] || '').toLowerCase();
        
        if (sortState.field === 'FECHA') {
            valA = new Date(valA).getTime();
            valB = new Date(valB).getTime();
        }

        if (valA < valB) return sortState.direction === 'asc' ? -1 : 1;
        if (valA > valB) return sortState.direction === 'asc' ? 1 : -1;
        return 0;
    });
    renderTable(sorted);
}

function clearFilters() {
    document.getElementById('search-descripcion').value = '';
    document.getElementById('filter-subarea').value = '';
    document.getElementById('filter-estacion').value = '';
    document.getElementById('filter-prog').value = '';
    document.getElementById('filter-date-from').value = '';
    document.getElementById('filter-date-to').value = '';
    loadData();
}

// ==========================================
// MODAL CREAR (fecha de hoy)
// ==========================================
function openModal() {
    document.getElementById('modal-title').innerText = 'Nueva Actividad';
    document.getElementById('record-id').value = '';
    document.getElementById('record-id').removeAttribute('data-dia-siguiente');
    
    document.getElementById('f-fecha').value = getFechaColombia();
    document.getElementById('f-fecha').readOnly = true;
    document.getElementById('f-fecha').style.backgroundColor = '#f1f5f9';
    document.getElementById('f-fecha').style.cursor = 'not-allowed';
    document.getElementById('f-fecha').style.fontWeight = 'normal';
    
    const textInputs = ['f-descripcion', 'f-tag', 'f-avance', 'f-ot', 'f-area'];
    textInputs.forEach(id => document.getElementById(id).value = '');
    
    document.getElementById('f-prog').value = '';
    document.getElementById('f-estacion').value = '';
    document.getElementById('f-subarea').value = '';
    document.getElementById('f-ejecutante').value = '';
    
    document.getElementById('modal').style.display = 'flex';
}

// ==========================================
// ✅ MODAL CREAR - DÍA SIGUIENTE (fecha de mañana)
// ==========================================
function openModalDiaSiguiente() {
    const ahoraUTC = new Date();
    const ahoraColombia = new Date(ahoraUTC.getTime() - (5 * 60 * 60 * 1000));
    const mananaColombia = new Date(ahoraColombia.getTime() + (24 * 60 * 60 * 1000));
    const fechaManana = mananaColombia.toISOString().split('T')[0];
    
    openModal();
    
    document.getElementById('f-fecha').value = fechaManana;
    document.getElementById('f-fecha').readOnly = true;
    document.getElementById('f-fecha').style.backgroundColor = '#fef3c7';
    document.getElementById('f-fecha').style.cursor = 'not-allowed';
    document.getElementById('f-fecha').style.fontWeight = 'bold';
    
    document.getElementById('modal-title').innerText = '📅 Nueva Actividad - Día Siguiente';
    document.getElementById('record-id').dataset.diaSiguiente = 'true';
}

// ==========================================
// MODAL EDITAR
// ==========================================
function editRecord(id) {
    const rec = allRecords.find(r => String(r.id) === String(id));
    if (!rec) {
        alert('No se encontró el registro');
        return;
    }
    
    document.getElementById('modal-title').innerText = 'Editar Actividad';
    document.getElementById('record-id').value = id;
    document.getElementById('record-id').removeAttribute('data-dia-siguiente');
    
    document.getElementById('f-descripcion').value = String(rec['Descripción'] || '').toUpperCase();
    document.getElementById('f-tag').value = String(rec['TAG'] || '').toUpperCase();
    document.getElementById('f-prog').value = String(rec['PROG/NÓ PROG'] || '').toUpperCase();
    document.getElementById('f-estacion').value = String(rec['ESTACION'] || '').toUpperCase();
    
    const avanceInfo = convertirAvanceParaMostrar(rec['AVANCE']);
    document.getElementById('f-avance').value = avanceInfo.texto.replace('%', '');
    
    document.getElementById('f-ot').value = String(rec['OT'] || '').toUpperCase();
    document.getElementById('f-ejecutante').value = String(rec['EJECUTANTE'] || '').toUpperCase();
    document.getElementById('f-subarea').value = String(rec['SUBÁREA'] || '').toUpperCase();
    
    document.getElementById('f-fecha').value = formatearFecha(rec['FECHA']) || getFechaColombia();
    document.getElementById('f-fecha').readOnly = false;
    document.getElementById('f-fecha').style.backgroundColor = '#ffffff';
    document.getElementById('f-fecha').style.cursor = 'pointer';
    document.getElementById('f-fecha').style.fontWeight = 'normal';
    
    document.getElementById('f-area').value = String(rec['AREA'] || '').toUpperCase();
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// ==========================================
// MENÚ OT
// ==========================================
function selectOT(valor) {
    document.getElementById('f-ot').value = valor;
    document.getElementById('ot-dropdown').style.display = 'none';
}

document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('ot-dropdown');
    const inputOT = document.getElementById('f-ot');
    const btnOT = document.getElementById('btn-ot-toggle');
    
    if (dropdown && inputOT && btnOT) {
        if (!dropdown.contains(event.target) && !inputOT.contains(event.target) && !btnOT.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    }
});

// ==========================================
// VALIDACIÓN
// ==========================================
function validateForm() {
    const descripcion = document.getElementById('f-descripcion').value.trim().toUpperCase();
    const prog = document.getElementById('f-prog').value;
    const estacion = document.getElementById('f-estacion').value;
    const subarea = document.getElementById('f-subarea').value;
    const fecha = document.getElementById('f-fecha').value;
    const ot = document.getElementById('f-ot').value.trim();
    const ejecutantesTexto = document.getElementById('f-ejecutante').value.trim();
    
    if (!descripcion || !prog || !estacion || !subarea || !fecha || !ot || !ejecutantesTexto) {
        alert('Por favor, completa los campos obligatorios.');
        return false;
    }
    return true;
}

// ==========================================
// ✅ GUARDAR EN GOOGLE SHEETS (con autocorrección)
// ==========================================
async function saveRecord() {
    if (!validateForm()) return;

    const btnGuardar = document.querySelector('#modal .btn-save');
    const textoOriginal = btnGuardar.innerHTML;
    btnGuardar.disabled = true;
    btnGuardar.innerHTML = '⏳ Guardando...';

    try {
        const id = document.getElementById('record-id').value;
        const esDiaSiguiente = document.getElementById('record-id').dataset.diaSiguiente === 'true';
        
        // ✅ Aplicar autocorrección a los campos de texto libre
        const descripcionCorregida = autocorregirTexto(document.getElementById('f-descripcion').value.toUpperCase());
        const areaCorregida = autocorregirTexto(document.getElementById('f-area').value.toUpperCase());
        
        const ejecutantesCorregidos = document.getElementById('f-ejecutante').value
            .split('\n')
            .map(nombre => autocorregirTexto(nombre.trim().toUpperCase()))
            .filter(nombre => nombre !== '')
            .join('\n');
        
        let avanceTexto = document.getElementById('f-avance').value.trim();
        let avance = '';
        if (avanceTexto !== '') {
            let avanceNum = parseFloat(avanceTexto.replace('%', ''));
            if (!isNaN(avanceNum)) {
                avance = avanceNum.toString();
            } else {
                avance = avanceTexto;
            }
        }
        
        const fields = {
            "Descripción": descripcionCorregida,
            "TAG": document.getElementById('f-tag').value.trim().toUpperCase(),
            "PROG/NÓ PROG": document.getElementById('f-prog').value,
            "ESTACION": document.getElementById('f-estacion').value,
            "AVANCE": avance,
            "OT": document.getElementById('f-ot').value.trim().toUpperCase(),
            "EJECUTANTE": ejecutantesCorregidos,
            "SUBÁREA": document.getElementById('f-subarea').value,
            "FECHA": document.getElementById('f-fecha').value,
            "AREA": areaCorregida
        };
        
        const payload = id 
            ? { accion: "actualizar", id: id, ...fields }
            : { accion: "crear", ...fields };

        console.log('=== ENVIANDO ===');
        console.log('ID:', id);
        console.log('Acción:', payload.accion);
        console.log('Día siguiente:', esDiaSiguiente);
        
        const descOriginal = document.getElementById('f-descripcion').value.toUpperCase().trim();
        if (descOriginal !== descripcionCorregida && descripcionCorregida !== '') {
            console.log('✨ Autocorrección aplicada:');
            console.log('   Antes:', descOriginal);
            console.log('   Después:', descripcionCorregida);
        }

        await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(payload)
        });
        
        console.log('✅ Petición enviada correctamente');
        
        closeModal();
        showSuccessModal(esDiaSiguiente);
        setTimeout(() => loadData(), 1000);
        
    } catch (error) {
        console.error('❌ Error:', error);
        alert('Error de conexión: ' + error.message);
    } finally {
        btnGuardar.disabled = false;
        btnGuardar.innerHTML = textoOriginal;
    }
}

// ==========================================
// ELIMINAR (conservado por si se necesita después)
// ==========================================
async function deleteRecord(id) {
    if (!confirm('¿Seguro que deseas eliminar esta actividad?')) return;
    
    try {
        await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({ accion: "eliminar", id: String(id) })
        });
        
        alert('✅ Actividad eliminada correctamente');
        setTimeout(() => loadData(), 1000);
        
    } catch (error) {
        console.error('❌ Error:', error);
        alert('Error de conexión: ' + error.message);
    }
}

// ==========================================
// EXPORTAR EXCEL
// ==========================================
function openExportModal() {
    document.getElementById('export-date-from').value = '';
    document.getElementById('export-date-to').value = '';
    document.getElementById('export-modal').style.display = 'flex';
}

function closeExportModal() {
    document.getElementById('export-modal').style.display = 'none';
}

function exportExcel() {
    const fromDate = document.getElementById('export-date-from').value;
    const toDate = document.getElementById('export-date-to').value;
    
    let filtered = [...allRecords];
    if (fromDate) filtered = filtered.filter(r => formatearFecha(r['FECHA']) >= fromDate);
    if (toDate) filtered = filtered.filter(r => formatearFecha(r['FECHA']) <= toDate);
    
    if (filtered.length === 0) {
        alert('No hay actividades en el rango seleccionado.');
        closeExportModal();
        return;
    }
    
    const subareasOrder = [
        "MECANICA", "INSTRUMENTACIÓN", "ELÉCTRICO", "VALVULAS PSV Y PVV",
        "A&C", "CBM", "VSD", "FACILIDADES", "OBREROS DE PATIO",
        "CAMPAMENTERO", "HSEQ"
    ];
    
    const groupedData = {};
    subareasOrder.forEach(area => groupedData[area] = []);
    
    filtered.forEach(rec => {
        const subarea = String(rec['SUBÁREA'] || '').toUpperCase().trim();
        if (groupedData[subarea]) groupedData[subarea].push(rec);
    });
    
    const rowsPerArea = 10;
    const exportDate = getFechaColombia();
    const headers = ["AREA", "AREA O SISTEMA", "DESCRIPCION DE ACTIVIDAD", "TAG", "PROG/NO PROG", "ESTACION", "AVANCE", "OT", "EJECUTANTE"];
    const aoaData = [["FECHA", exportDate], headers];
    
    subareasOrder.forEach(area => {
        const recordsOfArea = groupedData[area] || [];
        const totalRows = Math.max(rowsPerArea, recordsOfArea.length);
        
        for (let i = 0; i < totalRows; i++) {
            const rec = recordsOfArea[i];
            if (rec) {
                const avanceInfo = convertirAvanceParaMostrar(rec['AVANCE']);
                
                aoaData.push([
                    area,
                    String(rec['AREA'] || '').toUpperCase(),
                    String(rec['Descripción'] || '').toUpperCase(),
                    String(rec['TAG'] || '').toUpperCase(),
                    String(rec['PROG/NÓ PROG'] || '').toUpperCase(),
                    String(rec['ESTACION'] || '').toUpperCase(),
                    avanceInfo.texto,
                    String(rec['OT'] || '').toUpperCase(),
                    String(rec['EJECUTANTE'] || '').toUpperCase()
                ]);
            } else {
                aoaData.push([area, '', '', '', '', '', '', '', '']);
            }
        }
    });
    
    const ws = XLSX.utils.aoa_to_sheet(aoaData);
    const borderStyle = {
        top: { style: "thin", color: { rgb: "000000" } },
        bottom: { style: "thin", color: { rgb: "000000" } },
        left: { style: "thin", color: { rgb: "000000" } },
        right: { style: "thin", color: { rgb: "000000" } }
    };
    
    ws['A1'].s = { fill: { fgColor: { rgb: "FF0000" } }, font: { color: { rgb: "FFFFFF" }, bold: true }, alignment: { horizontal: "center", vertical: "center" }, border: borderStyle };
    ws['B1'].s = { fill: { fgColor: { rgb: "FF0000" } }, font: { color: { rgb: "FFFFFF" }, bold: true }, alignment: { horizontal: "center", vertical: "center" }, border: borderStyle };
    
    headers.forEach((h, i) => {
        const cell = XLSX.utils.encode_cell({ r: 1, c: i });
        ws[cell].s = { fill: { fgColor: { rgb: "FF0000" } }, font: { color: { rgb: "FFFFFF" }, bold: true }, alignment: { horizontal: "center", vertical: "center" }, border: borderStyle };
    });
    
    let areaStartRow = 2;
    subareasOrder.forEach(area => {
        const recordsOfArea = groupedData[area] || [];
        const totalRows = Math.max(rowsPerArea, recordsOfArea.length);
        const areaEndRow = areaStartRow + totalRows - 1;
        
        ws['!merges'] = ws['!merges'] || [];
        ws['!merges'].push({ s: { r: areaStartRow, c: 0 }, e: { r: areaEndRow, c: 0 } });
        
        for (let r = areaStartRow; r <= areaEndRow; r++) {
            const cell = XLSX.utils.encode_cell({ r: r, c: 0 });
            if (ws[cell]) {
                ws[cell].s = { fill: { fgColor: { rgb: "FF0000" } }, font: { color: { rgb: "FFFFFF" }, bold: true, size: 10 }, alignment: { horizontal: "center", vertical: "center", wrapText: true }, border: borderStyle };
            }
        }
        areaStartRow = areaEndRow + 1;
    });
    
    for (let r = 2; r < aoaData.length; r++) {
        for (let c = 1; c < 9; c++) {
            const cell = XLSX.utils.encode_cell({ r: r, c: c });
            if (ws[cell]) {
                ws[cell].s = { fill: { fgColor: { rgb: "FFFFFF" } }, font: { color: { rgb: "000000" } }, alignment: { horizontal: "left", vertical: "center", wrapText: true }, border: borderStyle };
            }
        }
    }
    
    ws['!cols'] = [{ wch: 15 }, { wch: 20 }, { wch: 50 }, { wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 25 }];
    ws['!rows'] = [{ hpt: 25 }, { hpt: 25 }];
    
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Actividades");
    XLSX.writeFile(wb, `Actividades_${fromDate || 'inicio'}_${toDate || 'hoy'}.xlsx`);
    
    closeExportModal();
}

// ==========================================
// QR
// ==========================================
function showQRModal() {
    document.getElementById('qr-modal').style.display = 'flex';
    const appUrl = window.location.origin + window.location.pathname;
    const qrImg = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(appUrl)}" alt="QR Code" style="width: 250px; height: 250px;">`;
    document.getElementById('qr-code').innerHTML = qrImg;
}

function closeQRModal() {
    document.getElementById('qr-modal').style.display = 'none';
}

function downloadQR() {
    const appUrl = window.location.origin + window.location.pathname;
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(appUrl)}`;
    const link = document.createElement('a');
    link.download = 'QR_App_GestionActividades.png';
    link.href = url;
    link.click();
}