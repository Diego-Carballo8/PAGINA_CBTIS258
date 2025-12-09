// ==================== TEST 1: CONOCIMIENTOS GENERALES (50 PREGUNTAS) ====================

const knowledgeQuestions = [
    // PROGRAMACIÓN - 10 preguntas
    { q: "¿Qué es HTML?", opts: ["Un lenguaje de programación", "Un lenguaje de marcado", "Una base de datos", "Un sistema operativo"], correct: 1, career: "programacion" },
    { q: "¿Cuál de estos NO es un lenguaje de programación?", opts: ["Python", "Java", "Photoshop", "JavaScript"], correct: 2, career: "programacion" },
    { q: "¿Qué significa CSS?", opts: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Code Style Sheets"], correct: 1, career: "programacion" },
    { q: "¿Qué es una variable en programación?", opts: ["Un error", "Un espacio para guardar datos", "Un tipo de computadora", "Un programa"], correct: 1, career: "programacion" },
    { q: "¿Qué base de datos es relacional?", opts: ["MongoDB", "MySQL", "Redis", "Firebase"], correct: 1, career: "programacion" },
    { q: "¿Qué es Git?", opts: ["Un lenguaje", "Un control de versiones", "Una base de datos", "Un navegador"], correct: 1, career: "programacion" },
    { q: "¿Cuál es el resultado de 5 == '5' en JavaScript?", opts: ["true", "false", "error", "undefined"], correct: 0, career: "programacion" },
    { q: "¿Qué framework NO es de JavaScript?", opts: ["React", "Angular", "Django", "Vue"], correct: 2, career: "programacion" },
    { q: "¿Qué es un API?", opts: ["Una base de datos", "Interfaz para comunicar aplicaciones", "Un servidor", "Un lenguaje"], correct: 1, career: "programacion" },
    { q: "¿Qué hace el comando 'SELECT' en SQL?", opts: ["Elimina datos", "Consulta datos", "Actualiza datos", "Crea tablas"], correct: 1, career: "programacion" },

    // MECÁNICA - 10 preguntas
    { q: "¿Qué es un torno?", opts: ["Herramienta de corte", "Máquina para dar forma cilíndrica", "Un tipo de soldadura", "Una medida"], correct: 1, career: "mecanica" },
    { q: "¿Qué tipo de soldadura usa electrodo?", opts: ["TIG", "MIG", "SMAW", "Oxiacetileno"], correct: 2, career: "mecanica" },
    { q: "¿Qué es CNC?", opts: ["Control Numérico Computarizado", "Centro Nacional de Calibración", "Corte Numérico Circular", "Control de Calidad"], correct: 0, career: "mecanica" },
    { q: "¿Cuál es la unidad de medida más precisa?", opts: ["Metro", "Centímetro", "Micrómetro", "Kilómetro"], correct: 2, career: "mecanica" },
    { q: "¿Qué es el temple en metalurgia?", opts: ["Calentar metal", "Enfriar metal rápidamente", "Soldar", "Cortar metal"], correct: 1, career: "mecanica" },
    { q: "¿Qué herramienta mide ángulos?", opts: ["Vernier", "Goniómetro", "Micrómetro", "Escuadra"], correct: 1, career: "mecanica" },
    { q: "¿Qué es una fresadora?", opts: ["Máquina de soldar", "Máquina que hace cortes con fresa", "Herramienta de medición", "Tipo de metal"], correct: 1, career: "mecanica" },
    { q: "¿Cuál NO es un tipo de acero?", opts: ["Inoxidable", "Al carbono", "Aluminio", "Aleado"], correct: 2, career: "mecanica" },
    { q: "¿Qué es el mecanizado?", opts: ["Soldar piezas", "Dar forma mediante corte", "Pintar metal", "Medir piezas"], correct: 1, career: "mecanica" },
    { q: "¿Para qué sirve un calibrador vernier?", opts: ["Cortar", "Medir con precisión", "Soldar", "Pulir"], correct: 1, career: "mecanica" },

    // ALIMENTOS - 8 preguntas
    { q: "¿Qué es HACCP?", opts: ["Un tipo de bacteria", "Sistema de análisis de peligros", "Una norma química", "Un conservador"], correct: 1, career: "alimentos" },
    { q: "¿A qué temperatura se pasteuriza la leche?", opts: ["50°C", "72°C", "100°C", "150°C"], correct: 1, career: "alimentos" },
    { q: "¿Qué mide el pH?", opts: ["Temperatura", "Acidez o alcalinidad", "Peso", "Densidad"], correct: 1, career: "alimentos" },
    { q: "¿Qué conserva los alimentos por frío?", opts: ["Pasteurización", "Esterilización", "Refrigeración", "Deshidratación"], correct: 2, career: "alimentos" },
    { q: "¿Qué es un embutido?", opts: ["Pan", "Carne procesada", "Lácteo", "Vegetal"], correct: 1, career: "alimentos" },
    { q: "¿Qué bacteria causa intoxicación alimentaria?", opts: ["Lactobacillus", "Salmonella", "Penicilina", "Levadura"], correct: 1, career: "alimentos" },
    { q: "¿Qué es la liofilización?", opts: ["Congelar", "Deshidratar por congelación", "Calentar", "Fermentar"], correct: 1, career: "alimentos" },
    { q: "¿Cuál es un lácteo fermentado?", opts: ["Leche", "Yogurt", "Mantequilla", "Crema"], correct: 1, career: "alimentos" },

    // SOPORTE - 8 preguntas
    { q: "¿Qué es RAM?", opts: ["Disco duro", "Memoria de acceso aleatorio", "Procesador", "Tarjeta gráfica"], correct: 1, career: "soporte" },
    { q: "¿Cuál es un sistema operativo?", opts: ["Word", "Windows", "Chrome", "Photoshop"], correct: 1, career: "soporte" },
    { q: "¿Qué significa IP?", opts: ["Internet Protocol", "Internal Program", "Input Process", "Interface Port"], correct: 0, career: "soporte" },
    { q: "¿Qué cable se usa para redes Ethernet?", opts: ["HDMI", "USB", "RJ45", "VGA"], correct: 2, career: "soporte" },
    { q: "¿Qué es un router?", opts: ["Impresora", "Dispositivo que dirige tráfico de red", "Disco duro", "Monitor"], correct: 1, career: "soporte" },
    { q: "¿Qué hace un firewall?", opts: ["Acelera internet", "Protege la red", "Guarda archivos", "Imprime"], correct: 1, career: "soporte" },
    { q: "¿Qué es SSD?", opts: ["Disco duro de estado sólido", "Sistema de seguridad", "Software", "Servidor"], correct: 0, career: "soporte" },
    { q: "¿Cuál es la dirección IP local común?", opts: ["192.168.1.1", "www.google.com", "127.0.0.1", "255.255.255.0"], correct: 0, career: "soporte" },

    // CONTABILIDAD - 6 preguntas
    { q: "¿Qué es el activo en contabilidad?", opts: ["Lo que se debe", "Lo que se tiene", "Los gastos", "Las ventas"], correct: 1, career: "contabilidad" },
    { q: "¿Qué impuesto se cobra sobre ventas en México?", opts: ["ISR", "IVA", "IMSS", "Infonavit"], correct: 1, career: "contabilidad" },
    { q: "¿Qué es un balance general?", opts: ["Lista de ventas", "Estado de situación financiera", "Nómina", "Factura"], correct: 1, career: "contabilidad" },
    { q: "¿Cuál es la ecuación contable básica?", opts: ["A = P + C", "V - C = U", "I - E = G", "A + P = C"], correct: 0, career: "contabilidad" },
    { q: "¿Qué es una factura?", opts: ["Recibo", "Comprobante fiscal", "Cheque", "Pagaré"], correct: 1, career: "contabilidad" },
    { q: "¿Qué es el pasivo?", opts: ["Lo que se tiene", "Lo que se debe", "Las ganancias", "El capital"], correct: 1, career: "contabilidad" },

    // HOSPEDAJE - 4 preguntas
    { q: "¿Qué es el check-in?", opts: ["Salida del hotel", "Registro de entrada", "Limpieza", "Pago"], correct: 1, career: "hospedaje" },
    { q: "¿Qué área limpia habitaciones?", opts: ["Recepción", "Housekeeping", "Cocina", "Bar"], correct: 1, career: "hospedaje" },
    { q: "¿Qué es revenue management?", opts: ["Limpieza", "Gestión de ingresos", "Cocina", "Seguridad"], correct: 1, career: "hospedaje" },
    { q: "¿Qué es PMS en hotelería?", opts: ["Sistema de gestión hotelera", "Método de pago", "Precio", "Servicio"], correct: 0, career: "hospedaje" },

    // ROBÓTICA - 2 preguntas
    { q: "¿Qué es Arduino?", opts: ["Robot", "Plataforma de microcontrolador", "Lenguaje", "Sensor"], correct: 1, career: "robotica" },
    { q: "¿Qué es un servo motor?", opts: ["Batería", "Motor con control de posición", "Sensor", "Cable"], correct: 1, career: "robotica" },

    // IA - 2 preguntas
    { q: "¿Qué es Machine Learning?", opts: ["Un robot", "Aprendizaje automático", "Un lenguaje", "Una base de datos"], correct: 1, career: "ia" },
    { q: "¿Qué librería de Python se usa para IA?", opts: ["Excel", "TensorFlow", "Word", "Chrome"], correct: 1, career: "ia" }
];

// ==================== TEST 2: CONFIRMACIÓN POR CARRERA (20 PREGUNTAS SÍ/NO) ====================

const confirmationQuestions = {
    programacion: ["¿Te gusta pasar horas frente a la computadora?", "¿Disfrutas resolver problemas lógicos y matemáticos?", "¿Te interesa aprender nuevos lenguajes de programación?", "¿Te emociona la idea de crear aplicaciones y sitios web?", "¿Eres paciente cuando algo no funciona a la primera?", "¿Te gusta investigar y aprender por tu cuenta?", "¿Disfrutas automatizar tareas repetitivas?", "¿Te interesa la inteligencia artificial y el futuro tecnológico?", "¿Prefieres trabajar de forma remota o híbrida?", "¿Te gusta trabajar en proyectos individuales o en equipo pequeño?", "¿Disfrutas debuggear (buscar errores) en código?", "¿Te interesa el desarrollo de videojuegos?", "¿Eres detallista y perfeccionista con tu trabajo?", "¿Te gusta mantenerte actualizado con nuevas tecnologías?", "¿Disfrutas crear soluciones digitales a problemas reales?", "¿Te interesa el desarrollo móvil (apps)?", "¿Eres creativo diseñando interfaces de usuario?", "¿Te gusta trabajar con bases de datos?", "¿Disfrutas optimizar código y hacerlo más eficiente?", "¿Te ves trabajando en una empresa tecnológica?"],
    mecanica: ["¿Te gusta trabajar con tus manos?", "¿Disfrutas armar y desarmar objetos para ver cómo funcionan?", "¿Te interesa la soldadura y el trabajo con metales?", "¿Te gustan las máquinas y la maquinaria pesada?", "¿Prefieres trabajar en talleres o fábricas?", "¿Eres bueno leyendo planos técnicos?", "¿Te interesa el diseño CAD?", "¿Disfrutas hacer trabajos de precisión?", "¿Te gusta mantener y reparar cosas?", "¿Te interesa la industria automotriz o manufactura?", "¿Eres cuidadoso y seguro usando herramientas?", "¿Te gusta ver resultados tangibles de tu trabajo?", "¿Disfrutas el trabajo físico?", "¿Te interesa la automatización industrial?", "¿Eres paciente con trabajos que requieren detalle?", "¿Te gustaría operar máquinas CNC?", "¿Disfrutas mejorar procesos de producción?", "¿Te interesa la metrología?", "¿Te ves trabajando en una planta industrial?", "¿Disfrutas los desafíos técnicos mecánicos?"],
    alimentos: ["¿Te gusta cocinar y experimentar con comida?", "¿Te interesa la química de los alimentos?", "¿Disfrutas trabajar en laboratorios?", "¿Te preocupa la inocuidad y seguridad alimentaria?", "¿Te gusta hacer análisis y pruebas?", "¿Te interesa crear nuevos productos alimenticios?", "¿Eres detallista con la limpieza e higiene?", "¿Te gustan las ciencias (química, biología)?", "¿Disfrutas procesos como hacer pan, queso o conservas?", "¿Te interesa la nutrición y salud?", "¿Eres ordenado con procedimientos y protocolos?", "¿Te gusta controlar calidad de productos?", "¿Disfrutas trabajar en la industria alimentaria?", "¿Te interesa la microbiología?", "¿Eres cuidadoso siguiendo normas sanitarias?", "¿Te gustaría trabajar en una planta procesadora?", "¿Disfrutas hacer análisis fisicoquímicos?", "¿Te interesa la tecnología de conservación?", "¿Te ves desarrollando productos innovadores?", "¿Disfrutas el trabajo sistemático y organizado?"],
    soporte: ["¿Te gusta arreglar computadoras?", "¿Disfrutas ayudar a las personas con problemas técnicos?", "¿Te interesa el hardware de computadoras?", "¿Eres bueno diagnosticando problemas?", "¿Te gusta instalar y configurar software?", "¿Disfrutas trabajar con redes?", "¿Eres paciente explicando tecnología a otros?", "¿Te interesa la ciberseguridad?", "¿Disfrutas ensamblar PCs?", "¿Te gusta configurar servidores?", "¿Eres bueno resolviendo problemas rápidamente?", "¿Te interesa Linux y otros sistemas operativos?", "¿Disfrutas el cableado estructurado?", "¿Te gusta mantener sistemas funcionando?", "¿Eres organizado con inventarios de equipo?", "¿Te interesa la virtualización?", "¿Disfrutas dar soporte remoto?", "¿Te gusta estar actualizado en tecnología?", "¿Eres bueno en atención al cliente?", "¿Te ves trabajando en el área de TI?"],
    contabilidad: ["¿Te gustan los números y las matemáticas?", "¿Eres muy organizado y detallista?", "¿Disfrutas trabajar con Excel y software contable?", "¿Te interesa la economía y finanzas?", "¿Eres bueno administrando tu dinero?", "¿Te gusta la idea de llevar registros financieros?", "¿Eres honesto y ético con el dinero?", "¿Disfrutas analizar estados financieros?", "¿Te interesa la legislación fiscal?", "¿Eres paciente con tareas repetitivas?", "¿Te gusta la estabilidad laboral?", "¿Disfrutas trabajar en oficina?", "¿Eres bueno cumpliendo plazos?", "¿Te interesa la auditoría?", "¿Eres discreto con información confidencial?", "¿Te gusta hacer presupuestos?", "¿Disfrutas el trabajo metódico?", "¿Te interesa emprender tu despacho contable?", "¿Eres bueno con declaraciones de impuestos?", "¿Te ves trabajando con finanzas empresariales?"],
    hospedaje: ["¿Te gusta tratar con personas?", "¿Eres amable y servicial por naturaleza?", "¿Te interesa el turismo y hotelería?", "¿Disfrutas organizar eventos?", "¿Eres bueno resolviendo quejas de clientes?", "¿Te gusta trabajar en equipo?", "¿Eres flexible con horarios (turnos)?", "¿Te interesa aprender idiomas (inglés)?", "¿Disfrutas hacer que las personas se sientan bienvenidas?", "¿Eres bueno en atención al detalle?", "¿Te interesa la gestión de hoteles?", "¿Disfrutas estar en movimiento constante?", "¿Eres bueno manejando el estrés?", "¿Te gusta el ambiente de hoteles y eventos?", "¿Eres organizado con reservaciones?", "¿Te interesa la gastronomía hotelera?", "¿Disfrutas crear experiencias memorables?", "¿Eres profesional en tu presentación?", "¿Te ves trabajando en un resort o hotel?", "¿Disfrutas el trato con turistas?"],
    robotica: ["¿Te fascina la robótica y automatización?", "¿Disfrutas programar microcontroladores?", "¿Te gusta la electrónica y circuitos?", "¿Te interesa la mecatrónica?", "¿Disfrutas construir robots?", "¿Eres bueno en matemáticas y física?", "¿Te interesa Arduino y Raspberry Pi?", "¿Disfrutas proyectos de ingeniería?", "¿Te gusta la visión artificial?", "¿Te interesa la Industria 4.0?", "¿Disfrutas programar PLCs?", "¿Eres paciente con proyectos complejos?", "¿Te interesa el IoT?", "¿Disfrutas las competencias de robótica?", "¿Te gusta imprimir en 3D?", "¿Te interesa la inteligencia artificial aplicada?", "¿Disfrutas automatizar procesos?", "¿Eres creativo diseñando soluciones?", "¿Te ves trabajando con robots industriales?", "¿Disfrutas combinar mecánica y programación?"],
    ia: ["¿Te fascina la inteligencia artificial?", "¿Disfrutas programar en Python?", "¿Te interesa el machine learning?", "¿Eres bueno en matemáticas avanzadas?", "¿Te gusta el análisis de datos?", "¿Disfrutas crear algoritmos complejos?", "¿Te interesa el deep learning?", "¿Disfrutas trabajar con grandes volúmenes de datos?", "¿Te gusta la estadística?", "¿Te interesa la visión por computadora?", "¿Disfrutas el procesamiento de lenguaje natural?", "¿Eres paciente entrenando modelos de IA?", "¿Te interesa la investigación?", "¿Disfrutas leer papers científicos?", "¿Te gusta experimentar con redes neuronales?", "¿Te interesa la IA generativa?", "¿Disfrutas optimizar modelos?", "¿Eres bueno en pensamiento abstracto?", "¿Te ves trabajando en tecnología de punta?", "¿Disfrutas resolver problemas complejos con IA?"]
};

// State
let currentTest = null;
let currentQuestionIdx = 0;
let userAnswers = [];

function startKnowledgeTest() {
    currentTest = 'knowledge';
    currentQuestionIdx = 0;
    userAnswers = [];
    document.getElementById('testModal').classList.add('active');
    document.getElementById('totalQuestionsNum').textContent = knowledgeQuestions.length;
    document.getElementById('testResults').style.display = 'none';
    document.getElementById('testContent').style.display = 'block';
    document.querySelector('.test-navigation').style.display = 'flex';
    renderKnowledgeQuestion();
}

function showCareerSelection() {
    document.getElementById('careerSelectionModal').classList.add('active');
}

function closeCareerSelection() {
    document.getElementById('careerSelectionModal').classList.remove('active');
}

function startConfirmationTest(career) {
    closeCareerSelection();
    currentTest = 'confirmation';
    currentQuestionIdx = 0;
    userAnswers = [];
    userAnswers.selectedCareer = career;
    document.getElementById('testModal').classList.add('active');
    document.getElementById('totalQuestionsNum').textContent = confirmationQuestions[career].length;
    document.getElementById('testResults').style.display = 'none';
    document.getElementById('testContent').style.display = 'block';
    document.querySelector('.test-navigation').style.display = 'flex';
    renderConfirmationQuestion();
}

function closeTest() {
    document.getElementById('testModal').classList.remove('active');
    currentTest = null;
    currentQuestionIdx = 0;
    userAnswers = [];
}

function renderKnowledgeQuestion() {
    const question = knowledgeQuestions[currentQuestionIdx];
    const content = document.getElementById('testContent');
    content.innerHTML = `
        <div class="question-card">
            <h3 class="question-number">Pregunta ${currentQuestionIdx + 1} de ${knowledgeQuestions.length}</h3>
            <p class="question-text">${question.q}</p>
            <div class="options-container">
                ${question.opts.map((opt, idx) => `
                    <div class="option-card ${userAnswers[currentQuestionIdx] === idx ? 'selected' : ''}" onclick="selectKnowledgeAnswer(${idx})">
                        <div class="option-radio ${userAnswers[currentQuestionIdx] === idx ? 'checked' : ''}"></div>
                        <p class="option-text">${opt}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    updateTestProgress();
    updateTestButtons();
}

function renderConfirmationQuestion() {
    const career = userAnswers.selectedCareer;
    const questions = confirmationQuestions[career];
    const question = questions[currentQuestionIdx];
    const content = document.getElementById('testContent');
    content.innerHTML = `
        <div class="question-card">
            <h3 class="question-number">Pregunta ${currentQuestionIdx + 1} de ${questions.length}</h3>
            <p class="question-text">${question}</p>
            <div class="yesno-container">
                <div class="yesno-card ${userAnswers[currentQuestionIdx] === true ? 'selected yes' : ''}" onclick="selectYesNo(true)">
                    <div class="yesno-icon">👍</div>
                    <p>SÍ</p>
                </div>
                <div class="yesno-card ${userAnswers[currentQuestionIdx] === false ? 'selected no' : ''}" onclick="selectYesNo(false)">
                    <div class="yesno-icon">👎</div>
                    <p>NO</p>
                </div>
            </div>
        </div>
    `;
    updateTestProgress();
    updateTestButtons();
}

function selectKnowledgeAnswer(idx) {
    userAnswers[currentQuestionIdx] = idx;
    renderKnowledgeQuestion();
}

function selectYesNo(answer) {
    userAnswers[currentQuestionIdx] = answer;
    renderConfirmationQuestion();
}

function updateTestProgress() {
    const total = currentTest === 'knowledge' ? knowledgeQuestions.length : confirmationQuestions[userAnswers.selectedCareer].length;
    const progress = ((currentQuestionIdx + 1) / total) * 100;
    document.getElementById('testProgressBar').style.width = progress + '%';
    document.getElementById('currentQuestionNum').textContent = currentQuestionIdx + 1;
}

function updateTestButtons() {
    const total = currentTest === 'knowledge' ? knowledgeQuestions.length : confirmationQuestions[userAnswers.selectedCareer].length;
    const isLast = currentQuestionIdx === total - 1;
    const hasAnswer = userAnswers[currentQuestionIdx] !== undefined;
    document.getElementById('testPrevBtn').style.display = currentQuestionIdx > 0 ? 'inline-block' : 'none';
    document.getElementById('testNextBtn').style.display = !isLast ? 'inline-block' : 'none';
    document.getElementById('testFinishBtn').style.display = isLast && hasAnswer ? 'inline-block' : 'none';
    if (!isLast) document.getElementById('testNextBtn').disabled = !hasAnswer;
}

function nextTestQuestion() {
    const total = currentTest === 'knowledge' ? knowledgeQuestions.length : confirmationQuestions[userAnswers.selectedCareer].length;
    if (userAnswers[currentQuestionIdx] === undefined) {
        alert('Por favor selecciona una respuesta');
        return;
    }
    if (currentQuestionIdx < total - 1) {
        currentQuestionIdx++;
        if (currentTest === 'knowledge') {
            renderKnowledgeQuestion();
        } else {
            renderConfirmationQuestion();
        }
    }
}

function previousTestQuestion() {
    if (currentQuestionIdx > 0) {
        currentQuestionIdx--;
        if (currentTest === 'knowledge') {
            renderKnowledgeQuestion();
        } else {
            renderConfirmationQuestion();
        }
    }
}

function finishCurrentTest() {
    if (userAnswers[currentQuestionIdx] === undefined) {
        alert('Por favor selecciona una respuesta');
        return;
    }
    if (currentTest === 'knowledge') {
        showKnowledgeResults();
    } else {
        showConfirmationResults();
    }
}

function showKnowledgeResults() {
    let careerScores = {};
    let totalCorrect = 0;
    knowledgeQuestions.forEach((q, idx) => {
        if (userAnswers[idx] === q.correct) {
            totalCorrect++;
            careerScores[q.career] = (careerScores[q.career] || 0) + 1;
        }
    });
    const sortedCareers = Object.entries(careerScores).sort((a, b) => b[1] - a[1]).slice(0, 3);
    const careerNames = {
        programacion: "💻 Programación",
        mecanica: "⚙️ Mecánica Industrial",
        alimentos: "🍽️ Alimentos y Bebidas",
        soporte: "🖥️ Soporte y Mantenimiento",
        contabilidad: "💼 Contabilidad",
        hospedaje: "🏨 Hospedaje",
        robotica: "🤖 Robótica",
        ia: "🧠 Inteligencia Artificial"
    };
    document.getElementById('testContent').style.display = 'none';
    document.querySelector('.test-navigation').style.display = 'none';
    const resultsHTML = `
        <div class="results-card">
            <h2>📊 Tus Resultados</h2>
            <div class="score-display">
                <div class="score-circle"><div class="score-number">${totalCorrect}</div><div class="score-total">de ${knowledgeQuestions.length}</div></div>
                <div class="score-percentage">${Math.round((totalCorrect / knowledgeQuestions.length) * 100)}%</div>
            </div>
            <h3>Top 3 Carreras Recomendadas:</h3>
            <div class="results-recommendations">
                ${sortedCareers.map((career, idx) => `
                    <div class="recommendation-card">
                        <div class="recommendation-rank">🥇</div>
                        <div class="recommendation-content"><h4>${careerNames[career[0]]}</h4><p>Aciertos: ${career[1]} preguntas</p></div>
                    </div>
                `).join('')}
            </div>
            <button class="test-btn primary" onclick="closeTest()">Volver al Inicio</button>
        </div>
    `;
    document.getElementById('testResults').innerHTML = resultsHTML;
    document.getElementById('testResults').style.display = 'block';
}

function showConfirmationResults() {
    let scorePoints = 0;
    const career = userAnswers.selectedCareer;
    const careerNames = {
        programacion: "💻 Programación",
        mecanica: "⚙️ Mecánica Industrial",
        alimentos: "🍽️ Alimentos y Bebidas",
        soporte: "🖥️ Soporte y Mantenimiento",
        contabilidad: "💼 Contabilidad",
        hospedaje: "🏨 Hospedaje",
        robotica: "🤖 Robótica",
        ia: "🧠 Inteligencia Artificial"
    };
    userAnswers.forEach(answer => {
        if (answer === true) scorePoints++;
    });
    const compatibility = Math.round((scorePoints / confirmationQuestions[career].length) * 100);
    document.getElementById('testContent').style.display = 'none';
    document.querySelector('.test-navigation').style.display = 'none';
    const resultsHTML = `
        <div class="results-card">
            <h2>✅ Resultados de Compatibilidad</h2>
            <h3>${careerNames[career]}</h3>
            <div class="compatibility-display" style="text-align: center; font-size: 48px; font-weight: bold; color: #8B1538; margin: 2rem 0;">
                ${compatibility}% Compatible
            </div>
            <p style="text-align: center; color: #666; margin: 1rem 0;">
                ${compatibility >= 80 ? '¡Excelente! Esta es definitivamente tu carrera.' : 
                  compatibility >= 60 ? 'Muy buena compatibilidad, adelante con esta opción.' :
                  compatibility >= 40 ? 'Buena compatibilidad, pero considera otras opciones.' :
                  'Podrías explorar otras carreras que se ajusten mejor a ti.'}
            </p>
            <button class="test-btn primary" onclick="closeTest()">Volver al Inicio</button>
        </div>
    `;
    document.getElementById('testResults').innerHTML = resultsHTML;
    document.getElementById('testResults').style.display = 'block';
}
