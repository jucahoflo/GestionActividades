// CONFIGURACIÓN AIRTABLE
// El token se lee desde el HTML (window.AIRTABLE_TOKEN) para que GitHub no lo detecte
const API_TOKEN = window.AIRTABLE_TOKEN || '';
const BASE_ID = 'appNFr6ryy3Sx1qlF';
const TABLE_NAME = 'Actividades';
const API_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;

// ESTADO GLOBAL
let allRecords = [];
let sortState = { field: '', direction: 'asc' };
let isAdmin = false;

// ==========================================
// CONVERTIR A MAYÚSCULAS AUTOMÁTICAMENTE
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
    
    // Configurar los inputs de texto para que conviertan a mayúsculas mientras se escribe
    const textInputs = ['f-descripcion', 'f-tag', 'f-avance', 'f-ot', 'f-area', 'f-ejecutante'];
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
};

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
    
    renderTable([]);
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
    document.getElementById('user-name-select').value = '';
    
    renderTable([]);
}

// ==========================================
// CRUD AIRTABLE - SOLO CARGA CUANDO HAY FILTROS
// ==========================================
async function loadData() {
    const subareaFilter = isAdmin ? document.getElementById('filter-subarea').value : '';
    const searchTerm = isAdmin ? document.getElementById('search-descripcion').value : '';
    const estacionFilter = isAdmin ? document.getElementById('filter-estacion').value : '';
    const progFilter = isAdmin ? document.getElementById('filter-prog').value : '';
    const dateFrom = isAdmin ? document.getElementById('filter-date-from').value : '';
    const dateTo = isAdmin ? document.getElementById('filter-date-to').value : '';
    
    const userName = isAdmin ? '' : document.getElementById('user-name-select').value;
    const today = new Date().toISOString().split('T')[0];
    
    let conditions = [];
    
    if (isAdmin) {
        if (subareaFilter) conditions.push(`{SUBÁREA}='${subareaFilter}'`);
        if (searchTerm) conditions.push(`SEARCH("${searchTerm.toUpperCase()}", {Descripción}) != ""`);
        if (estacionFilter) conditions.push(`{ESTACION}='${estacionFilter}'`);
        if (progFilter) conditions.push(`{PROG/NÓ PROG}='${progFilter}'`);
        if (dateFrom) conditions.push(`{FECHA} >= '${dateFrom}'`);
        if (dateTo) conditions.push(`{FECHA} <= '${dateTo}'`);
    } else {
        if (userName) {
            conditions.push(`{EJECUTANTE}='${userName}'`);
            conditions.push(`{FECHA}='${today}'`);
        } else {
            renderTable([]);
            return;
        }
    }
    
    if (isAdmin && conditions.length === 0) {
        renderTable([]);
        return;
    }
    
    if (conditions.length > 0) {
        const filterFormula = `AND(${conditions.join(', ')})`;
        
        try {
            const response = await fetch(`${API_URL}?filterByFormula=${encodeURIComponent(filterFormula)}`, {
                headers: { 'Authorization': `Bearer ${API_TOKEN}` }
            });
            
            if (!response.ok) {
                const errorData = await response.json();
                console.error("Error detallado de Airtable:", errorData);
                alert(`Error de Airtable: ${errorData.error?.message || 'Error desconocido. Revisa la consola (F12).'}`);
                return;
            }
            
            const data = await response.json();
            allRecords = data.records;
            
            if (sortState.field) {
                sortRecords();
            } else {
                renderTable(allRecords);
            }
            
        } catch (error) {
            console.error('Error cargando datos:', error);
            alert('Error al conectar con Airtable. Revisa tu token.');
        }
    }
}

