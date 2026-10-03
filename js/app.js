// ==========================================
// CONFIGURACIÓN - GOOGLE APPS SCRIPT
// ==========================================
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby73wBltoTjoLSkhGoDM-NYz7YCE3gvgUibLLCw7tnbcmugV4fDZPR8EMk2vjTg-_g0/exec';

// ==========================================
// ✅ DICCIONARIO DE AUTOCORRECCIÓN
// ==========================================
const DICCIONARIO_CORRECCION = {
    "MTTO": "MANTENIMIENTO",
    "MTT": "MANTENIMIENTO",
    "MANTTO": "MANTENIMIENTO",
    "MANTNIMIENTO": "MANTENIMIENTO",
    "MANTEMIENTO": "MANTENIMIENTO",
    "MANTENIMINETO": "MANTENIMIENTO",
    "MANTENIMIENTIO": "MANTENIMIENTO",
    "MANTENIMIENTOA": "MANTENIMIENTO",
    "MANTENIMIRNTO": "MANTENIMIENTO",
    "MANTIMIENTO": "MANTENIMIENTO",
    "MAMTENIMIENTO": "MANTENIMIENTO",
    "MANTENIMIENTI": "MANTENIMIENTO",
    "MANTENIMIENT": "MANTENIMIENTO",
    "MANTENIMIENTOS": "MANTENIMIENTOS",
    "MANTE": "MANTENIMIENTO",
    "PREV": "PREVENTIVO",
    "CORR": "CORRECTIVO",
    "REV": "REVISIÓN",
    "REVICION": "REVISIÓN",
    "REVICIONES": "REVISIONES",
    "REVISON": "REVISIÓN",
    "INSP": "INSPECCIÓN",
    "INSPEC": "INSPECCIÓN",
    "INSPECC": "INSPECCIÓN",
    "INSPECCION": "INSPECCIÓN",
    "INSPECION": "INSPECCIÓN",
    "INSPECCIONES": "INSPECCIONES",
    "INST": "INSTRUMENTACIÓN",
    "INSTT": "INSTRUMENTACIÓN",
    "INSTL": "INSTALACIÓN",
    "INTALACION": "INSTALACIÓN",
    "INSTALACION": "INSTALACIÓN",
    "INSTALCION": "INSTALACIÓN",
    "INSTALACIONES": "INSTALACIONES",
    "LUB": "LUBRICACIÓN",
    "LUBRICACION": "LUBRICACIÓN",
    "LUBRICACIO": "LUBRICACIÓN",
    "CAL": "CALIBRACIÓN",
    "CALIB": "CALIBRACIÓN",
    "CALIBRACION": "CALIBRACIÓN",
    "CALIBRACIO": "CALIBRACIÓN",
    "OPER": "OPERACIÓN",
    "OPERAC": "OPERACIONAL",
    "OPERACIONAL": "OPERACIONAL",
    "OPERACIOAL": "OPERACIONAL",
    "OPERACION": "OPERACIÓN",
    "OPERACIONES": "OPERACIONES",
    "ADMIN": "ADMINISTRACIÓN",
    "ADMINISTRACION": "ADMINISTRACIÓN",
    "PROG": "PROGRAMACIÓN",
    "PROGRAMACION": "PROGRAMACIÓN",
    "COORD": "COORDINACIÓN",
    "COORDINACION": "COORDINACIÓN",
    "SUP": "SUPERVISIÓN",
    "SUPERV": "SUPERVISIÓN",
    "SUPERVISION": "SUPERVISIÓN",
    "DOC": "DOCUMENTACIÓN",
    "DOCUMENTACION": "DOCUMENTACIÓN",
    "REP": "REPORTE",
    "INFOR": "INFORME",
    "CERT": "CERTIFICACIÓN",
    "CERTIFICACION": "CERTIFICACIÓN",
    "PEND": "PENDIENTE",
    "PTE": "PENDIENTE",
    "HAB": "HABILITACIÓN",
    "HABILITACION": "HABILITACIÓN",
    "CAP": "CAPACITACIÓN",
    "CAPACITACION": "CAPACITACIÓN",
    "SOCIALIZ": "SOCIALIZACIÓN",
    "SOCIALIZACION": "SOCIALIZACIÓN",
    "VERIFIC": "VERIFICACIÓN",
    "VERIFICAC": "VERIFICACIÓN",
    "VERIFICACION": "VERIFICACIÓN",
    "VERIFICA": "VERIFICACIÓN",
    "DESCONEX": "DESCONEXIÓN",
    "DESCONEXION": "DESCONEXIÓN",
    "DESCONECCION": "DESCONEXIÓN",
    "CONEX": "CONEXIÓN",
    "CONEXION": "CONEXIÓN",
    "CONEXIONES": "CONEXIONES",
    "ADEC": "ADECUACIÓN",
    "ADECUACION": "ADECUACIÓN",
    "ACTUALIZ": "ACTUALIZACIÓN",
    "ACTUALIZACION": "ACTUALIZACIÓN",
    "ACT": "ACTIVIDAD",
    "ACTIV": "ACTIVIDAD",
    "EMERG": "EMERGENCIA",
    "ELECTRICO": "ELÉCTRICO",
    "ELECTRICOS": "ELÉCTRICOS",
    "ELECTRICA": "ELÉCTRICA",
    "ELECTRICAS": "ELÉCTRICAS",
    "ELECTREICOS": "ELÉCTRICOS",
    "ELECTREICO": "ELÉCTRICO",
    "ELEC": "ELÉCTRICO",
    "GENERADOR": "GENERADOR",
    "GENERADO": "GENERADOR",
    "GENERADORES": "GENERADORES",
    "INSTRUMENTACION": "INSTRUMENTACIÓN",
    "INSTRUMENTACIO": "INSTRUMENTACIÓN",
    "INSTRUMENTISTA": "INSTRUMENTISTA",
    "INSTRUMENTISTAS": "INSTRUMENTISTAS",
    "VALVULA": "VÁLVULA",
    "VALVULAS": "VÁLVULAS",
    "VULVULA": "VÁLVULA",
    "VALBULA": "VÁLVULA",
    "MANOMETRO": "MANÓMETRO",
    "MANOMETROS": "MANÓMETROS",
    "TRANSMISOR": "TRANSMISOR",
    "TRANSMISORES": "TRANSMISORES",
    "TANQUE": "TANQUE",
    "TANQUES": "TANQUES",
    "TANKE": "TANQUE",
    "TANKS": "TANQUES",
    "TANKES": "TANQUES",
    "FRAK": "FRAC",
    "FRACK": "FRAC",
    "FRAKTAN": "FRAC TANK",
    "FRAKTANES": "FRAC TANKS",
    "CROSOVER": "CROSSOVER",
    "CORIOL": "CORIOLIS",
    "CORIOLI": "CORIOLIS",
    "MANIFOL": "MANIFOLD",
    "PZO": "POZO",
    "PZ": "POZO",
    "PZOS": "POZOS",
    "PRDEN": "ORDEN",
    "ADEO": "ASEO",
    "LIMPIESA": "LIMPIEZA",
    "ROZERIA": "ROCERÍA",
    "VEHICUL": "VEHÍCULO",
    "RESIVO": "RESIDUO",
    "RESIVOS": "RESIDUOS",
    "RESIUDOS": "RESIDUOS",
    "RIEGO": "RIESGO",
    "RIEGOS": "RIESGOS",
    "MOTORR": "MOTOR",
    "BONBA": "BOMBA",
    "COMPRESO": "COMPRESOR",
    "RODAMIENT": "RODAMIENTO",
    "INYETORES": "INYECTORES",
    "PORCEDIMIENTO": "PROCEDIMIENTO",
    "SWICHT": "SWITCH",
    "TANES": "TANKS",
    "TANE": "TANK",
    "REPARACION": "REPARACIÓN",
    "REPARACIO": "REPARACIÓN",
    "CORRECION": "CORRECCIÓN",
    "CORRECIO": "CORRECCIÓN",
    "CORRECIONES": "CORRECCIONES",
    "REVISION": "REVISIÓN",
    "REVISIO": "REVISIÓN",
    "DIAGNOSTICO": "DIAGNÓSTICO",
    "DIAGNOSTICOS": "DIAGNÓSTICOS",
    "INFORMACION": "INFORMACIÓN",
    "COMUNICACION": "COMUNICACIÓN",
    "UBICACION": "UBICACIÓN",
    "ADECUACION": "ADECUACIÓN",
    "CONFORMACION": "CONFORMACIÓN",
    "RECOLECCION": "RECOLECCIÓN",
    "RECOLECION": "RECOLECCIÓN",
    "SELECCION": "SELECCIÓN",
    "DIRECCION": "DIRECCIÓN",
    "ACCION": "ACCIÓN",
    "ACCIONES": "ACCIONES",
    "PROTECCION": "PROTECCIÓN",
    "PRODUCCION": "PRODUCCIÓN",
    "CONDUCCION": "CONDUCCIÓN",
    "CONSTRUCCION": "CONSTRUCCIÓN",
    "PRESION": "PRESIÓN",
    "PRESIO": "PRESIÓN",
    "PRESIONES": "PRESIONES",
    "TENSION": "TENSIÓN",
    "EXTENSION": "EXTENSIÓN",
    "DIMENSION": "DIMENSIÓN",
    "MISION": "MISIÓN",
    "VISION": "VISIÓN",
    "DIVISION": "DIVISIÓN",
    "PRECISION": "PRECISIÓN",
    "EMISION": "EMISIÓN",
    "TRANSMISION": "TRANSMISIÓN",
    "CONVERSION": "CONVERSIÓN",
    "VERSION": "VERSIÓN",
    "INVERSION": "INVERSIÓN",
    "CONFUSION": "CONFUSIÓN",
    "DECISION": "DECISIÓN",
    "EXPLOSION": "EXPLOSIÓN",
    "EROSION": "EROSIÓN",
    "CORROSION": "CORROSIÓN",
    "EXPANSION": "EXPANSIÓN",
    "COMPRESION": "COMPRESIÓN",
    "IMPRESION": "IMPRESIÓN",
    "EXPRESION": "EXPRESIÓN",
    "COMPRENSION": "COMPRENSIÓN",
    "DETENCION": "DETENCIÓN",
    "RETENCION": "RETENCIÓN",
    "ATENCION": "ATENCIÓN",
    "INTENCION": "INTENCIÓN",
    "CONTENCION": "CONTENCIÓN",
    "PREVENCION": "PREVENCIÓN",
    "INTERVENCION": "INTERVENCIÓN",
    "CONTINGENCIA": "CONTINGENCIA",
    "EMERGENCIA": "EMERGENCIA",
    "URGENCIA": "URGENCIA",
    "EXIGENCIA": "EXIGENCIA",
    "VIGENCIA": "VIGENCIA",
    "NEGLIGENCIA": "NEGLIGENCIA",
    "INTELIGENCIA": "INTELIGENCIA",
    "CONCIENCIA": "CONCIENCIA",
    "EFICIENCIA": "EFICIENCIA",
    "EFICACIA": "EFICACIA",
    "DEFICIENCIA": "DEFICIENCIA",
    "SUFICIENCIA": "SUFICIENCIA",
    "INSUFICIENCIA": "INSUFICIENCIA",
    "POTENCIA": "POTENCIA",
    "COMPETENCIA": "COMPETENCIA",
    "COMPETENCIAS": "COMPETENCIAS",
    "IMPORTANCIA": "IMPORTANCIA",
    "INSTANCIA": "INSTANCIA",
    "CIRCUNSTANCIA": "CIRCUNSTANCIA",
    "SUSTANCIA": "SUSTANCIA",
    "SUSTANCIAS": "SUSTANCIAS",
    "DISTANCIA": "DISTANCIA",
    "ABUNDANCIA": "ABUNDANCIA",
    "REDUNDANCIA": "REDUNDANCIA",
    "TOLERANCIA": "TOLERANCIA",
    "PERMANENCIA": "PERMANENCIA",
    "CONVENIENCIA": "CONVENIENCIA",
    "INCONVENIENCIA": "INCONVENIENCIA",
    "RESISTENCIA": "RESISTENCIA",
    "EXISTENCIA": "EXISTENCIA",
    "ASISTENCIA": "ASISTENCIA",
    "CONSISTENCIA": "CONSISTENCIA",
    "INCONSISTENCIA": "INCONSISTENCIA",
    "COEXISTENCIA": "COEXISTENCIA",
    "PREEXISTENCIA": "PREEXISTENCIA",
    "BOMBA": "BOMBA",
    "BOMBAS": "BOMBAS",
    "COMPRESOR": "COMPRESOR",
    "COMPRESORES": "COMPRESORES",
    "TURBINA": "TURBINA",
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
    "INYECTOR": "INYECTOR",
    "INYECTORES": "INYECTORES",
    "CULATA": "CULATA",
    "CAMISA": "CAMISA",
    "PISTON": "PISTÓN",
    "CIGUEÑAL": "CIGÜEÑAL",
    "ARBOL": "ÁRBOL",
    "MOTOBOMBA": "MOTOBOMBA",
    "ELECTROBOMBA": "ELECTROBOMBA",
    "HIDRAULICA": "HIDRÁULICA",
    "HIDRAULICO": "HIDRÁULICO",
    "NEUMATICA": "NEUMÁTICA",
    "NEUMATICO": "NEUMÁTICO",
    "MOTOGENERADOR": "MOTOGENERADOR",
    "BREAKER": "BREAKER",
    "SWITCH": "SWITCH",
    "CONTACTOR": "CONTACTOR",
    "VARIADOR": "VARIADOR",
    "ARRANCADOR": "ARRANCADOR",
    "TABLERO": "TABLERO",
    "BORNERA": "BORNERA",
    "TERMINAL": "TERMINAL",
    "TERMINALES": "TERMINALES",
    "MONOFASICO": "MONOFÁSICO",
    "TRIFASICO": "TRIFÁSICO",
    "ILUMINACION": "ILUMINACIÓN",
    "LUMINARIA": "LUMINARIA",
    "LAMPARA": "LÁMPARA",
    "FOCO": "FOCO",
    "CAUDAL": "CAUDAL",
    "FLUJO": "FLUJO",
    "FUGA": "FUGA",
    "DERRAME": "DERRAME",
    "TEMPERATURA": "TEMPERATURA",
    "VISCOSIDAD": "VISCOSIDAD",
    "DENSIDAD": "DENSIDAD",
    "GRAVEDAD": "GRAVEDAD",
    "TERMOMETRO": "TERMÓMETRO",
    "CAUDALIMETRO": "CAUDALÍMETRO",
    "FLUJOMETRO": "FLUJÓMETRO",
    "PRESOSTATO": "PRESOSTATO",
    "TERMOSTATO": "TERMOSTATO",
    "SENSOR": "SENSOR",
    "SENSORES": "SENSORES",
    "INDICADOR": "INDICADOR",
    "ROTAMETRO": "ROTÁMETRO",
    "MEDIDOR": "MEDIDOR",
    "MEDIDORES": "MEDIDORES",
    "PATRON": "PATRÓN",
    "ANALOGO": "ANÁLOGO",
    "ESTRUCTURA": "ESTRUCTURA",
    "SOPORTE": "SOPORTE",
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
    "TALADRO": "TALADRO",
    "BROCA": "BROCA",
    "LLAVE": "LLAVE",
    "DADO": "DADO",
    "HERRAMIENTA": "HERRAMIENTA",
    "HERRAMIENTAS": "HERRAMIENTAS",
    "MAQUINA": "MÁQUINA",
    "MAQUINAS": "MÁQUINAS",
    "TALLER": "TALLER",
    "TALLR": "TALLER",
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
    "AMBIENTAL": "AMBIENTAL",
    "CONTAMINACION": "CONTAMINACIÓN",
    "RESIDUO": "RESIDUO",
    "RESIDUOS": "RESIDUOS",
    "VERTIMIENTO": "VERTIMIENTO",
    "SEGURIDAD": "SEGURIDAD",
    "INDUSTRIAL": "INDUSTRIAL",
    "SALUD": "SALUD",
    "OCUPACIONAL": "OCUPACIONAL",
    "RIESGO": "RIESGO",
    "RIESGOS": "RIESGOS",
    "PELIGRO": "PELIGRO",
    "ACCIDENTE": "ACCIDENTE",
    "INCIDENTE": "INCIDENTE",
    "EVACUACION": "EVACUACIÓN",
    "ELEMENTO": "ELEMENTO",
    "CASCO": "CASCO",
    "GUANTES": "GUANTES",
    "BOTAS": "BOTAS",
    "GAFAS": "GAFAS",
    "ARNES": "ARNÉS",
    "TAPABOCAS": "TAPABOCAS",
    "MASCARILLA": "MASCARILLA",
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
    "ESLINGA": "ESLINGA",
    "ESLINGAS": "ESLINGAS",
    "COMBUSTIBLE": "COMBUSTIBLE",
    "DIESEL": "DIESEL",
    "GASOLINA": "GASOLINA",
    "ACEITE": "ACEITE",
    "LUBRICANTE": "LUBRICANTE",
    "GRASA": "GRASA",
    "ADITIVO": "ADITIVO",
    "CRUDO": "CRUDO",
    "API": "API",
    "AGUA": "AGUA",
    "VAPOR": "VAPOR",
    "INFORME": "INFORME",
    "REPORTE": "REPORTE",
    "ACTA": "ACTA",
    "MATRIZ": "MATRIZ",
    "CRONOGRAMA": "CRONOGRAMA",
    "PROCEDIMIENTO": "PROCEDIMIENTO",
    "PROTOCOLO": "PROTOCOLO",
    "FORMATO": "FORMATO",
    "REGISTRO": "REGISTRO",
    "CERTIFICADO": "CERTIFICADO",
    "DIPLOMA": "DIPLOMA",
    "RESOLUCION": "RESOLUCIÓN",
    "NORMATIVA": "NORMATIVA",
    "LEY": "LEY",
    "DECRETO": "DECRETO",
    "CASETA": "CASETA",
    "CASETAS": "CASETAS",
    "CASA": "CASA",
    "CASAS": "CASAS",
    "KIOKO": "KIOSCO",
    "KIOSKO": "KIOSCO",
    "KIOSCOS": "KIOSCOS",
    "COMUNICACIÓN": "COMUNICACIÓN",
    "COMUNICACIONES": "COMUNICACIONES",
    "CUARTO": "CUARTO",
    "CUARTOS": "CUARTOS",
    "CUARTO DE CONTROL": "CUARTO DE CONTROL",
    "CUARTO DE MAQUINAS": "CUARTO DE MÁQUINAS",
    "SALA": "SALA",
    "SALAS": "SALAS",
    "SALA DE REUNIONES": "SALA DE REUNIONES",
    "SALA DE JUEGOS": "SALA DE JUEGOS",
    "SALA DE CONTROL": "SALA DE CONTROL",
    "BAÑO": "BAÑO",
    "BAÑOS": "BAÑOS",
    "BAÑO DE DAMAS": "BAÑO DE DAMAS",
    "BAÑO DE CABALLEROS": "BAÑO DE CABALLEROS",
    "COCINA": "COCINA",
    "COMEDOR": "COMEDOR",
    "CASINO": "CASINO",
    "LAVANDERIA": "LAVANDERÍA",
    "LAVANDERÍA": "LAVANDERÍA",
    "ALMACENES": "ALMACENES",
    "TALLERES": "TALLERES",
    "GARAJE": "GARAJE",
    "GARAGE": "GARAJE",
    "PARQUEADERO": "PARQUEADERO",
    "PARQUEADEROS": "PARQUEADEROS",
    "PORTERIA": "PORTERÍA",
    "PORTERÍA": "PORTERÍA",
    "GARITA": "GARITA",
    "GARITAS": "GARITAS",
    "RECEPCION": "RECEPCIÓN",
    "RECEPCIÓN": "RECEPCIÓN",
    "VESTIER": "VESTIER",
    "VESTIERES": "VESTIERES",
    "VESTIDOR": "VESTIDOR",
    "VESTIDORES": "VESTIDORES",
    "LOCKER": "LOCKER",
    "LOCKERS": "LOCKERS",
    "HABITACION": "HABITACIÓN",
    "HABITACIÓN": "HABITACIÓN",
    "HABITACIONES": "HABITACIONES",
    "MODULO": "MÓDULO",
    "MÓDULO": "MÓDULO",
    "MODULOS": "MÓDULOS",
    "CONTENEDOR": "CONTENEDOR",
    "CONTENEDORES": "CONTENEDORES",
    "CONTENEDOR HABITACIONAL": "CONTENEDOR HABITACIONAL",
    "PATIOS": "PATIOS",
    "CANCHA": "CANCHA",
    "CANCHAS": "CANCHAS",
    "CANCHA DE FUTBOL": "CANCHA DE FÚTBOL",
    "PISCINA": "PISCINA",
    "GIMNASIO": "GIMNASIO",
    "ENFERMERIA": "ENFERMERÍA",
    "ENFERMERÍA": "ENFERMERÍA",
    "CAPILLA": "CAPILLA",
    "AERODROMO": "AERÓDROMO",
    "AERÓDROMO": "AERÓDROMO",
    "PISTA": "PISTA",
    "HELIPUERTO": "HELIPUERTO",
    "VIA": "VÍA",
    "VÍA": "VÍA",
    "VIAS": "VÍAS",
    "CARRETERA": "CARRETERA",
    "CAMINO": "CAMINO",
    "SENDERO": "SENDERO",
    "SENDEROS": "SENDEROS",
    "TROCHA": "TROCHA",
    "CALLE": "CALLE",
    "CALLES": "CALLES",
    "CARRERA": "CARRERA",
    "ANDEN": "ANDÉN",
    "ANDÉN": "ANDÉN",
    "CUNETA": "CUNETA",
    "CUNETAS": "CUNETAS",
    "CERCA": "CERCA",
    "CERCAS": "CERCAS",
    "CERCA VIVA": "CERCA VIVA",
    "CERCO": "CERCO",
    "CERCO PERIMETRAL": "CERCO PERIMETRAL",
    "CERCO ELECTRICO": "CERCO ELÉCTRICO",
    "PUERTA": "PUERTA",
    "PUERTAS": "PUERTAS",
    "PORTON": "PORTÓN",
    "PORTÓN": "PORTÓN",
    "PORTONES": "PORTONES",
    "REJA": "REJA",
    "REJAS": "REJAS",
    "MURO": "MURO",
    "MUROS": "MUROS",
    "PARED": "PARED",
    "PAREDES": "PAREDES",
    "TECHO": "TECHO",
    "TECHOS": "TECHOS",
    "TEJA": "TEJA",
    "TEJAS": "TEJAS",
    "CUBIERTA": "CUBIERTA",
    "CUBIERTAS": "CUBIERTAS",
    "PISO": "PISO",
    "PISOS": "PISOS",
    "LOSA": "LOSA",
    "LOSAS": "LOSAS",
    "ESCALERAS": "ESCALERAS",
    "PASAMANOS": "PASAMANOS",
    "PASILLO": "PASILLO",
    "PASILLOS": "PASILLOS",
    "CORREDOR": "CORREDOR",
    "CORREDORES": "CORREDORES",
    "PATIN": "PATÍN",
    "PATÍN": "PATÍN",
    "PERSONAL": "PERSONAL",
    "PERSONA": "PERSONA",
    "PERSONAS": "PERSONAS",
    "TRABAJADOR": "TRABAJADOR",
    "TRABAJADORES": "TRABAJADORES",
    "COLABORADOR": "COLABORADOR",
    "COLABORADORES": "COLABORADORES",
    "SUPERVISOR": "SUPERVISOR",
    "SUPERVISORES": "SUPERVISORES",
    "COORDINADOR": "COORDINADOR",
    "COORDINADORES": "COORDINADORES",
    "TECNICO": "TÉCNICO",
    "TÉCNICO": "TÉCNICO",
    "TECNICOS": "TÉCNICOS",
    "TÉCNICOS": "TÉCNICOS",
    "OPERADOR": "OPERADOR",
    "OPERADORES": "OPERADORES",
    "OPERARIO": "OPERARIO",
    "OPERARIOS": "OPERARIOS",
    "OBRERO": "OBRERO",
    "OBREROS": "OBREROS",
    "AYUDANTE": "AYUDANTE",
    "AYUDANTES": "AYUDANTES",
    "APRENDIZ": "APRENDIZ",
    "APRENDICES": "APRENDICES",
    "VISITANTE": "VISITANTE",
    "VISITANTES": "VISITANTES",
    "CONTRATISTA": "CONTRATISTA",
    "CONTRATISTAS": "CONTRATISTAS",
    "INGENIERO": "INGENIERO",
    "INGENIEROS": "INGENIEROS",
    "ELECTRICISTA": "ELECTRICISTA",
    "ELECTRICISTAS": "ELECTRICISTAS",
    "MECANICO": "MECÁNICO",
    "MECÁNICO": "MECÁNICO",
    "MECANICOS": "MECÁNICOS",
    "SOLDADOR": "SOLDADOR",
    "SOLDADORES": "SOLDADORES",
    "PAILERO": "PAILERO",
    "PAILEROS": "PAILEROS",
    "CAMPAMENTERO": "CAMPAMENTERO",
    "CAMPAMENTEROS": "CAMPAMENTEROS",
    "BOMBERO": "BOMBERO",
    "BOMBEROS": "BOMBEROS",
    "VIGIA": "VIGÍA",
    "VIGÍA": "VIGÍA",
    "VIGIAS": "VIGÍAS",
    "GUARDA": "GUARDA",
    "GUARDAS": "GUARDAS",
    "CONDUCTOR": "CONDUCTOR",
    "CONDUCTORES": "CONDUCTORES",
    "RECORREDOR": "RECORREDOR",
    "RECORREDORES": "RECORREDORES",
    "RESCATISTA": "RESCATISTA",
    "RESCATISTAS": "RESCATISTAS",
    "AUXILIAR": "AUXILIAR",
    "AUXILIARES": "AUXILIARES",
    "JEFE": "JEFE",
    "JEFES": "JEFES",
    "GERENTE": "GERENTE",
    "GERENTES": "GERENTES",
    "DIRECTOR": "DIRECTOR",
    "DIRECTORES": "DIRECTORES",
    "ESPECIALISTA": "ESPECIALISTA",
    "ESPECIALISTAS": "ESPECIALISTAS",
    "ANALISTA": "ANALISTA",
    "ANALISTAS": "ANALISTAS",
    "INSPECTOR": "INSPECTOR",
    "INSPECTORES": "INSPECTORES",
    "AUDITOR": "AUDITOR",
    "AUDITORES": "AUDITORES",
    "CAJA": "CAJA",
    "CAJAS": "CAJAS",
    "CANECA": "CANECA",
    "CANECAS": "CANECAS",
    "CANASTILLA": "CANASTILLA",
    "CANASTILLAS": "CANASTILLAS",
    "BALDE": "BALDE",
    "BALDES": "BALDES",
    "BIDON": "BIDÓN",
    "BIDÓN": "BIDÓN",
    "BIDONES": "BIDONES",
    "BOTELLA": "BOTELLA",
    "BOTELLAS": "BOTELLAS",
    "ENVASE": "ENVASE",
    "ENVASES": "ENVASES",
    "BOLSA": "BOLSA",
    "BOLSAS": "BOLSAS",
    "BULTO": "BULTO",
    "BULTOS": "BULTOS",
    "SACO": "SACO",
    "SACOS": "SACOS",
    "BIG BAG": "BIG BAG",
    "BIGBAG": "BIG BAG",
    "BIGBAGS": "BIG BAGS",
    "PAQUETE": "PAQUETE",
    "PAQUETES": "PAQUETES",
    "MALETIN": "MALETÍN",
    "MALETÍN": "MALETÍN",
    "MALETA": "MALETA",
    "MALETAS": "MALETAS",
    "MUEBLE": "MUEBLE",
    "MUEBLES": "MUEBLES",
    "ESCRITORIO": "ESCRITORIO",
    "ESCRITORIOS": "ESCRITORIOS",
    "SILLA": "SILLA",
    "SILLAS": "SILLAS",
    "MESA": "MESA",
    "MESAS": "MESAS",
    "ARCHIVADOR": "ARCHIVADOR",
    "ARCHIVADORES": "ARCHIVADORES",
    "GABINETE": "GABINETE",
    "GABINETES": "GABINETES",
    "ESTANTE": "ESTANTE",
    "ESTANTES": "ESTANTES",
    "REPISA": "REPISA",
    "REPISAS": "REPISAS",
    "VENTILADORES": "VENTILADORES",
    "AIRE ACONDICIONADO": "AIRE ACONDICIONADO",
    "BOMBILLO": "BOMBILLO",
    "BOMBILLOS": "BOMBILLOS",
    "LUMINARIAS": "LUMINARIAS",
    "LAMPARAS": "LÁMPARAS",
    "FOCOS": "FOCOS",
    "REFLECTOR": "REFLECTOR",
    "REFLECTORES": "REFLECTORES",
    "TOMACORRIENTE": "TOMACORRIENTE",
    "TOMACORRIENTES": "TOMACORRIENTES",
    "INTERRUPTOR": "INTERRUPTOR",
    "INTERRUPTORES": "INTERRUPTORES",
    "APAGADOR": "APAGADOR",
    "APAGADORES": "APAGADORES",
    "JABON": "JABÓN",
    "JABÓN": "JABÓN",
    "JABONES": "JABONES",
    "DETERGENTE": "DETERGENTE",
    "DETERGENTES": "DETERGENTES",
    "DESINFECTANTE": "DESINFECTANTE",
    "DESINFECTANTES": "DESINFECTANTES",
    "LIMPIADOR": "LIMPIADOR",
    "LIMPIADORES": "LIMPIADORES",
    "CLORO": "CLORO",
    "BLANQUEADOR": "BLANQUEADOR",
    "AMBIENTADOR": "AMBIENTADOR",
    "AMBIENTADORES": "AMBIENTADORES",
    "ESCOBA": "ESCOBA",
    "ESCOBAS": "ESCOBAS",
    "TRAPEROS": "TRAPEROS",
    "TRAPEADOR": "TRAPEADOR",
    "MOPA": "MOPA",
    "MOPAS": "MOPAS",
    "RECOGEDOR": "RECOGEDOR",
    "RECOGEDORES": "RECOGEDORES",
    "CEPILLO": "CEPILLO",
    "CEPILLOS": "CEPILLOS",
    "ESPONJA": "ESPONJA",
    "ESPONJAS": "ESPONJAS",
    "FRANELA": "FRANELA",
    "FRANELAS": "FRANELAS",
    "TOALLA": "TOALLA",
    "TOALLAS": "TOALLAS",
    "PAPEL HIGIENICO": "PAPEL HIGIÉNICO",
    "PAPEL HIGIÉNICO": "PAPEL HIGIÉNICO",
    "SERVILLETA": "SERVILLETA",
    "SERVILLETAS": "SERVILLETAS",
    "BASURA": "BASURA",
    "BASURERO": "BASURERO",
    "BASUREROS": "BASUREROS",
    "RECICLAJE": "RECICLAJE",
    "RECICLABLE": "RECICLABLE",
    "ORGANICO": "ORGÁNICO",
    "ORGÁNICO": "ORGÁNICO",
    "ORGANICOS": "ORGÁNICOS",
    "PELIGROSO": "PELIGROSO",
    "PELIGROSOS": "PELIGROSOS",
    "CONTAMINADO": "CONTAMINADO",
    "CONTAMINADOS": "CONTAMINADOS",
    "RELLENO": "RELLENO",
    "RELLENO SANITARIO": "RELLENO SANITARIO",
    "RADIO": "RADIO",
    "RADIOS": "RADIOS",
    "TELEFONO": "TELÉFONO",
    "TELÉFONO": "TELÉFONO",
    "TELEFONOS": "TELÉFONOS",
    "CELULAR": "CELULAR",
    "CELULARES": "CELULARES",
    "COMPUTADOR": "COMPUTADOR",
    "COMPUTADORES": "COMPUTADORES",
    "COMPUTADORA": "COMPUTADORA",
    "LAPTOP": "LAPTOP",
    "LAPTOPS": "LAPTOPS",
    "MONITOR": "MONITOR",
    "MONITORES": "MONITORES",
    "PANTALLA": "PANTALLA",
    "PANTALLAS": "PANTALLAS",
    "TECLADO": "TECLADO",
    "TECLADOS": "TECLADOS",
    "MOUSE": "MOUSE",
    "IMPRESORA": "IMPRESORA",
    "IMPRESORAS": "IMPRESORAS",
    "ESCANER": "ESCÁNER",
    "ESCÁNER": "ESCÁNER",
    "CAMARA": "CÁMARA",
    "CÁMARA": "CÁMARA",
    "CAMARAS": "CÁMARAS",
    "CCTV": "CCTV",
    "ANTENA": "ANTENA",
    "ANTENAS": "ANTENAS",
    "SATELITE": "SATÉLITE",
    "SATÉLITE": "SATÉLITE",
    "INTERNET": "INTERNET",
    "RED": "RED",
    "REDES": "REDES",
    "WIFI": "WIFI",
    "SEÑAL": "SEÑAL",
    "SEÑALES": "SEÑALES",
    "ENLACE": "ENLACE",
    "ENLACES": "ENLACES",
    "CARPETA": "CARPETA",
    "CARPETAS": "CARPETAS",
    "ARCHIVO": "ARCHIVO",
    "ARCHIVOS": "ARCHIVOS",
    "DOCUMENTO": "DOCUMENTO",
    "DOCUMENTOS": "DOCUMENTOS",
    "HOJA": "HOJA",
    "HOJAS": "HOJAS",
    "PAPEL": "PAPEL",
    "PAPELES": "PAPELES",
    "LIBRO": "LIBRO",
    "LIBROS": "LIBROS",
    "CUADERNO": "CUADERNO",
    "CUADERNOS": "CUADERNOS",
    "LIBRETA": "LIBRETA",
    "LIBRETAS": "LIBRETAS",
    "BOLIGRAFO": "BOLÍGRAFO",
    "BOLÍGRAFO": "BOLÍGRAFO",
    "LAPICERO": "LAPICERO",
    "LAPICEROS": "LAPICEROS",
    "LAPIZ": "LÁPIZ",
    "LÁPIZ": "LÁPIZ",
    "LAPICES": "LÁPICES",
    "MARCADOR": "MARCADOR",
    "MARCADORES": "MARCADORES",
    "BORRADOR": "BORRADOR",
    "BORRADORES": "BORRADORES",
    "REGLA": "REGLA",
    "REGLAS": "REGLAS",
    "TIJERAS": "TIJERAS",
    "CINTA": "CINTA",
    "CINTAS": "CINTAS",
    "PEGANTE": "PEGANTE",
    "PEGANTES": "PEGANTES",
    "COLBON": "COLBÓN",
    "COLBÓN": "COLBÓN",
    "GRAPADORA": "GRAPADORA",
    "GRAPAS": "GRAPAS",
    "PERFORADORA": "PERFORADORA",
    "TIMBRE": "TIMBRE",
    "FIRMA": "FIRMA",
    "FIRMAS": "FIRMAS",
    "FOTOCOPIA": "FOTOCOPIA",
    "FOTOCOPIAS": "FOTOCOPIAS",
    "ESCANEO": "ESCANEO",
    "ESCANEOS": "ESCANEOS"
};

