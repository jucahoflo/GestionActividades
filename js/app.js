// ==========================================
// CONFIGURACIÓN - GOOGLE APPS SCRIPT
// ==========================================
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby73wBltoTjoLSkhGoDM-NYz7YCE3gvgUibLLCw7tnbcmugV4fDZPR8EMk2vjTg-_g0/exec';

// ==========================================
// ✅ DICCIONARIO DE AUTOCORRECCIÓN AMPLIADO
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
    "PEND": "PENDIENTE",
    
    // ⚙️ MECÁNICA Y EQUIPOS
    "MOTORR": "MOTOR",
    "COMPRESOR": "COMPRESOR",
    "TURBINA": "TURBINA",
    "GENERADOR": "GENERADOR",
    "VENTILADOR": "VENTILADOR",
    "REDUCTOR": "REDUCTOR",
    "ACOPLE": "ACOPLE",
    "RODAMIENTO": "RODAMIENTO",
    "RODAMIENTOS": "RODAMIENTOS",
    "SELLO": "SELLO",
    "EMPAQUE": "EMPAQUE",
    "BUJE": "BUJE",
    "PIÑON": "PIÑÓN",
    "ENGRANAJE": "ENGRANAJE",
    "CORREA": "CORREA",
    "CADENA": "CADENA",
    "POLEA": "POLEA",
    "MANIFOLD": "MANIFOLD",
    "INYECTOR": "INYECTOR",
    "CULATA": "CULATA",
    "CAMISA": "CAMISA",
    "PISTON": "PISTÓN",
    "CIGUEÑAL": "CIGÜEÑAL",
    "ARBOL": "ÁRBOL",
    "VALVULA": "VÁLVULA",
    "VALVULAS": "VÁLVULAS",
    "MOTOBOMBA": "MOTOBOMBA",
    "ELECTROBOMBA": "ELECTROBOMBA",
    "HIDRAULICA": "HIDRÁULICA",
    "HIDRAULICO": "HIDRÁULICO",
    "NEUMATICA": "NEUMÁTICA",
    "NEUMATICO": "NEUMÁTICO",
    
    // ⚡ ELÉCTRICO
    "ELEC": "ELÉCTRICO",
    "ELECTRICO": "ELÉCTRICO",
    "ELECTRICA": "ELÉCTRICA",
    "ELECTRICIDAD": "ELECTRICIDAD",
    "ELECTRONICO": "ELECTRÓNICO",
    "ELECTRONICA": "ELECTRÓNICA",
    "TABLERO": "TABLERO",
    "BREAKER": "BREAKER",
    "INTERRUPTOR": "INTERRUPTOR",
    "CONTACTOR": "CONTACTOR",
    "RELE": "RELÉ",
    "FUSIBLE": "FUSIBLE",
    "TRANSFORMADOR": "TRANSFORMADOR",
    "VARIADOR": "VARIADOR",
    "ARRANCADOR": "ARRANCADOR",
    "CABLEADO": "CABLEADO",
    "BORNERA": "BORNERA",
    "TERMINAL": "TERMINAL",
    "CONEXION": "CONEXIÓN",
    "TIERRA": "TIERRA",
    "MONOFASICO": "MONOFÁSICO",
    "TRIFASICO": "TRIFÁSICO",
    "TRIFASICA": "TRIFÁSICA",
    "MONOFASICA": "MONOFÁSICA",
    "ILUMINACION": "ILUMINACIÓN",
    "LUMINARIA": "LUMINARIA",
    "LAMPARA": "LÁMPARA",
    "FOCO": "FOCO",
    
    // 🛢️ PETRÓLEO Y GAS
    "INYECCION": "INYECCIÓN",
    "PRODUCCION": "PRODUCCIÓN",
    "EXTRACCION": "EXTRACCIÓN",
    "REFINACION": "REFINACIÓN",
    "PERFORACION": "PERFORACIÓN",
    "CABEZA": "CABEZA",
    "CABEZAL": "CABEZAL",
    "POZO": "POZO",
    "YACIMIENTO": "YACIMIENTO",
    "CRUDO": "CRUDO",
    "GASODUCTO": "GASODUCTO",
    "OLEODUCTO": "OLEODUCTO",
    "POLIDUCTO": "POLIDUCTO",
    "DUCTO": "DUCTO",
    "LINEA": "LÍNEA",
    "TUBERIA": "TUBERÍA",
    "TUBO": "TUBO",
    "FLANGE": "FLANGE",
    "BRIDA": "BRIDA",
    "CODO": "CODO",
    "REDUCCION": "REDUCCIÓN",
    "NIPLE": "NIPLE",
    "UNION": "UNIÓN",
    "SEPARADOR": "SEPARADOR",
    "TANQUE": "TANQUE",
    "TANQUILLA": "TANQUILLA",
    "DEPOSITO": "DEPÓSITO",
    "GUNBARREL": "GUNBARREL",
    "HEADER": "HEADER",
    "MULTIPLE": "MÚLTIPLE",
    "ESTRANGULADOR": "ESTRANGULADOR",
    "MACAROLLA": "MACAROLLA",
    "CABILLA": "CABILLA",
    "VARILLA": "VARILLA",
    "BALANCIN": "BALANCÍN",
    "UNIDAD": "UNIDAD",
    "BOMBEO": "BOMBEO",
    "MECANICO": "MECÁNICO",
    "MECANICA": "MECÁNICA",
    "PISTONEO": "PISTONEO",
    "SWAB": "SWAB",
    "SWABEO": "SWABEO",
    "SURGENCIA": "SURGENCIA",
    "ARTIFICIAL": "ARTIFICIAL",
    "LEVANTAMIENTO": "LEVANTAMIENTO",
    
    // 💧 FLUIDOS Y PRESIÓN
    "PRESION": "PRESIÓN",
    "PRESURIZAR": "PRESURIZAR",
    "DESPRESURIZAR": "DESPRESURIZAR",
    "TEMPERATURA": "TEMPERATURA",
    "VISCOSIDAD": "VISCOSIDAD",
    "DENSIDAD": "DENSIDAD",
    "GRAVEDAD": "GRAVEDAD",
    "CAUDAL": "CAUDAL",
    "FLUJO": "FLUJO",
    "FUGA": "FUGA",
    "GOTEO": "GOTEO",
    "DERRAME": "DERRAME",
    "MANOMETRO": "MANÓMETRO",
    "TERMOMETRO": "TERMÓMETRO",
    "CAUDALIMETRO": "CAUDALÍMETRO",
    "FLUJOMETRO": "FLUJÓMETRO",
    "PRESOSTATO": "PRESOSTATO",
    "TERMOSTATO": "TERMOSTATO",
    "TRANSMISOR": "TRANSMISOR",
    "SENSOR": "SENSOR",
    "INDICADOR": "INDICADOR",
    "ROTAMETRO": "ROTÁMETRO",
    
    // 📏 MEDICIÓN
    "MEDICION": "MEDICIÓN",
    "MEDIDOR": "MEDIDOR",
    "CALIBRACION": "CALIBRACIÓN",
    "PATRON": "PATRÓN",
    "INSTRUMENTO": "INSTRUMENTO",
    "INSTRUMENTACION": "INSTRUMENTACIÓN",
    "VERIFICACION": "VERIFICACIÓN",
    "AJUSTE": "AJUSTE",
    "TOLERANCIA": "TOLERANCIA",
    "PRECISION": "PRECISIÓN",
    "EXACTITUD": "EXACTITUD",
    "RANGO": "RANGO",
    "ESCALA": "ESCALA",
    "LECTURA": "LECTURA",
    "REGISTRO": "REGISTRO",
    "ANALOGO": "ANÁLOGO",
    "DIGITAL": "DIGITAL",
    
    // 🏗️ ESTRUCTURAS
    "ESTRUCTURA": "ESTRUCTURA",
    "SOPORTE": "SOPORTE",
    "BASE": "BASE",
    "PLACA": "PLACA",
    "PERFIL": "PERFIL",
    "VIGA": "VIGA",
    "COLUMNA": "COLUMNA",
    "TRAVIESA": "TRAVIESA",
    "SOLDADURA": "SOLDADURA",
    "SOLDAR": "SOLDAR",
    "SUELDA": "SUELDA",
    "ELECTRODO": "ELECTRODO",
    "ESMERILAR": "ESMERILAR",
    "CORTE": "CORTE",
    "TALADRO": "TALADRO",
    "BROCA": "BROCA",
    "LLAVE": "LLAVE",
    "DADO": "DADO",
    "HERRAMIENTA": "HERRAMIENTA",
    "EQUIPO": "EQUIPO",
    "MAQUINA": "MÁQUINA",
    
    // 🏢 ÁREAS
    "TALLER": "TALLER",
    "CAMPAMENTO": "CAMPAMENTO",
    "OFICINA": "OFICINA",
    "BODEGA": "BODEGA",
    "ALMACEN": "ALMACÉN",
    "PATIO": "PATIO",
    "FACILIDAD": "FACILIDAD",
    "FACILIDADES": "FACILIDADES",
    "ESTACION": "ESTACIÓN",
    "LOCACION": "LOCACIÓN",
    "AREA": "ÁREA",
    "ZONA": "ZONA",
    "SECTOR": "SECTOR",
    
    // 🌿 HSEQ
    "AMBIENTAL": "AMBIENTAL",
    "CONTAMINACION": "CONTAMINACIÓN",
    "CONTAMINANTE": "CONTAMINANTE",
    "RESIDUO": "RESIDUO",
    "VERTIMIENTO": "VERTIMIENTO",
    "SEGURIDAD": "SEGURIDAD",
    "INDUSTRIAL": "INDUSTRIAL",
    "SALUD": "SALUD",
    "OCUPACIONAL": "OCUPACIONAL",
    "RIESGO": "RIESGO",
    "PELIGRO": "PELIGRO",
    "ACCIDENTE": "ACCIDENTE",
    "INCIDENTE": "INCIDENTE",
    "EMERGENCIA": "EMERGENCIA",
    "EVACUACION": "EVACUACIÓN",
    "PROTECCION": "PROTECCIÓN",
    "ELEMENTO": "ELEMENTO",
    "CASCO": "CASCO",
    "GUANTES": "GUANTES",
    "BOTAS": "BOTAS",
    "GAFAS": "GAFAS",
    "ARNES": "ARNÉS",
    "TAPABOCAS": "TAPABOCAS",
    
    // 🔥 TRABAJOS ESPECIALES
    "CALIENTE": "CALIENTE",
    "PERMISO": "PERMISO",
    "FRIO": "FRÍO",
    "ALTURA": "ALTURA",
    "ESPACIO": "ESPACIO",
    "CONFINADO": "CONFINADO",
    "EXCAVACION": "EXCAVACIÓN",
    "IZAJE": "IZAJE",
    "ANDAMIO": "ANDAMIO",
    "ESCALERA": "ESCALERA",
    
    // 🧹 LIMPIEZA
    "LIMPIEZA": "LIMPIEZA",
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
    "SOLVENTE": "SOLVENTE",
    "DESENGRASANTE": "DESENGRASANTE",
    "DETERGENTE": "DETERGENTE",
    
    // 🧪 CORRECCIONES ORTOGRÁFICAS
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
    
    // 🔤 PALABRAS CON TILDE
    "ACCION": "ACCIÓN",
    "ADMINISTRACION": "ADMINISTRACIÓN",
    "APLICACION": "APLICACIÓN",
    "ATENCION": "ATENCIÓN",
    "CAPACITACION": "CAPACITACIÓN",
    "CERTIFICACION": "CERTIFICACIÓN",
    "CLASIFICACION": "CLASIFICACIÓN",
    "COMUNICACION": "COMUNICACIÓN",
    "CONDICION": "CONDICIÓN",
    "CONFIGURACION": "CONFIGURACIÓN",
    "CONSTRUCCION": "CONSTRUCCIÓN",
    "COORDINACION": "COORDINACIÓN",
    "CORRECION": "CORRECCIÓN",
    "DECISION": "DECISIÓN",
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
    "OPERACION": "OPERACIÓN",
    "ORGANIZACION": "ORGANIZACIÓN",
    "PARTICIPACION": "PARTICIPACIÓN",
    "PLANIFICACION": "PLANIFICACIÓN",
    "PREPARACION": "PREPARACIÓN",
    "PREVENCION": "PREVENCIÓN",
    "PROGRAMACION": "PROGRAMACIÓN",
    "PRESENTACION": "PRESENTACIÓN",
    "RECOMENDACION": "RECOMENDACIÓN",
    "RECUPERACION": "RECUPERACIÓN",
    "REHABILITACION": "REHABILITACIÓN",
    "RELACION": "RELACIÓN",
    "REPARACION": "REPARACIÓN",
    "REVISION": "REVISIÓN",
    "SEPARACION": "SEPARACIÓN",
    "SOLUCION": "SOLUCIÓN",
    "SUPERVISION": "SUPERVISIÓN",
    "TRANSFERENCIA": "TRANSFERENCIA",
    "VERIFICACION": "VERIFICACIÓN",
    "VIBRACION": "VIBRACIÓN"
};