// ==========================================
// RENDER TABLA
// ==========================================
function renderTable(records) {
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = '';
    
    records.forEach(rec => {
        const f = rec.fields;
        const row = `
        <tr>
            <td>${f['Descripción'] ? f['Descripción'].toUpperCase() : ''}</td>
            <td>${f['TAG'] ? f['TAG'].toUpperCase() : ''}</td>
            <td>${f['PROG/NÓ PROG'] ? f['PROG/NÓ PROG'].toUpperCase() : ''}</td>
            <td>${f['ESTACION'] ? f['ESTACION'].toUpperCase() : ''}</td>
            <td>${f['AVANCE'] ? f['AVANCE'].toUpperCase() : ''}</td>
            <td>${f['OT'] ? f['OT'].toUpperCase() : ''}</td>
            <td>${f['EJECUTANTE'] ? f['EJECUTANTE'].toUpperCase() : ''}</td>
            <td>${f['SUBÁREA'] ? f['SUBÁREA'].toUpperCase() : ''}</td>
            <td>${f['FECHA'] || ''}</td>
            <td>${f['AREA'] ? f['AREA'].toUpperCase() : ''}</td>
            <td class="actions">
                <button class="btn-edit" onclick="editRecord('${rec.id}')">Editar</button>
                ${isAdmin ? `<button class="btn-delete" onclick="deleteRecord('${rec.id}')">Eliminar</button>` : ''}
            </td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

// ==========================================
// ORDENAR TABLA
// ==========================================
function sortTable(field) {
    if (sortState.field === field) {
        sortState.direction = sortState.direction === 'asc' ? 'desc' : 'asc';
    } else {
        sortState.field = field;
        sortState.direction = 'asc';
    }
    sortRecords();
    
    document.querySelectorAll('th').forEach(th => th.innerHTML = th.innerHTML.replace(' ⬆', ' ⬍').replace(' ⬇', ' ⬍'));
    const clickedTh = [...document.querySelectorAll('th')].find(th => th.innerText.includes(field));
    if (clickedTh) clickedTh.innerHTML = clickedTh.innerHTML.replace(' ⬍', sortState.direction === 'asc' ? ' ⬆' : ' ⬇');
}

function sortRecords() {
    const sorted = [...allRecords].sort((a, b) => {
        let valA = (a.fields[sortState.field] || '').toString().toLowerCase();
        let valB = (b.fields[sortState.field] || '').toString().toLowerCase();
        
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

// ==========================================
// FILTROS Y BÚSQUEDA (SOLO ADMIN)
// ==========================================
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
// MODAL Y FORMULARIO
// ==========================================
function openModal() {
    document.getElementById('modal-title').innerText = 'Nueva Actividad';
    document.getElementById('record-id').value = '';
    
    const textInputs = ['f-descripcion', 'f-tag', 'f-avance', 'f-ot', 'f-area'];
    textInputs.forEach(id => document.getElementById(id).value = '');
    
    document.getElementById('f-prog').value = '';
    document.getElementById('f-estacion').value = '';
    document.getElementById('f-ejecutante').value = '';
    document.getElementById('f-subarea').value = '';
    document.getElementById('f-fecha').value = '';
    
    if (!isAdmin) {
        const selectedUser = document.getElementById('user-name-select').value;
        if (selectedUser) {
            document.getElementById('f-ejecutante').value = selectedUser;
            document.getElementById('f-fecha').value = new Date().toISOString().split('T')[0];
        }
    }
    
    document.getElementById('modal').style.display = 'flex';
}

function editRecord(id) {
    fetch(`${API_URL}/${id}`, { headers: { 'Authorization': `Bearer ${API_TOKEN}` } })
    .then(res => res.json())
    .then(rec => {
        const f = rec.fields;
        document.getElementById('modal-title').innerText = 'Editar Actividad';
        document.getElementById('record-id').value = id;
        document.getElementById('f-descripcion').value = f['Descripción'] ? f['Descripción'].toUpperCase() : '';
        document.getElementById('f-tag').value = f['TAG'] ? f['TAG'].toUpperCase() : '';
        document.getElementById('f-prog').value = f['PROG/NÓ PROG'] ? f['PROG/NÓ PROG'].toUpperCase() : '';
        document.getElementById('f-estacion').value = f['ESTACION'] ? f['ESTACION'].toUpperCase() : '';
        document.getElementById('f-avance').value = f['AVANCE'] ? f['AVANCE'].toUpperCase() : '';
        document.getElementById('f-ot').value = f['OT'] ? f['OT'].toUpperCase() : '';
        document.getElementById('f-ejecutante').value = f['EJECUTANTE'] ? f['EJECUTANTE'].toUpperCase() : '';
        document.getElementById('f-subarea').value = f['SUBÁREA'] ? f['SUBÁREA'].toUpperCase() : '';
        document.getElementById('f-fecha').value = f['FECHA'] || '';
        document.getElementById('f-area').value = f['AREA'] ? f['AREA'].toUpperCase() : '';
        document.getElementById('modal').style.display = 'flex';
    });
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// ==========================================
// VALIDACIÓN
// ==========================================
function validateForm() {
    const descripcion = document.getElementById('f-descripcion').value.trim().toUpperCase();
    const prog = document.getElementById('f-prog').value;
    const estacion = document.getElementById('f-estacion').value;
    const ejecutante = document.getElementById('f-ejecutante').value.trim().toUpperCase();
    const subarea = document.getElementById('f-subarea').value;
    const fecha = document.getElementById('f-fecha').value;

    if (!descripcion || !prog || !estacion || !ejecutante || !subarea || !fecha) {
        alert('Por favor, completa los campos obligatorios: Descripción, PROG/NP, Estación, Ejecutante, Subárea y Fecha.');
        return false;
    }
    return true;
}

// ==========================================
// SAVE (CREATE / UPDATE)
// ==========================================
async function saveRecord() {
    if (!validateForm()) return;

    const id = document.getElementById('record-id').value;
    const fields = {
        "Descripción": document.getElementById('f-descripcion').value.trim().toUpperCase(),
        "TAG": document.getElementById('f-tag').value.trim().toUpperCase(),
        "PROG/NÓ PROG": document.getElementById('f-prog').value,
        "ESTACION": document.getElementById('f-estacion').value,
        "AVANCE": document.getElementById('f-avance').value.trim().toUpperCase(),
        "OT": document.getElementById('f-ot').value.trim().toUpperCase(),
        "EJECUTANTE": document.getElementById('f-ejecutante').value.trim().toUpperCase(),
        "SUBÁREA": document.getElementById('f-subarea').value,
        "FECHA": document.getElementById('f-fecha').value,
        "AREA": document.getElementById('f-area').value.trim().toUpperCase()
    };

    const method = id ? 'PATCH' : 'POST';
    const url = id ? `${API_URL}/${id}` : API_URL;
    const body = id ? { fields } : { records: [{ fields }] };

    try {
        const response = await fetch(url, {
            method: method,
            headers: { 
                'Authorization': `Bearer ${API_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (response.ok) {
            closeModal();
            loadData();
        } else {
            const errorData = await response.json();
            alert(`Error al guardar: ${errorData.error?.message || 'Revisa los datos.'}`);
        }
    } catch (error) {
        console.error(error);
        alert('Error de conexión.');
    }
}

// ==========================================
// DELETE (SOLO ADMIN)
// ==========================================
async function deleteRecord(id) {
    if (confirm('¿Seguro que deseas eliminar esta actividad?')) {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${API_TOKEN}` }
        });
        loadData();
    }
}

// ==========================================
// EXPORTAR POR FECHA (TODAS LAS CELDAS CON BORDE NEGRO)
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
    
    if (!fromDate && !toDate) {
        // Exportar todo lo que está en la tabla (si hay algo)
        const table = document.getElementById('activity-table');
        const wb = XLSX.utils.table_to_book(table, { sheet: "Actividades" });
        XLSX.writeFile(wb, "Actividades.xlsx");
        closeExportModal();
        return;
    }
    
    // Construir fórmula de forma segura
    let conditions = [];
    if (fromDate) conditions.push(`{FECHA} >= '${fromDate}'`);
    if (toDate) conditions.push(`{FECHA} <= '${toDate}'`);
    
    let filterFormula = '';
    if (conditions.length > 0) {
        filterFormula = `AND(${conditions.join(', ')})`;
    }

    // IMPORTANTE: Esta llamada es independiente de los filtros de la tabla y SIEMPRE busca en Airtable
    fetch(`${API_URL}${filterFormula ? `?filterByFormula=${encodeURIComponent(filterFormula)}` : ''}`, {
        headers: { 'Authorization': `Bearer ${API_TOKEN}` }
    })
    .then(res => res.json())
    .then(data => {
        if (data.records.length === 0) {
            alert('No hay actividades en el rango de fechas seleccionado.');
            closeExportModal();
            return;
        }
        
        // ✅ ORDENAR POR ÁREA
        const subareasOrder = [
            "MECANICA",
            "INSTRUMENTACIÓN",
            "ELÉCTRICO",
            "VALVULAS PSV Y PVV",
            "A&C",
            "CBM",
            "VSD",
            "FACILIDADES",
            "OBREROS DE PATIO",
            "CAMPAMENTERO",
            "HSEQ"
        ];
        
        const records = data.records;
        
        // Ordenar registros por subárea según el orden establecido
        records.sort((a, b) => {
            const subA = (a.fields['SUBÁREA'] || '').toUpperCase();
            const subB = (b.fields['SUBÁREA'] || '').toUpperCase();
            const indexA = subareasOrder.indexOf(subA);
            const indexB = subareasOrder.indexOf(subB);
            if (indexA === -1) return 1;
            if (indexB === -1) return -1;
            return indexA - indexB;
        });
        
        // ✅ CREAR LA ESTRUCTURA DE LA HOJA (AOA: Array of Arrays)
        // Fila 0: FECHA
        // Fila 1: Encabezados
        // Fila 2 en adelante: Datos
        
        const exportDate = new Date().toLocaleDateString('es-ES'); // Ej: 31/08/2026
        
        const headers = ["AREA", "AREA O SISTEMA", "DESCRIPCION DE ACTIVIDAD", "TAG", "PROG/NO PROG", "ESTACION", "AVANCE", "OT", "EJECUTANTE"];
        
        // Crear matriz de datos
        const dataRows = [];
        
        records.forEach(rec => {
            const f = rec.fields;
            const subarea = (f['SUBÁREA'] || '').toUpperCase();
            const row = [
                subarea, // Columna 0: AREA
                (f['AREA'] || '').toUpperCase(), // Columna 1
                (f['Descripción'] || '').toUpperCase(), // Columna 2
                (f['TAG'] || '').toUpperCase(), // Columna 3
                (f['PROG/NÓ PROG'] || '').toUpperCase(), // Columna 4
                (f['ESTACION'] || '').toUpperCase(), // Columna 5
                (f['AVANCE'] || '').toUpperCase(), // Columna 6
                (f['OT'] || '').toUpperCase(), // Columna 7
                (f['EJECUTANTE'] || '').toUpperCase() // Columna 8
            ];
            dataRows.push(row);
        });
        
        // ✅ CREAR HOJA CON XLSX.utils.aoa_to_sheet
        const ws = XLSX.utils.aoa_to_sheet([]);
        
        // Agregar Fila de FECHA (Fila 1)
        XLSX.utils.sheet_add_aoa(ws, [["FECHA", exportDate]], { origin: "A1" });
        
        // Agregar Encabezados (Fila 2)
        XLSX.utils.sheet_add_aoa(ws, [headers], { origin: "A2" });
        
        // Agregar Datos (Fila 3 en adelante)
        XLSX.utils.sheet_add_aoa(ws, dataRows, { origin: "A3" });
        
        // ✅ BORDES NEGROS PARA TODAS LAS CELDAS
        const borderStyle = {
            top: { style: "thin", color: { rgb: "000000" } },
            bottom: { style: "thin", color: { rgb: "000000" } },
            left: { style: "thin", color: { rgb: "000000" } },
            right: { style: "thin", color: { rgb: "000000" } }
        };
        
        // ✅ PINTAR LA FILA DE FECHA EN ROJO Y TEXTO BLANCO
        ws['A1'].s = {
            fill: { fgColor: { rgb: "FF0000" } },
            font: { color: { rgb: "FFFFFF" }, bold: true },
            alignment: { horizontal: "center", vertical: "center" },
            border: borderStyle
        };
        ws['B1'].s = {
            fill: { fgColor: { rgb: "FF0000" } },
            font: { color: { rgb: "FFFFFF" }, bold: true },
            alignment: { horizontal: "center", vertical: "center" },
            border: borderStyle
        };
        
        // ✅ PINTAR LA FILA DE ENCABEZADOS EN ROJO Y TEXTO BLANCO
        headers.forEach((header, index) => {
            const cell = XLSX.utils.encode_cell({ r: 1, c: index });
            ws[cell].s = {
                fill: { fgColor: { rgb: "FF0000" } },
                font: { color: { rgb: "FFFFFF" }, bold: true },
                alignment: { horizontal: "center", vertical: "center" },
                border: borderStyle
            };
        });
        
        // ✅ AGRUPAR POR ÁREA (COMBINAR CELDAS DE LA COLUMNA A POR CADA ÁREA)
        let groupStartRow = 2; // La primera fila de datos es la fila 2 (índice 0-based)
        let currentArea = dataRows[0][0];
        
        for (let i = 1; i <= dataRows.length; i++) {
            const rowData = dataRows[i];
            const nextArea = rowData ? rowData[0] : null;
            
            if (nextArea !== currentArea || i === dataRows.length) {
                const groupEndRow = i - 1; // Última fila del grupo actual
                
                if (groupEndRow >= groupStartRow) {
                    // Combinar celdas desde groupStartRow hasta groupEndRow en columna 0
                    const startCell = XLSX.utils.encode_cell({ r: groupStartRow, c: 0 });
                    const endCell = XLSX.utils.encode_cell({ r: groupEndRow, c: 0 });
                    
                    // Aplicar fusión
                    ws['!merges'] = ws['!merges'] || [];
                    ws['!merges'].push({ s: { r: groupStartRow, c: 0 }, e: { r: groupEndRow, c: 0 } });
                    
                    // Pintar la celda combinada en rojo con texto blanco
                    const firstCell = XLSX.utils.encode_cell({ r: groupStartRow, c: 0 });
                    if (ws[firstCell]) {
                        ws[firstCell].s = {
                            fill: { fgColor: { rgb: "FF0000" } },
                            font: { color: { rgb: "FFFFFF" }, bold: true, size: 10 },
                            alignment: { horizontal: "center", vertical: "center", wrapText: true },
                            border: borderStyle
                        };
                    }
                }
                
                groupStartRow = i;
                currentArea = nextArea;
            }
        }
        
        // ✅ PINTAR TODA LA COLUMNA A (datos y combinadas) EN ROJO Y TEXTO BLANCO
        for (let r = 2; r < 2 + dataRows.length; r++) {
            const cell = XLSX.utils.encode_cell({ r: r, c: 0 });
            if (ws[cell]) {
                ws[cell].s = {
                    fill: { fgColor: { rgb: "FF0000" } },
                    font: { color: { rgb: "FFFFFF" }, bold: true, size: 10 },
                    alignment: { horizontal: "center", vertical: "center", wrapText: true },
                    border: borderStyle
                };
            }
        }
        
        // ✅ BORDES PARA TODAS LAS CELDAS DE DATOS (columnas B a I)
        for (let r = 2; r < 2 + dataRows.length; r++) {
            for (let c = 1; c < 9; c++) {
                const cell = XLSX.utils.encode_cell({ r: r, c: c });
                if (ws[cell]) {
                    ws[cell].s = {
                        fill: { fgColor: { rgb: "FFFFFF" } },
                        font: { color: { rgb: "000000" } },
                        alignment: { horizontal: "left", vertical: "center", wrapText: true },
                        border: borderStyle
                    };
                }
            }
        }
        
        // ✅ AJUSTAR ANCHO DE COLUMNAS
        const colWidths = {
            0: 15, // AREA
            1: 20, // AREA O SISTEMA
            2: 50, // DESCRIPCION DE ACTIVIDAD
            3: 15, // TAG
            4: 15, // PROG/NO PROG
            5: 15, // ESTACION
            6: 15, // AVANCE
            7: 15, // OT
            8: 20  // EJECUTANTE
        };
        
        const cols = [];
        for (let i = 0; i < 9; i++) {
            cols.push({ wch: colWidths[i] });
        }
        ws['!cols'] = cols;
        
        // ✅ AJUSTAR ALTURA DE FILAS
        ws['!rows'] = [{ hpt: 25 }, { hpt: 25 }]; // Fila de fecha y encabezados
        
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Actividades");
        XLSX.writeFile(wb, `Actividades_${fromDate || 'inicio'}_${toDate || 'hoy'}.xlsx`);
        
        closeExportModal();
    })
    .catch(error => {
        console.error(error);
        alert('Error al exportar los datos.');
    });
}