// ==========================================
// ✅ FUNCIÓN: AUTOCORREGIR TEXTO
// ==========================================
function autocorregirTexto(texto) {
    if (!texto) return '';
    
    let resultado = String(texto).trim();
    resultado = resultado.replace(/\s+/g, ' ');
    
    const lineas = resultado.split('\n');
    const lineasCorregidas = lineas.map(function(linea) {
        return linea.split(/\s+/).map(function(palabra) {
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
// ✅ SISTEMA DE SUGERENCIAS
// ==========================================
function obtenerSugerencias(texto) {
    if (!texto || texto.length < 2) return [];
    
    const textoUpper = texto.toUpperCase().trim();
    const palabras = textoUpper.split(/\s+/);
    const ultimaPalabra = palabras[palabras.length - 1] || '';
    
    if (ultimaPalabra.length < 2) return [];
    
    const sugerencias = [];
    const yaAgregadas = {};
    
    if (DICCIONARIO_CORRECCION[ultimaPalabra]) {
        const sugerencia = DICCIONARIO_CORRECCION[ultimaPalabra];
        if (sugerencia !== ultimaPalabra && !yaAgregadas[sugerencia]) {
            sugerencias.push({
                original: ultimaPalabra,
                sugerencia: sugerencia,
                tipo: 'correccion'
            });
            yaAgregadas[sugerencia] = true;
        }
    }
    
    const claves = Object.keys(DICCIONARIO_CORRECCION);
    for (let i = 0; i < claves.length; i++) {
        if (sugerencias.length >= 5) break;
        const clave = claves[i];
        if (clave.indexOf(ultimaPalabra) === 0 && clave !== ultimaPalabra) {
            const sugerencia = DICCIONARIO_CORRECCION[clave];
            if (!yaAgregadas[sugerencia] && sugerencia !== ultimaPalabra) {
                sugerencias.push({
                    original: clave,
                    sugerencia: sugerencia,
                    tipo: 'sugerencia'
                });
                yaAgregadas[sugerencia] = true;
            }
        }
    }
    
    for (let i = 0; i < claves.length; i++) {
        if (sugerencias.length >= 5) break;
        const clave = claves[i];
        if (clave.indexOf(ultimaPalabra) > 0 && clave !== ultimaPalabra) {
            const sugerencia = DICCIONARIO_CORRECCION[clave];
            if (!yaAgregadas[sugerencia] && sugerencia !== ultimaPalabra) {
                sugerencias.push({
                    original: clave,
                    sugerencia: sugerencia,
                    tipo: 'similar'
                });
                yaAgregadas[sugerencia] = true;
            }
        }
    }
    
    return sugerencias.slice(0, 5);
}

// ==========================================
// ✅ APLICAR SUGERENCIA
// ==========================================
function aplicarSugerencia(inputId, sugerencia) {
    const input = document.getElementById(inputId);
    if (!input) return;
    
    let texto = input.value;
    const textoUpper = texto.toUpperCase();
    const ultimaPalabra = textoUpper.split(/\s+/).pop() || '';
    
    const posicion = textoUpper.lastIndexOf(ultimaPalabra);
    const textoAntes = texto.substring(0, posicion);
    
    input.value = textoAntes + sugerencia.sugerencia + ' ';
    input.focus();
    
    const len = input.value.length;
    if (input.setSelectionRange) {
        input.setSelectionRange(len, len);
    }
    
    ocultarSugerencias(inputId);
}

// ==========================================
// ✅ MOSTRAR SUGERENCIAS
// ==========================================
function mostrarSugerencias(inputId) {
    const input = document.getElementById(inputId);
    const box = document.getElementById('sugerencias-' + inputId);
    
    if (!input || !box) return;
    
    const sugerencias = obtenerSugerencias(input.value);
    
    if (sugerencias.length === 0) {
        ocultarSugerencias(inputId);
        return;
    }
    
    box.innerHTML = '';
    for (let i = 0; i < sugerencias.length; i++) {
        const sug = sugerencias[i];
        const item = document.createElement('div');
        item.className = 'suggestion-item' + (i === 0 ? ' selected' : '');
        item.innerHTML = '<span class="suggestion-icon">✨</span>' +
                        '<span class="suggestion-text">' + sug.sugerencia + '</span>' +
                        '<span class="suggestion-hint">Tab</span>';
        
        (function(inputIdLocal, sugLocal) {
            item.onclick = function() {
                aplicarSugerencia(inputIdLocal, sugLocal);
            };
        })(inputId, sug);
        
        box.appendChild(item);
    }
    
    box.classList.add('active');
}

// ==========================================
// ✅ OCULTAR SUGERENCIAS
// ==========================================
function ocultarSugerencias(inputId) {
    const box = document.getElementById('sugerencias-' + inputId);
    if (box) {
        box.classList.remove('active');
    }
}

// ==========================================
// ✅ MANEJO DE TECLADO
// ==========================================
function manejarTecladoSugerencias(event, inputId) {
    const box = document.getElementById('sugerencias-' + inputId);
    if (!box || !box.classList.contains('active')) return;
    
    const items = box.querySelectorAll('.suggestion-item');
    let selectedIndex = -1;
    for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains('selected')) {
            selectedIndex = i;
            break;
        }
    }
    
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

// ==========================================
// ✅ INICIALIZAR SUGERENCIAS
// ==========================================
function inicializarSugerencias(inputId) {
    const input = document.getElementById(inputId);
    if (!input) return;
    
    input.addEventListener('input', function() {
        mostrarSugerencias(inputId);
    });
    
    input.addEventListener('keydown', function(event) {
        manejarTecladoSugerencias(event, inputId);
    });
    
    input.addEventListener('blur', function() {
        setTimeout(function() {
            ocultarSugerencias(inputId);
        }, 200);
    });
}

// ==========================================
// ✅ DETECTAR SI ES MÓVIL
// ==========================================
function esDispositivoMovil() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
        || window.innerWidth <= 768
        || ('ontouchstart' in window);
}

// ==========================================
// ✅ BOTÓN FLOTANTE (FAB)
// ==========================================
function inicializarFAB() {
    const fab = document.getElementById('fab-new-activity');
    if (!fab) return;
    
    if (esDispositivoMovil()) {
        fab.classList.add('visible');
    } else {
        fab.classList.remove('visible');
    }
    
    window.addEventListener('resize', function() {
        if (esDispositivoMovil()) {
            fab.classList.add('visible');
        } else {
            fab.classList.remove('visible');
        }
    });
}

// ==========================================
// ✅ GESTOS TÁCTILES - SWIPE EN FILAS
// ==========================================
function inicializarGestosTactiles() {
    if (!esDispositivoMovil()) return;
    
    const tbody = document.getElementById('table-body');
    if (!tbody) return;
    
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;
    let filaActual = null;
    let swiping = false;
    
    tbody.addEventListener('touchstart', function(e) {
        const fila = e.target.closest('tr');
        if (!fila) return;
        
        const touch = e.touches[0];
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
        touchStartTime = Date.now();
        filaActual = fila;
        swiping = false;
    }, { passive: true });
    
    tbody.addEventListener('touchmove', function(e) {
        if (!filaActual) return;
        
        const touch = e.touches[0];
        const deltaX = touch.clientX - touchStartX;
        const deltaY = touch.clientY - touchStartY;
        
        if (Math.abs(deltaY) > Math.abs(deltaX)) return;
        
        if (deltaX < -10 && deltaX > -120) {
            swiping = true;
            filaActual.classList.add('swiping');
            filaActual.style.transform = 'translateX(' + deltaX + 'px)';
            
            if (deltaX < -50) {
                filaActual.classList.add('swipe-left');
            } else {
                filaActual.classList.remove('swipe-left');
            }
        }
    }, { passive: true });
    
    tbody.addEventListener('touchend', function(e) {
        if (!filaActual) return;
        
        const touch = e.changedTouches[0];
        const deltaX = touch.clientX - touchStartX;
        const tiempoTranscurrido = Date.now() - touchStartTime;
        
        filaActual.classList.remove('swiping');
        
        if (swiping && deltaX < -80 && tiempoTranscurrido < 800) {
            const editBtn = filaActual.querySelector('.btn-edit');
            if (editBtn) {
                editBtn.click();
            }
        }
        
        setTimeout(function() {
            if (filaActual) {
                filaActual.style.transform = '';
                filaActual.classList.remove('swipe-left');
            }
            filaActual = null;
            swiping = false;
        }, 150);
    }, { passive: true });
}

// ==========================================
// ✅ PULL TO REFRESH
// ==========================================
function inicializarPullToRefresh() {
    if (!esDispositivoMovil()) return;
    
    const indicador = document.getElementById('pull-to-refresh-indicator');
    if (!indicador) return;
    
    let startY = 0;
    let pulling = false;
    const umbral = 80;
    
    document.addEventListener('touchstart', function(e) {
        if (window.scrollY === 0) {
            startY = e.touches[0].clientY;
            pulling = true;
        }
    }, { passive: true });
    
    document.addEventListener('touchmove', function(e) {
        if (!pulling) return;
        
        const deltaY = e.touches[0].clientY - startY;
        
        if (deltaY > umbral && window.scrollY === 0) {
            indicador.classList.add('visible');
        }
    }, { passive: true });
    
    document.addEventListener('touchend', function(e) {
        if (!pulling) return;
        
        const deltaY = e.changedTouches[0].clientY - startY;
        
        if (deltaY > umbral && window.scrollY === 0) {
            loadData();
            
            setTimeout(function() {
                indicador.classList.remove('visible');
            }, 1000);
        } else {
            indicador.classList.remove('visible');
        }
        
        pulling = false;
        startY = 0;
    }, { passive: true });
}

// ==========================================
// ESTADO GLOBAL
// ==========================================
let allRecords = [];
let sortState = { field: '', direction: 'asc' };
let isAdmin = false;

// ==========================================
// FECHA EN ZONA HORARIA COLOMBIA (UTC-5)
// ==========================================
function getFechaColombia() {
    const fecha = new Date();
    const fechaColombia = new Date(fecha.getTime() - (5 * 60 * 60 * 1000));
    return fechaColombia.toISOString().split('T')[0];
}

// ==========================================
// CONVERTIR FECHA
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
// CONVERTIR AVANCE
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
    textInputs.forEach(function(id) {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('input', function() {
                toUpperCaseInput(this);
            });
        }
    });
    
    inicializarSugerencias('f-descripcion');
    inicializarSugerencias('f-area');
    inicializarSugerencias('f-ejecutante');
    
    inicializarFAB();
    inicializarGestosTactiles();
    inicializarPullToRefresh();
    
    renderTable([]);
    
    if (localStorage.getItem('isAdminLoggedIn') === 'true') {
        adminLoginSuccess();
    }
    
    if (!sessionStorage.getItem('welcomeShown')) {
        setTimeout(function() {
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
    
    document.addEventListener('click', function(event) {
        const inputs = ['f-descripcion', 'f-area', 'f-ejecutante'];
        for (let i = 0; i < inputs.length; i++) {
            const id = inputs[i];
            const input = document.getElementById(id);
            const box = document.getElementById('sugerencias-' + id);
            if (input && box && !input.contains(event.target) && !box.contains(event.target)) {
                ocultarSugerencias(id);
            }
        }
    });
};

// ==========================================
// CERRAR BIENVENIDA
// ==========================================
function closeWelcomeModal() {
    document.getElementById('welcome-modal').style.display = 'none';
}

// ==========================================
// MODAL AGRADECIMIENTO
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
        mensaje.textContent = 'Tu actividad ha sido guardada correctamente.';
        badge.innerHTML = '✅ Actividad registrada exitosamente';
        hint.innerHTML = '💡 Recuerda: puedes verificarla haciendo clic en el botón <strong>📅 Hoy</strong>';
    }
    
    modal.style.display = 'flex';
    
    setTimeout(function() {
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
        'descripcion': 'Escribe una descripción. Verás sugerencias automáticas mientras escribes.',
        'tag': 'Escribe el TAG identificador del equipo.',
        'prog': 'Selecciona P si es Programada, o NP si es No Programada.',
        'estacion': 'Selecciona la estación.',
        'avance': 'Escribe el porcentaje (0-100).',
        'ot': 'Escribe la Orden de Trabajo.',
        'ejecutante': 'Escribe los nombres, uno por línea.',
        'subarea': 'Selecciona la subárea.',
        'fecha': 'La fecha se llena automáticamente.',
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
// LEER DATOS (JSONP)
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
            let filtered = allRecords.slice();
            
            if (isAdmin) {
                const subareaFilter = document.getElementById('filter-subarea').value;
                const searchTerm = document.getElementById('search-descripcion').value;
                const estacionFilter = document.getElementById('filter-estacion').value;
                const progFilter = document.getElementById('filter-prog').value;
                const dateFrom = document.getElementById('filter-date-from').value;
                const dateTo = document.getElementById('filter-date-to').value;
                
                if (subareaFilter) filtered = filtered.filter(function(r) { return String(r['SUBÁREA'] || '').toUpperCase() === subareaFilter; });
                if (searchTerm) filtered = filtered.filter(function(r) { return String(r['Descripción'] || '').toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1; });
                if (estacionFilter) filtered = filtered.filter(function(r) { return String(r['ESTACION'] || '').toUpperCase() === estacionFilter; });
                if (progFilter) filtered = filtered.filter(function(r) { return String(r['PROG/NÓ PROG'] || '').toUpperCase() === progFilter; });
                if (dateFrom) filtered = filtered.filter(function(r) { return formatearFecha(r['FECHA']) >= dateFrom; });
                if (dateTo) filtered = filtered.filter(function(r) { return formatearFecha(r['FECHA']) <= dateTo; });
            } else {
                const userSubareaFilter = document.getElementById('user-filter-subarea').value;
                const userDateFrom = document.getElementById('user-date-from').value;
                const userDateTo = document.getElementById('user-date-to').value;
                
                if (userSubareaFilter) filtered = filtered.filter(function(r) { return String(r['SUBÁREA'] || '').toUpperCase() === userSubareaFilter; });
                if (userDateFrom) filtered = filtered.filter(function(r) { return formatearFecha(r['FECHA']) >= userDateFrom; });
                if (userDateTo) filtered = filtered.filter(function(r) { return formatearFecha(r['FECHA']) <= userDateTo; });
            }
            
            const subareasOrder = [
                "MECANICA", "INSTRUMENTACIÓN", "CANVAS INSTRUMENT", "ELÉCTRICO", 
                "VALVULAS PSV Y PVV", "A&C", "CBM", "VSD", "FACILIDADES", 
                "OBREROS DE PATIO", "CAMPAMENTERO", "HSEQ"
            ];
            
            filtered.sort(function(a, b) {
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
                document.getElementById('activity-counter').innerText = filtered.length + ' actividades encontradas';
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
    
    setTimeout(function() {
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
    
    records.forEach(function(rec) {
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
        
        const row = '<tr class="' + rowClass + '">' +
            '<td>' + String(rec['Descripción'] || '').toUpperCase() + '</td>' +
            '<td>' + String(rec['TAG'] || '').toUpperCase() + '</td>' +
            '<td>' + String(rec['PROG/NÓ PROG'] || '').toUpperCase() + '</td>' +
            '<td>' + String(rec['ESTACION'] || '').toUpperCase() + '</td>' +
            '<td>' + avance + '</td>' +
            '<td>' + String(rec['OT'] || '').toUpperCase() + '</td>' +
            '<td>' + String(rec['EJECUTANTE'] || '').toUpperCase() + '</td>' +
            '<td>' + String(rec['SUBÁREA'] || '').toUpperCase() + '</td>' +
            '<td>' + fechaTexto + '</td>' +
            '<td>' + String(rec['AREA'] || '').toUpperCase() + '</td>' +
            '<td class="actions">' +
                '<button class="btn-edit" onclick="editRecord(\'' + idSeguro + '\')">Editar</button>' +
            '</td>' +
        '</tr>';
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
    
    document.querySelectorAll('th').forEach(function(th) { th.innerHTML = th.innerHTML.replace(' ⬆', ' ⬍').replace(' ⬇', ' ⬍'); });
    const clickedTh = Array.from(document.querySelectorAll('th')).find(function(th) { return th.innerText.indexOf(field) !== -1; });
    if (clickedTh) clickedTh.innerHTML = clickedTh.innerHTML.replace(' ⬍', sortState.direction === 'asc' ? ' ⬆' : ' ⬇');
}

function sortRecords(records) {
    const sorted = records.slice().sort(function(a, b) {
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
    
    const aviso = document.getElementById('aviso-dia-siguiente');
    if (aviso) aviso.style.display = 'none';
    
    const textInputs = ['f-descripcion', 'f-tag', 'f-avance', 'f-ot', 'f-area'];
    textInputs.forEach(function(id) { document.getElementById(id).value = ''; });
    
    document.getElementById('f-prog').value = '';
    document.getElementById('f-estacion').value = '';
    document.getElementById('f-subarea').value = '';
    document.getElementById('f-ejecutante').value = '';
    
    document.getElementById('modal').style.display = 'flex';
}

// ==========================================
// ✅ MODAL PROGRAMAR ACTIVIDAD PARA MAÑANA
// ==========================================
function openModalDiaSiguiente() {
    const ahoraUTC = new Date();
    const ahoraColombia = new Date(ahoraUTC.getTime() - (5 * 60 * 60 * 1000));
    const mananaColombia = new Date(ahoraColombia.getTime() + (24 * 60 * 60 * 1000));
    const fechaManana = mananaColombia.toISOString().split('T')[0];
    
    openModal();
    
    document.getElementById('f-fecha').value = fechaManana;
    document.getElementById('f-fecha').style.backgroundColor = '#fef3c7';
    document.getElementById('f-fecha').style.fontWeight = 'bold';
    
    document.getElementById('modal-title').innerText = '📅 Programar Actividad para Mañana';
    document.getElementById('record-id').dataset.diaSiguiente = 'true';
    
    const aviso = document.getElementById('aviso-dia-siguiente');
    if (aviso) aviso.style.display = 'block';
}

// ==========================================
// MODAL EDITAR
// ==========================================
function editRecord(id) {
    const rec = allRecords.find(function(r) { return String(r.id) === String(id); });
    if (!rec) {
        alert('No se encontró el registro');
        return;
    }
    
    document.getElementById('modal-title').innerText = 'Editar Actividad';
    document.getElementById('record-id').value = id;
    document.getElementById('record-id').removeAttribute('data-dia-siguiente');
    
    const aviso = document.getElementById('aviso-dia-siguiente');
    if (aviso) aviso.style.display = 'none';
    
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
// GUARDAR
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
        
        const descripcionCorregida = autocorregirTexto(document.getElementById('f-descripcion').value.toUpperCase());
        const areaCorregida = autocorregirTexto(document.getElementById('f-area').value.toUpperCase());
        
        const ejecutantesCorregidos = document.getElementById('f-ejecutante').value
            .split('\n')
            .map(function(nombre) { return autocorregirTexto(nombre.trim().toUpperCase()); })
            .filter(function(nombre) { return nombre !== ''; })
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
            ? Object.assign({ accion: "actualizar", id: id }, fields)
            : Object.assign({ accion: "crear" }, fields);

        console.log('=== ENVIANDO ===');
        console.log('ID:', id);
        console.log('Acción:', payload.accion);

        await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(payload)
        });
        
        closeModal();
        showSuccessModal(esDiaSiguiente);
        setTimeout(function() { loadData(); }, 1000);
        
    } catch (error) {
        console.error('❌ Error:', error);
        alert('Error de conexión: ' + error.message);
    } finally {
        btnGuardar.disabled = false;
        btnGuardar.innerHTML = textoOriginal;
    }
}

// ==========================================
// ELIMINAR
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
        
        alert('✅ Actividad eliminada');
        setTimeout(function() { loadData(); }, 1000);
        
    } catch (error) {
        console.error('❌ Error:', error);
        alert('Error de conexión: ' + error.message);
    }
}

// ==========================================
// EXPORTAR EXCEL CON BLOQUES Y BORDES DOBLES
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
    
    let filtered = allRecords.slice();
    if (fromDate) filtered = filtered.filter(function(r) { return formatearFecha(r['FECHA']) >= fromDate; });
    if (toDate) filtered = filtered.filter(function(r) { return formatearFecha(r['FECHA']) <= toDate; });
    
    if (filtered.length === 0) {
        alert('No hay actividades en el rango seleccionado.');
        closeExportModal();
        return;
    }
    
    const subareasOrder = [
        "MECANICA", "INSTRUMENTACIÓN", "CANVAS INSTRUMENT", "ELÉCTRICO", 
        "VALVULAS PSV Y PVV", "A&C", "CBM", "VSD", "FACILIDADES", 
        "OBREROS DE PATIO", "CAMPAMENTERO", "HSEQ"
    ];
    
    const groupedData = {};
    subareasOrder.forEach(function(area) { groupedData[area] = []; });
    
    filtered.forEach(function(rec) {
        const subarea = String(rec['SUBÁREA'] || '').toUpperCase().trim();
        if (groupedData[subarea]) groupedData[subarea].push(rec);
    });
    
    const rowsPerArea = 10;
    const exportDate = getFechaColombia();
    const headers = ["AREA", "AREA O SISTEMA", "DESCRIPCION DE ACTIVIDAD", "TAG", "PROG/NO PROG", "ESTACION", "AVANCE", "OT", "EJECUTANTE"];
    const aoaData = [["FECHA", exportDate], headers];
    
    subareasOrder.forEach(function(area) {
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
    
    // ==========================================
    // ✅ ESTILOS DE BORDE
    // ==========================================
    
    const borderDoble = {
        top: { style: "double", color: { rgb: "000000" } },
        bottom: { style: "double", color: { rgb: "000000" } },
        left: { style: "double", color: { rgb: "000000" } },
        right: { style: "double", color: { rgb: "000000" } }
    };
    
    // ==========================================
    // ✅ FILA 1: FECHA (borde doble)
    // ==========================================
    ws['A1'].s = { fill: { fgColor: { rgb: "FF0000" } }, font: { color: { rgb: "FFFFFF" }, bold: true }, alignment: { horizontal: "center", vertical: "center" }, border: borderDoble };
    ws['B1'].s = { fill: { fgColor: { rgb: "FF0000" } }, font: { color: { rgb: "FFFFFF" }, bold: true }, alignment: { horizontal: "center", vertical: "center" }, border: borderDoble };
    
    // ==========================================
    // ✅ FILA 2: ENCABEZADOS (borde doble)
    // ==========================================
    headers.forEach(function(h, i) {
        const cell = XLSX.utils.encode_cell({ r: 1, c: i });
        ws[cell].s = { 
            fill: { fgColor: { rgb: "FF0000" } }, 
            font: { color: { rgb: "FFFFFF" }, bold: true }, 
            alignment: { horizontal: "center", vertical: "center" }, 
            border: borderDoble 
        };
    });
    
    // ==========================================
    // ✅ BLOQUES POR SUBÁREA CON BORDE DOBLE EXTERIOR
    // ==========================================
    let areaStartRow = 2;
    subareasOrder.forEach(function(area) {
        const recordsOfArea = groupedData[area] || [];
        const totalRows = Math.max(rowsPerArea, recordsOfArea.length);
        const areaEndRow = areaStartRow + totalRows - 1;
        
        // Combinar celdas de la columna A
        ws['!merges'] = ws['!merges'] || [];
        ws['!merges'].push({ s: { r: areaStartRow, c: 0 }, e: { r: areaEndRow, c: 0 } });
        
        // ==========================================
        // ✅ COLUMNA A (Subárea) - Borde doble en TODOS los lados
        // ==========================================
        for (let r = areaStartRow; r <= areaEndRow; r++) {
            const cell = XLSX.utils.encode_cell({ r: r, c: 0 });
            if (ws[cell]) {
                let borderA = {
                    top: r === areaStartRow ? { style: "double", color: { rgb: "000000" } } : { style: "thin", color: { rgb: "000000" } },
                    bottom: r === areaEndRow ? { style: "double", color: { rgb: "000000" } } : { style: "thin", color: { rgb: "000000" } },
                    left: { style: "double", color: { rgb: "000000" } },
                    right: { style: "double", color: { rgb: "000000" } }
                };
                ws[cell].s = { 
                    fill: { fgColor: { rgb: "FF0000" } }, 
                    font: { color: { rgb: "FFFFFF" }, bold: true, size: 10 }, 
                    alignment: { horizontal: "center", vertical: "center", wrapText: true }, 
                    border: borderA 
                };
            }
        }
        
        // ==========================================
        // ✅ COLUMNAS B-I (Datos) - Borde doble en exteriores del bloque
        // ==========================================
        for (let r = areaStartRow; r <= areaEndRow; r++) {
            for (let c = 1; c < 9; c++) {
                const cell = XLSX.utils.encode_cell({ r: r, c: c });
                if (ws[cell]) {
                    let borderCelda = {
                        top: r === areaStartRow ? { style: "double", color: { rgb: "000000" } } : { style: "thin", color: { rgb: "000000" } },
                        bottom: r === areaEndRow ? { style: "double", color: { rgb: "000000" } } : { style: "thin", color: { rgb: "000000" } },
                        left: { style: "thin", color: { rgb: "000000" } },
                        right: c === 8 ? { style: "double", color: { rgb: "000000" } } : { style: "thin", color: { rgb: "000000" } }
                    };
                    
                    ws[cell].s = { 
                        fill: { fgColor: { rgb: "FFFFFF" } }, 
                        font: { color: { rgb: "000000" } }, 
                        alignment: { horizontal: "left", vertical: "center", wrapText: true }, 
                        border: borderCelda 
                    };
                }
            }
        }
        
        areaStartRow = areaEndRow + 1;
    });
    
    ws['!cols'] = [{ wch: 15 }, { wch: 20 }, { wch: 50 }, { wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 15 }, { wch: 25 }];
    ws['!rows'] = [{ hpt: 25 }, { hpt: 25 }];
    
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Actividades");
    XLSX.writeFile(wb, 'Actividades_' + (fromDate || 'inicio') + '_' + (toDate || 'hoy') + '.xlsx');
    
    closeExportModal();
}

// ==========================================
// QR
// ==========================================
function showQRModal() {
    document.getElementById('qr-modal').style.display = 'flex';
    const appUrl = window.location.origin + window.location.pathname;
    const qrImg = '<img src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=' + encodeURIComponent(appUrl) + '" alt="QR Code" style="width: 250px; height: 250px;">';
    document.getElementById('qr-code').innerHTML = qrImg;
}

function closeQRModal() {
    document.getElementById('qr-modal').style.display = 'none';
}

function downloadQR() {
    const appUrl = window.location.origin + window.location.pathname;
    const url = 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=' + encodeURIComponent(appUrl);
    const link = document.createElement('a');
    link.download = 'QR_App_GestionActividades.png';
    link.href = url;
    link.click();
}