// ==========================================
// ✅ FUNCIÓN: AUTOCORREGIR TEXTO
// ==========================================
function autocorregirTexto(texto) {
    if (!texto) return '';
    
    let resultado = String(texto).trim();
    resultado = resultado.replace(/\s+/g, ' ');
    
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

// ==========================================
// ✅ SISTEMA DE SUGERENCIAS TIPO GMAIL
// ==========================================

// Función: obtener sugerencias para la última palabra escrita
function obtenerSugerencias(texto) {
    if (!texto || texto.length < 2) return [];
    
    // Obtener la última palabra (después del último espacio)
    const textoUpper = texto.toUpperCase().trim();
    const palabras = textoUpper.split(/\s+/);
    const ultimaPalabra = palabras[palabras.length - 1] || '';
    
    if (ultimaPalabra.length < 2) return [];
    
    const sugerencias = [];
    const yaAgregadas = new Set();
    
    // 1. Coincidencia exacta en el diccionario
    if (DICCIONARIO_CORRECCION[ultimaPalabra]) {
        const sugerencia = DICCIONARIO_CORRECCION[ultimaPalabra];
        if (sugerencia !== ultimaPalabra && !yaAgregadas.has(sugerencia)) {
            sugerencias.push({
                original: ultimaPalabra,
                sugerencia: sugerencia,
                tipo: 'correccion'
            });
            yaAgregadas.add(sugerencia);
        }
    }
    
    // 2. Coincidencias parciales (palabras que empiezan con lo escrito)
    Object.keys(DICCIONARIO_CORRECCION).forEach(clave => {
        if (sugerencias.length >= 5) return;
        
        // Si la clave empieza con lo que el usuario escribió
        if (clave.startsWith(ultimaPalabra) && clave !== ultimaPalabra) {
            const sugerencia = DICCIONARIO_CORRECCION[clave];
            if (!yaAgregadas.has(sugerencia) && sugerencia !== ultimaPalabra) {
                sugerencias.push({
                    original: clave,
                    sugerencia: sugerencia,
                    tipo: 'sugerencia'
                });
                yaAgregadas.add(sugerencia);
            }
        }
    });
    
    // 3. Coincidencias en cualquier parte (búsqueda más amplia)
    if (sugerencias.length < 5) {
        Object.keys(DICCIONARIO_CORRECCION).forEach(clave => {
            if (sugerencias.length >= 5) return;
            
            // Si la clave contiene lo que el usuario escribió
            if (clave.includes(ultimaPalabra) && !clave.startsWith(ultimaPalabra) && clave !== ultimaPalabra) {
                const sugerencia = DICCIONARIO_CORRECCION[clave];
                if (!yaAgregadas.has(sugerencia) && sugerencia !== ultimaPalabra) {
                    sugerencias.push({
                        original: clave,
                        sugerencia: sugerencia,
                        tipo: 'similar'
                    });
                    yaAgregadas.add(sugerencia);
                }
            }
        });
    }
    
    return sugerencias.slice(0, 5);
}

// Función: aplicar una sugerencia al texto
function aplicarSugerencia(inputId, sugerencia, tipo) {
    const input = document.getElementById(inputId);
    if (!input) return;
    
    let texto = input.value;
    const textoUpper = texto.toUpperCase().trim();
    const palabras = textoUpper.split(/\s+/);
    const ultimaPalabra = palabras[palabras.length - 1] || '';
    
    // Reemplazar la última palabra con la sugerencia
    // Preservar el texto original hasta la última palabra
    const textoAntes = texto.substring(0, texto.toUpperCase().lastIndexOf(ultimaPalabra));
    
    input.value = textoAntes + sugerencia.sugerencia + ' ';
    input.focus();
    
    // Colocar el cursor al final
    const len = input.value.length;
    if (input.setSelectionRange) {
        input.setSelectionRange(len, len);
    }
    
    // Ocultar sugerencias
    ocultarSugerencias(inputId);
}

// Función: mostrar sugerencias para un input
function mostrarSugerencias(inputId) {
    const input = document.getElementById(inputId);
    const box = document.getElementById('sugerencias-' + inputId);
    
    if (!input || !box) return;
    
    const sugerencias = obtenerSugerencias(input.value);
    
    if (sugerencias.length === 0) {
        ocultarSugerencias(inputId);
        return;
    }
    
    // Renderizar sugerencias
    box.innerHTML = '';
    sugerencias.forEach((sug, index) => {
        const item = document.createElement('div');
        item.className = 'suggestion-item' + (index === 0 ? ' selected' : '');
        item.innerHTML = `
            <span class="suggestion-icon">✨</span>
            <span class="suggestion-text">${sug.sugerencia}</span>
            <span class="suggestion-hint">Tab</span>
        `;
        item.onclick = function() {
            aplicarSugerencia(inputId, sug, sug.tipo);
        };
        box.appendChild(item);
    });
    
    box.classList.add('active');
}

// Función: ocultar sugerencias
function ocultarSugerencias(inputId) {
    const box = document.getElementById('sugerencias-' + inputId);
    if (box) {
        box.classList.remove('active');
    }
}

// Función: manejar teclado (Tab, Enter, Escape, Flechas)
function manejarTecladoSugerencias(event, inputId) {
    const box = document.getElementById('sugerencias-' + inputId);
    if (!box || !box.classList.contains('active')) return;
    
    const items = box.querySelectorAll('.suggestion-item');
    let selectedIndex = Array.from(items).findIndex(i => i.classList.contains('selected'));
    
    if (event.key === 'Tab' || event.key === 'Enter') {
        event.preventDefault();
        if (selectedIndex >= 0 && items[selectedIndex]) {
            items[selectedIndex].click();
        }
    } else if (event.key === 'Escape') {
        ocultarSugerencias(inputId);
    } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (selectedIndex < items.length - 1) {
            items[selectedIndex].classList.remove('selected');
            items[selectedIndex + 1].classList.add('selected');
        }
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (selectedIndex > 0) {
            items[selectedIndex].classList.remove('selected');
            items[selectedIndex - 1].classList.add('selected');
        }
    }
}

// Función: inicializar sistema de sugerencias en un input
function inicializarSugerencias(inputId) {
    const input = document.getElementById(inputId);
    if (!input) return;
    
    // Al escribir, mostrar sugerencias
    input.addEventListener('input', function() {
        mostrarSugerencias(inputId);
    });
    
    // Al presionar tecla
    input.addEventListener('keydown', function(event) {
        manejarTecladoSugerencias(event, inputId);
    });
    
    // Al perder foco, ocultar (con delay para permitir clic)
    input.addEventListener('blur', function() {
        setTimeout(() => {
            ocultarSugerencias(inputId);
        }, 200);
    });
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
    
    // ✅ Inicializar sistema de sugerencias
    inicializarSugerencias('f-descripcion');
    inicializarSugerencias('f-area');
    inicializarSugerencias('f-ejecutante');
    
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
    
    // Cerrar sugerencias al hacer clic fuera
    document.addEventListener('click', function(event) {
        ['f-descripcion', 'f-area', 'f-ejecutante'].forEach(id => {
            const input = document.getElementById(id);
            const box = document.getElementById('sugerencias-' + id);
            if (input && box && !input.contains(event.target) && !box.contains(event.target)) {
                ocultarSugerencias(id);
            }
        });
    });
};

// ==========================================
// ✅ CERRAR MODAL DE BIENVENIDA
// ==========================================
function closeWelcomeModal() {
    document.getElementById('welcome-modal').style.display = 'none';
}

// ==========================================
// ✅ MOSTRAR MODAL DE AGRADECIMIENTO
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
        'descripcion': 'Escribe una descripción clara y concisa. Verás sugerencias automáticas mientras escribes. Presiona Tab o haz clic para aplicarlas.',
        'tag': 'Escribe el TAG identificador del equipo. Ej: TAG-001.',
        'prog': 'Selecciona P si es Programada, o NP si es No Programada.',
        'estacion': 'Selecciona la estación donde se realizará la actividad.',
        'avance': 'Escribe el porcentaje (0-100). Se agrega el símbolo %.',
        'ot': 'Escribe la Orden de Trabajo. Puedes usar PTE si está pendiente.',
        'ejecutante': 'Escribe los nombres, uno por línea.',
        'subarea': 'Selecciona la subárea a la que pertenece.',
        'fecha': 'La fecha se llena automáticamente al crear. Al editar, se puede cambiar.',
        'area': 'Escribe el área o sistema general. Verás sugerencias automáticas.'
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
// MODAL CREAR
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
// ✅ MODAL CREAR - DÍA SIGUIENTE
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
    // Ocultar sugerencias al cerrar
    ocultarSugerencias('f-descripcion');
    ocultarSugerencias('f-area');
    ocultarSugerencias('f-ejecutante');
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
        
        // ✅ Aplicar autocorrección
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
// ELIMINAR (conservado)
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