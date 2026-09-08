/**
 * APLICACIÓN INTERACTIVA: DÍPTICO 91° ANIVERSARIO I.E.E. SANTA TERESITA
 * Información 100% fiel al programa oficial del PDF.
 */

// Dataset Oficial de Eventos y Actividades
const EVENTOS_TERESIANOS = [
  {
    id: 'ev-14-primaria',
    imagen: null,
    dia: '14',
    mes: 'Setiembre',
    fechaCompleta: '14 de Setiembre de 2026',
    titulo: '1er grado: "Pupiletras Teresianas"',
    subtitulo: 'Juegos Florales Teresianos 2026',
    categoria: 'primaria',
    categoriaNombre: 'Nivel Primaria',
    hora: 'En horario de clases',
    lugar: 'Escenario y patio del nivel primaria',
    lugarTipo: 'colegio',
    descripcion: 'Dinámica lúdica y formativa para estudiantes de primer grado en el marco de los Juegos Florales.'
  },
  {
    id: 'ev-15-canonesas-act',
    imagen: 'assets/images/eventos/canonesas_cruz.jpeg',
    dia: '15',
    mes: 'Setiembre',
    fechaCompleta: '15 de Setiembre de 2026',
    titulo: 'Actuación por el 107° Aniversario Fundacional',
    subtitulo: 'Congregación Canonesas de la Cruz',
    categoria: 'protocolar',
    categoriaNombre: 'Protocolar / Religioso',
    hora: '10:00 am',
    lugar: 'Patio de secundaria',
    lugarTipo: 'colegio',
    descripcion: 'Homenaje y conmemoración comunitaria por los 107 años de la Congregación Canonesas de la Cruz.'
  },
  {
    id: 'ev-15-canonesas-misa',
    imagen: 'assets/images/eventos/canonesas_cruz.jpeg',
    dia: '15',
    mes: 'Setiembre',
    fechaCompleta: '15 de Setiembre de 2026',
    titulo: 'Eucaristía de Acción de Gracias',
    subtitulo: '107° Aniversario Congregación Canonesas de la Cruz',
    categoria: 'protocolar',
    categoriaNombre: 'Protocolar / Religioso',
    hora: '12:00 m',
    lugar: 'Capilla de la IE',
    lugarTipo: 'colegio',
    descripcion: 'Solemne celebración eucarística en la capilla institucional.'
  },
  {
    id: 'ev-16-primaria-2do',
    imagen: null,
    dia: '16',
    mes: 'Setiembre',
    fechaCompleta: '16 de Setiembre de 2026',
    titulo: '2do grado: "Jugando con la Chacana"',
    subtitulo: 'Juegos Florales Teresianos 2026',
    categoria: 'primaria',
    categoriaNombre: 'Nivel Primaria',
    hora: 'En horario escolar',
    lugar: 'Escenario y patio del nivel primaria',
    lugarTipo: 'colegio',
    descripcion: 'Actividad de integración cultural y matemática ancestral con la Chacana.'
  },
  {
    id: 'ev-16-primaria-6to',
    imagen: null,
    dia: '16',
    mes: 'Setiembre',
    fechaCompleta: '16 de Setiembre de 2026',
    titulo: '6to grado: "Desafío Teresiano"',
    subtitulo: 'Juegos Florales Teresianos 2026',
    categoria: 'primaria',
    categoriaNombre: 'Nivel Primaria',
    hora: 'En horario escolar',
    lugar: 'Escenario y patio del nivel primaria',
    lugarTipo: 'colegio',
    descripcion: 'Retos de conocimiento, agilidad y trabajo en equipo para la promoción de primaria.'
  },
  {
    id: 'ev-17-marinera',
    imagen: null,
    dia: '17',
    mes: 'Setiembre',
    fechaCompleta: '17 de Setiembre de 2026',
    titulo: 'II Concurso de Marinera: "Pañuelos y ritmos teresianos"',
    subtitulo: 'Expresión viva de nuestra peruanidad y gracia teresiana',
    categoria: 'juegos',
    categoriaNombre: 'Arte y Cultura',
    hora: '8:30 am',
    lugar: 'Coliseo de la IE',
    lugarTipo: 'colegio',
    descripcion: 'Demostración de talento, elegancia y ritmo con la tradicional marinera.'
  },
  {
    id: 'ev-17-primaria-5to',
    imagen: null,
    dia: '17',
    mes: 'Setiembre',
    fechaCompleta: '17 de Setiembre de 2026',
    titulo: '5to grado: "Matemática y las Letras Divertidas"',
    subtitulo: 'Juegos Florales Teresianos 2026',
    categoria: 'primaria',
    categoriaNombre: 'Nivel Primaria',
    hora: 'En horario escolar',
    lugar: 'Escenario y patio del nivel primaria',
    lugarTipo: 'colegio',
    descripcion: 'Dinámica de razonamiento lógico y creatividad verbal.'
  },
  {
    id: 'ev-17-copa-exalumnas',
    imagen: null,
    dia: '17',
    mes: 'Setiembre',
    fechaCompleta: 'Del 17 al 22 de Setiembre de 2026',
    titulo: 'COPA "ST EX ALUMNAS" (Vóley y Básquet)',
    subtitulo: 'Reencuentro de confraternidad deportiva de promociones',
    categoria: 'deportes',
    categoriaNombre: 'Deportes / Exalumnas',
    hora: '5:30 pm',
    lugar: 'Coliseo de la IE',
    lugarTipo: 'colegio',
    descripcion: 'Torneo de vóley y básquetbol entre promociones de exalumnas teresianas.'
  },
  {
    id: 'ev-18-deporte',
    imagen: null,
    dia: '18',
    mes: 'Setiembre',
    fechaCompleta: '18 de Setiembre de 2026',
    titulo: 'Deporte Institucional',
    subtitulo: 'Jornada deportiva de toda la comunidad educativa',
    categoria: 'deportes',
    categoriaNombre: 'Deportes',
    hora: '7:30 am',
    lugar: 'Coliseo de la IE',
    lugarTipo: 'colegio',
    descripcion: 'Actividades deportivas integradoras para estudiantes y docentes.'
  },
  {
    id: 'ev-18-primaria-4to',
    imagen: null,
    dia: '18',
    mes: 'Setiembre',
    fechaCompleta: '18 de Setiembre de 2026',
    titulo: '4to grado: "Pasarela ECOMODA"',
    subtitulo: 'Juegos Florales Teresianos 2026',
    categoria: 'primaria',
    categoriaNombre: 'Nivel Primaria',
    hora: 'En horario escolar',
    lugar: 'Escenario y patio del nivel primaria',
    lugarTipo: 'colegio',
    descripcion: 'Desfile de trajes creativos elaborados con material reciclado.'
  },
  {
    id: 'ev-21-primaria-3ro',
    imagen: null,
    dia: '21',
    mes: 'Setiembre',
    fechaCompleta: '21 de Setiembre de 2026',
    titulo: '3er grado: "Sopa de Letras de Teresita"',
    subtitulo: 'Juegos Florales Teresianos 2026',
    categoria: 'primaria',
    categoriaNombre: 'Nivel Primaria',
    hora: 'En horario escolar',
    lugar: 'Escenario y patio del nivel primaria',
    lugarTipo: 'colegio',
    descripcion: 'Actividad interactiva de lectoescritura con valores de Santa Teresita.'
  },
  {
    id: 'ev-21-juegos-secundaria',
    imagen: null,
    dia: '21',
    mes: 'Setiembre',
    fechaCompleta: '21 de Setiembre de 2026',
    titulo: '“JUEGOS FLORALES TERESIANOS 2026”',
    subtitulo: 'Caminito de Santa Teresita: Floreciendo en Arte y Talento (Secundaria)',
    categoria: 'secundaria',
    categoriaNombre: 'Nivel Secundaria',
    hora: 'Desde las 7:30 am',
    lugar: 'Diversos ambientes de la IE (Coliseo, Aulas, Laboratorios, Gimnasio)',
    lugarTipo: 'colegio',
    descripcion: 'Gran fiesta pedagógica con 9 disciplinas simultáneas: DPCC, Matemática, Inglés, CC.SS., Comunicación, EPT, C&T, Arte y Cultura, y Educación Física.'
  },
  {
    id: 'ev-22-procesion',
    imagen: 'assets/images/eventos/santa_teresita_patrona.jpeg',
    dia: '22',
    mes: 'Setiembre',
    fechaCompleta: '22 de Setiembre de 2026',
    titulo: 'Procesión en Honor a Santa Teresita',
    subtitulo: 'Nuestra Santa Patrona recorre las calles en oración',
    categoria: 'protocolar',
    categoriaNombre: 'Protocolar / Religioso',
    hora: '7:30 am',
    lugar: 'Salida de la IE hacia La Catedral',
    lugarTipo: 'externo',
    mapUrl: 'https://maps.google.com/?q=Catedral+de+Cajamarca',
    descripcion: 'Traslado procesional solemne de la imagen de Santa Teresita del Niño Jesús.'
  },
  {
    id: 'ev-22-misa',
    imagen: 'assets/images/eventos/santa_teresita_patrona.jpeg',
    dia: '22',
    mes: 'Setiembre',
    fechaCompleta: '22 de Setiembre de 2026',
    titulo: 'Eucaristía en Honor a Santa Teresita',
    subtitulo: 'Santa Misa Central en la Catedral de Cajamarca',
    categoria: 'protocolar',
    categoriaNombre: 'Protocolar / Religioso',
    hora: '9:00 am',
    lugar: 'Iglesia La Catedral de Cajamarca',
    lugarTipo: 'externo',
    mapUrl: 'https://maps.google.com/?q=Catedral+de+Cajamarca',
    descripcion: 'Misa solemne con asistencia de autoridades, directivos, docentes, estudiantes y exalumnas.'
  },
  {
    id: 'ev-23-pregon',
    imagen: null,
    dia: '23',
    mes: 'Setiembre',
    fechaCompleta: '23 de Setiembre de 2026',
    titulo: 'Pregón Institucional de Aniversario',
    subtitulo: 'Anuncio festivo por las principales calles de Cajamarca',
    categoria: 'protocolar',
    categoriaNombre: 'Protocolar / Comunitario',
    hora: '7:30 am',
    lugar: 'Principales calles de la ciudad',
    lugarTipo: 'externo',
    mapUrl: 'https://maps.google.com/?q=Plaza+de+Armas+Cajamarca',
    descripcion: 'Colorido y alegre pasacalle anunciando el nonagésimo primer aniversario.'
  },
  {
    id: 'ev-23-juventud',
    imagen: null,
    dia: '23',
    mes: 'Setiembre',
    fechaCompleta: '23 de Setiembre de 2026',
    titulo: 'Celebración por el Día de la Juventud',
    subtitulo: 'Homenaje y fiesta de integración para las estudiantes teresianas',
    categoria: 'secundaria',
    categoriaNombre: 'Vida Escolar',
    hora: '10:30 am',
    lugar: 'Patio de secundaria',
    lugarTipo: 'colegio',
    descripcion: 'Jornada recreativa y juvenil celebrando la vitalidad de la juventud teresiana.'
  },
  {
    id: 'ev-23-iluminacion',
    imagen: null,
    dia: '23',
    mes: 'Setiembre',
    fechaCompleta: '23 de Setiembre de 2026',
    titulo: 'Iluminación de la Insignia “ST”',
    subtitulo: 'Faro de luz y tradición que ilumina la noche cajamarquina',
    categoria: 'protocolar',
    categoriaNombre: 'Tradición Institucional',
    hora: '7:00 pm',
    lugar: 'Colina Urubamba chico',
    lugarTipo: 'externo',
    mapUrl: 'https://maps.google.com/?q=Colina+Urubamba+Cajamarca',
    descripcion: 'Emblemática iluminación nocturna de la insignia de la I.E.E. Santa Teresita.'
  },
  {
    id: 'ev-24-noche-gala',
    imagen: null,
    dia: '24',
    mes: 'Setiembre',
    fechaCompleta: '24 de Setiembre de 2026',
    titulo: '“Bajo una Lluvia de Rosas - Noche de Gala Teresiana 2026”',
    subtitulo: 'Velada artística y solemne de gala institucional',
    categoria: 'juegos',
    categoriaNombre: 'Gala / Arte',
    hora: '6:00 pm',
    lugar: 'Patio de secundaria',
    lugarTipo: 'colegio',
    descripcion: 'Noche cumbre de gala cultural, talento artístico y fraternidad teresiana.'
  },
  {
    id: 'ev-25-clase-recuerdo',
    imagen: 'assets/images/eventos/clase_recuerdo.jpeg',
    dia: '25',
    mes: 'Setiembre',
    fechaCompleta: '25 de Setiembre de 2026',
    titulo: 'Clase del Recuerdo: “Aprendizajes que dejan huella de amor y esperanza”',
    subtitulo: 'Reencuentro de exalumnas en sus aulas mater',
    categoria: 'protocolar',
    categoriaNombre: 'Exalumnas / Protocolar',
    hora: '10:30 am',
    lugar: 'Aulas de la IE Santa Teresita',
    lugarTipo: 'colegio',
    descripcion: 'Momento de profunda emoción donde las promociones retornan a sus aulas de clase.'
  },
  {
    id: 'ev-26-desfile',
    imagen: null,
    dia: '26',
    mes: 'Setiembre',
    fechaCompleta: '26 de Setiembre de 2026',
    titulo: 'Desfile por el 91° Aniversario Institucional',
    subtitulo: 'Paso marcial y gallardo en la Plaza Mayor de Cajamarca',
    categoria: 'protocolar',
    categoriaNombre: 'Acto Central',
    hora: '8:00 am',
    lugar: 'Plaza de Armas de Cajamarca',
    lugarTipo: 'externo',
    mapUrl: 'https://maps.google.com/?q=Plaza+de+Armas+de+Cajamarca',
    descripcion: 'Gran desfile de honor con participación de estudiantes, banda escolar, docentes y promociones de exalumnas.'
  },
  {
    id: 'ev-26-almuerzo',
    imagen: 'assets/images/eventos/fiesta_teresiana.jpeg',
    dia: '26',
    mes: 'Setiembre',
    fechaCompleta: '26 de Setiembre de 2026',
    titulo: 'Almuerzo de Confraternidad Teresiana',
    subtitulo: 'Gran Fiesta Teresiana de Reencuentro',
    categoria: 'protocolar',
    categoriaNombre: 'Confraternidad',
    hora: '1:00 pm',
    lugar: 'Zarco Campestre, Cajamarca',
    lugarTipo: 'externo',
    mapUrl: 'https://maps.google.com/?q=Zarco+Campestre+Cajamarca',
    descripcion: 'Almuerzo oficial de confraternidad y celebración musical del 91° Aniversario.'
  }
];

// Detalle específico de las Áreas Curriculares del 21 de Setiembre (Secundaria)
const DISCIPLINAS_SECUNDARIA = [
  {
    area: 'Desarrollo Personal Ciudadanía y Cívica',
    actividad: '“Ruleta Digital Interactiva de la Identidad”',
    lugar: 'Aula de 1er grado',
    hora: '8:00 am',
    icono: 'users'
  },
  {
    area: 'Matemática',
    actividad: '“Calendario de Retos Matemáticos” - Premiación',
    lugar: 'Escenario de la IE',
    hora: '10:30 am',
    icono: 'calculator'
  },
  {
    area: 'Inglés',
    actividad: '“Digital Interactive Cultural Museum of Peru - We Are the Young Cultural Ambassadors of Peru”',
    lugar: 'Gimnasio',
    hora: '8:00 am',
    icono: 'globe'
  },
  {
    area: 'Ciencias Sociales',
    actividad: 'Presentación de canto: “Mi País tierra hermosa”',
    lugar: 'Aula de 1er grado “G”',
    hora: '8:30 am',
    icono: 'music'
  },
  {
    area: 'Comunicación',
    actividad: '“Concurso de Declamación a Santa Teresita del Niño Jesús”',
    lugar: 'Biblioteca de secundaria',
    hora: '9:00 am',
    icono: 'book-open'
  },
  {
    area: 'Educación para el Trabajo',
    actividad: '“Desafío: Creamos Prototipos con Residuos de la IE”',
    lugar: 'Patio de secundaria',
    hora: '9:00 am',
    icono: 'wrench'
  },
  {
    area: 'Ciencia y Tecnología',
    actividad: '“Exposición de proyectos de investigación por grado”',
    lugar: 'Laboratorios',
    hora: '9:00 am a 10:30 am',
    icono: 'flask'
  },
  {
    area: 'Arte y Cultura',
    actividad: '“Fiesta de Ritmos”',
    lugar: 'Patio de secundaria',
    hora: '11:00 am',
    icono: 'sparkles'
  },
  {
    area: 'Educación Física',
    actividad: 'Campeonato de vóley inter-grados',
    lugar: 'Coliseo de la IE',
    hora: '7:30 am',
    icono: 'trophy'
  }
];

// Detalle específico del Nivel Primaria (Juegos Florales)
const ACTIVIDADES_PRIMARIA = [
  { dia: '14/09', grado: '1er grado', titulo: '“Pupiletras Teresianas”', lugar: 'Escenario y patio del nivel primaria' },
  { dia: '16/09', grado: '2do grado', titulo: '“Jugando con la Chacana”', lugar: 'Escenario y patio del nivel primaria' },
  { dia: '16/09', grado: '6to grado', titulo: '“Desafío Teresiano”', lugar: 'Escenario y patio del nivel primaria' },
  { dia: '17/09', grado: '5to grado', titulo: '“Matemática y las Letras Divertidas”', lugar: 'Escenario y patio del nivel primaria' },
  { dia: '18/09', grado: '4to grado', titulo: '“Pasarela ECOMODA”', lugar: 'Escenario y patio del nivel primaria' },
  { dia: '21/09', grado: '3er grado', titulo: '“Sopa de Letras de Teresita”', lugar: 'Escenario y patio del nivel primaria' }
];

// ==========================================================================
// CONTROLADOR PRINCIPAL DE LA APLICACIÓN
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initDiptico3D();
  initAgenda();
  initJuegosFlorales();
  initModals();
  initShareFeatures();
});

/* --------------------------------------------------------------------------
   1. CONTROL DEL DÍPTICO 3D INTERACTIVO
   -------------------------------------------------------------------------- */
let currentBookState = 'open'; // 'open', 'cover', 'back', 'exterior', 'interior'

function initDiptico3D() {
  const leftPageImg = document.getElementById('book-page-left-img');
  const rightPageImg = document.getElementById('book-page-right-img');
  const leftZoomBtn = document.getElementById('zoom-btn-left');
  const rightZoomBtn = document.getElementById('zoom-btn-right');
  const bookContainer = document.getElementById('diptico-book-container');
  const statusLabel = document.getElementById('diptico-state-label');

  if (!leftPageImg || !rightPageImg) return;

  const btnPortada = document.getElementById('btn-view-portada');
  const btnAbierto = document.getElementById('btn-view-abierto');
  const btnContraportada = document.getElementById('btn-view-contraportada');

  function updateBookView(state) {
    currentBookState = state;

    // Resetear estados activos en botones de control
    [btnPortada, btnAbierto, btnContraportada].forEach(btn => btn && btn.classList.remove('active'));

    if (state === 'open') {
      // Interior desplegado (Presentación y Juegos Florales)
      leftPageImg.src = 'assets/images/panel_interior_izq.webp';
      rightPageImg.src = 'assets/images/panel_interior_der.webp';
      leftPageImg.alt = 'Interior Izquierdo - Presentación Sor Margarita';
      rightPageImg.alt = 'Interior Derecho - Juegos Florales';
      leftZoomBtn.dataset.img = 'assets/images/panel_interior_izq.png';
      rightZoomBtn.dataset.img = 'assets/images/panel_interior_der.png';
      if (btnAbierto) btnAbierto.classList.add('active');
      if (statusLabel) statusLabel.textContent = 'Interior Desplegado: Saludo Institucional y Programa de Actividades';
    } else if (state === 'cover') {
      // Vista frontal: Portada
      leftPageImg.src = 'assets/images/panel_contraportada.webp';
      rightPageImg.src = 'assets/images/panel_portada.webp';
      leftPageImg.alt = 'Contraportada - Fechas Centrales 25 y 26';
      rightPageImg.alt = 'Portada Oficial - 91 Años Santa Teresita';
      leftZoomBtn.dataset.img = 'assets/images/panel_contraportada.png';
      rightZoomBtn.dataset.img = 'assets/images/panel_portada.png';
      if (btnPortada) btnPortada.classList.add('active');
      if (statusLabel) statusLabel.textContent = 'Portada Conmemorativa: 91° Aniversario I.E.E. Santa Teresita';
    } else if (state === 'back') {
      // Contraportada ampliada
      leftPageImg.src = 'assets/images/panel_contraportada.webp';
      rightPageImg.src = 'assets/images/panel_portada.webp';
      if (btnContraportada) btnContraportada.classList.add('active');
      if (statusLabel) statusLabel.textContent = 'Contraportada: Clase del Recuerdo, Desfile Central y Almuerzo';
    }

    // Efecto de transición suave en 3D
    bookContainer.style.transform = 'scale(0.98)';
    setTimeout(() => {
      bookContainer.style.transform = 'scale(1)';
    }, 150);
  }

  // Event listeners para botones de vista 3D
  if (btnAbierto) btnAbierto.addEventListener('click', () => updateBookView('open'));
  if (btnPortada) btnPortada.addEventListener('click', () => updateBookView('cover'));
  if (btnContraportada) btnContraportada.addEventListener('click', () => updateBookView('back'));

  // Clic en los botones de zoom del díptico
  [leftZoomBtn, rightZoomBtn].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openZoomModal(btn.dataset.img || btn.querySelector('img')?.src);
      });
    }
  });

  // Vista inicial
  updateBookView('open');
}

/* --------------------------------------------------------------------------
   2. CONTROL DE LA AGENDA INTERACTIVA Y FILTROS
   -------------------------------------------------------------------------- */
let activeDate = 'all';
let activeCategory = 'all';
let searchQuery = '';

function initAgenda() {
  const eventsContainer = document.getElementById('events-container');
  const datePills = document.querySelectorAll('.date-pill');
  const categoryChips = document.querySelectorAll('.chip');
  const searchInput = document.getElementById('search-input');

  if (!eventsContainer) return;

  function renderEvents() {
    const filtered = EVENTOS_TERESIANOS.filter(ev => {
      // Filtro de Fecha
      const matchDate = activeDate === 'all' || ev.dia === activeDate;
      // Filtro de Categoría
      const matchCat = activeCategory === 'all' || ev.categoria === activeCategory;
      // Búsqueda por texto
      const textToSearch = `${ev.titulo} ${ev.subtitulo} ${ev.lugar} ${ev.categoriaNombre} ${ev.descripcion}`.toLowerCase();
      const matchSearch = !searchQuery || textToSearch.includes(searchQuery.toLowerCase());

      return matchDate && matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      eventsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: #94a3b8;">
          <p style="font-size: 1.2rem; font-weight: 600; margin-bottom: 0.5rem; color: #cbd5e1;">No se encontraron actividades con los filtros seleccionados</p>
          <p style="font-size: 0.9rem;">Prueba seleccionando "Todas las Fechas" o limpiando el buscador.</p>
        </div>
      `;
      return;
    }

    eventsContainer.innerHTML = filtered.map(ev => {
      const mapBtn = ev.mapUrl ? `
        <a href="${ev.mapUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-action btn-card-map" title="Ver en Google Maps">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>Ubicación</span>
        </a>
      ` : '';

      return `
        <article class="event-card">
          <div class="event-card-header">
            <span class="event-date-badge">${ev.dia} ${ev.mes}</span>
            <span class="event-category-badge">${ev.categoriaNombre}</span>
          </div>
          <h3 class="event-title">${ev.titulo}</h3>
          ${ev.subtitulo ? `<p class="event-subtitle">${ev.subtitulo}</p>` : ''}
          <div class="event-details-list">
            <div class="event-detail-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span><strong>Hora:</strong> ${ev.hora}</span>
            </div>
            <div class="event-detail-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span><strong>Lugar:</strong> ${ev.lugar}</span>
            </div>
          </div>
          <div class="event-actions">
            <button type="button" class="btn-card-action btn-card-photo" onclick="mostrarFotoEvento('${ev.id}')" title="Ver fotografía o imagen referencial de esta actividad">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
              <span>Ver Foto</span>
            </button>
            ${mapBtn}
          </div>
        </article>
      `;
    }).join('');
  }

  // Filtrado por Fecha
  datePills.forEach(pill => {
    pill.addEventListener('click', () => {
      datePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeDate = pill.dataset.date;
      renderEvents();
    });
  });

  // Filtrado por Categoría
  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = chip.dataset.category;
      renderEvents();
    });
  });

  // Buscador
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderEvents();
    });
  }

  // Render inicial
  renderEvents();
}

/* --------------------------------------------------------------------------
   FUNCIÓN: MOSTRAR MODAL DE FOTOGRAFÍA / AFICHE REFERENCIAL DE LA ACTIVIDAD
   -------------------------------------------------------------------------- */
window.mostrarFotoEvento = function(id) {
  const ev = EVENTOS_TERESIANOS.find(item => item.id === id);
  if (!ev) return;

  const modal = document.getElementById('modal-evento-foto');
  const badge = document.getElementById('modal-foto-badge');
  const titulo = document.getElementById('modal-foto-titulo');
  const subtitulo = document.getElementById('modal-foto-subtitulo');
  const content = document.getElementById('modal-foto-content');
  const detalles = document.getElementById('modal-foto-detalles');

  if (!modal) return;

  badge.textContent = `${ev.dia} ${ev.mes} • ${ev.categoriaNombre}`;
  titulo.textContent = ev.titulo;
  subtitulo.textContent = ev.subtitulo || '';

  detalles.innerHTML = `
    <span><strong>Hora:</strong> ${ev.hora}</span>
    <span><strong>Lugar:</strong> ${ev.lugar}</span>
  `;

  if (ev.imagen) {
    content.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.75rem;">
        <img src="${ev.imagen}" class="modal-foto-img" alt="${ev.titulo}" onclick="openZoomModal('${ev.imagen}')" style="cursor: zoom-in;" title="Clic para ver en tamaño completo">
        <p style="color: #cbd5e1; font-size: 0.85rem; max-width: 440px; margin: 0 auto; line-height: 1.45;">
          ${ev.descripcion}
        </p>
      </div>
    `;
  } else {
    content.innerHTML = `
      <div class="modal-placeholder-box">
        <div class="modal-placeholder-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
        </div>
        <h4 style="color: #ffffff; font-size: 1.05rem; font-weight: 700;">Fotografía / Afiche Referencial</h4>
        <p style="color: #cbd5e1; font-size: 0.86rem; max-width: 380px; line-height: 1.45;">
          ${ev.descripcion}
        </p>
        <div style="background: rgba(207, 168, 59, 0.12); border: 1px solid rgba(207, 168, 59, 0.3); border-radius: 9999px; padding: 0.35rem 0.85rem; color: #f7df8b; font-size: 0.78rem; font-weight: 500;">
          📌 Imagen en proceso de asignación por la comisión institucional
        </div>
      </div>
    `;
  }

  modal.classList.add('active');
};

/* --------------------------------------------------------------------------
   3. SECCIÓN JUEGOS FLORALES (SECUNDARIA Y PRIMARIA)
   -------------------------------------------------------------------------- */
function initJuegosFlorales() {
  const secundariaContainer = document.getElementById('juegos-secundaria-grid');
  const primariaContainer = document.getElementById('juegos-primaria-grid');
  const tabSecundaria = document.getElementById('tab-juegos-sec');
  const tabPrimaria = document.getElementById('tab-juegos-prim');

  if (secundariaContainer) {
    secundariaContainer.innerHTML = DISCIPLINAS_SECUNDARIA.map(d => `
      <div class="event-card" style="padding: 1.15rem;">
        <span class="event-category-badge" style="width: fit-content; margin-bottom: 0.5rem; background: rgba(27, 101, 173, 0.25); color: #93c5fd; border: 1px solid rgba(59, 130, 246, 0.3);">${d.area}</span>
        <h4 style="color: #ffffff; font-size: 1.05rem; font-weight: 700; margin-bottom: 0.6rem;">${d.actividad}</h4>
        <div class="event-details-list" style="margin-bottom: 0;">
          <div class="event-detail-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span><strong>Hora:</strong> ${d.hora}</span>
          </div>
          <div class="event-detail-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            <span><strong>Lugar:</strong> ${d.lugar}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  if (primariaContainer) {
    primariaContainer.innerHTML = ACTIVIDADES_PRIMARIA.map(p => `
      <div class="event-card" style="padding: 1.15rem;">
        <div class="event-card-header">
          <span class="event-date-badge">${p.dia}</span>
          <span class="event-category-badge" style="background: rgba(207, 168, 59, 0.2); color: #f7df8b;">${p.grado}</span>
        </div>
        <h4 style="color: #ffffff; font-size: 1.05rem; font-weight: 700; margin-bottom: 0.6rem;">${p.titulo}</h4>
        <div class="event-detail-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          <span><strong>Lugar:</strong> ${p.lugar}</span>
        </div>
      </div>
    `).join('');
  }

  if (tabSecundaria && tabPrimaria) {
    tabSecundaria.addEventListener('click', () => {
      tabSecundaria.classList.add('active');
      tabPrimaria.classList.remove('active');
      secundariaContainer.style.display = 'grid';
      primariaContainer.style.display = 'none';
    });

    tabPrimaria.addEventListener('click', () => {
      tabPrimaria.classList.add('active');
      tabSecundaria.classList.remove('active');
      secundariaContainer.style.display = 'none';
      primariaContainer.style.display = 'grid';
    });
  }
}

/* --------------------------------------------------------------------------
   4. MODALES: ZOOM, QR, COMPARTIR Y TOAST
   -------------------------------------------------------------------------- */
function initModals() {
  const zoomModal = document.getElementById('modal-zoom');
  const qrModal = document.getElementById('modal-qr');
  const shareModal = document.getElementById('modal-share');

  // Cerrar cualquier modal al hacer clic en botón de cierre o fuera del contenedor
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.closest('.modal-close-btn')) {
        modal.classList.remove('active');
      }
    });
  });

  // Tecla ESC para cerrar modales
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active'));
    }
  });

  // Botón Ver Díptico Completo (Page 1 & 2)
  const btnFullPage1 = document.getElementById('btn-zoom-page1');
  const btnFullPage2 = document.getElementById('btn-zoom-page2');
  if (btnFullPage1) btnFullPage1.addEventListener('click', () => openZoomModal('assets/images/page1_full.png'));
  if (btnFullPage2) btnFullPage2.addEventListener('click', () => openZoomModal('assets/images/page2_full.png'));
}

function openZoomModal(imgSrc) {
  const zoomModal = document.getElementById('modal-zoom');
  const zoomImg = document.getElementById('modal-zoom-target-img');
  if (!zoomModal || !zoomImg) return;

  zoomImg.src = imgSrc;
  zoomModal.classList.add('active');
}

/* --------------------------------------------------------------------------
   5. COMPARTIR, QR Y COPIAR ENLACE
   -------------------------------------------------------------------------- */
function initShareFeatures() {
  const shareBtn = document.getElementById('btn-share-main');
  const shareModal = document.getElementById('modal-share');
  const qrBtn = document.getElementById('btn-qr-main');
  const qrModal = document.getElementById('modal-qr');

  const shareWhatsApp = document.getElementById('share-whatsapp-btn');
  const copyLinkBtn = document.getElementById('share-copylink-btn');
  const qrContainer = document.getElementById('qr-canvas-container');

  // URL Oficial en Vercel (para que el QR y compartir siempre apunten a la web pública del colegio)
  const OFFICIAL_PRODUCTION_URL = 'https://aniversario-santateresita.vercel.app';
  const currentUrl = (window.location.protocol.startsWith('http') && !window.location.hostname.includes('localhost') && !window.location.hostname.includes('127.0.0.1'))
    ? window.location.href
    : OFFICIAL_PRODUCTION_URL;

  const shareTitle = '91° Aniversario I.E.E. Santa Teresita - Programa Oficial Interactivo';
  const shareText = `¡Te invitamos a celebrar los 91 Años de la I.E.E. Santa Teresita de Cajamarca!\nRevisa el programa oficial de actividades, fechas y juegos florales de manera interactiva aquí:\n${currentUrl}`;

  if (shareBtn && shareModal) {
    shareBtn.addEventListener('click', () => {
      // Si el navegador soporta Web Share API (ej. en smartphones)
      if (navigator.share && window.innerWidth < 768) {
        navigator.share({
          title: shareTitle,
          text: shareText,
          url: currentUrl
        }).catch(() => {
          shareModal.classList.add('active');
        });
      } else {
        shareModal.classList.add('active');
      }
    });
  }

  if (shareWhatsApp) {
    shareWhatsApp.addEventListener('click', () => {
      const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
      window.open(waUrl, '_blank');
    });
  }

  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(currentUrl).then(() => {
        showToast('¡Enlace web copiado al portapapeles!');
      }).catch(() => {
        showToast('Enlace oficial: ' + currentUrl);
      });
    });
  }

  // Generador de QR SVG dinámico integrado (sin librerías externas para máxima velocidad)
  if (qrBtn && qrModal) {
    qrBtn.addEventListener('click', () => {
      renderInlineQRCode(qrContainer, currentUrl);
      qrModal.classList.add('active');
    });
  }

  // Control de pétalos
  const petalsToggleBtn = document.getElementById('toggle-petals-btn');
  if (petalsToggleBtn && window.PetalEffect) {
    petalsToggleBtn.addEventListener('click', () => {
      window.PetalEffect.toggle();
    });
  }

  // View Switcher (Díptico vs Agenda vs Juegos Florales vs Discurso)
  const navPills = document.querySelectorAll('.switcher-btn');
  const sections = {
    'diptico': document.getElementById('sec-diptico'),
    'agenda': document.getElementById('sec-agenda'),
    'juegos': document.getElementById('sec-juegos'),
    'directora': document.getElementById('sec-directora')
  };

  navPills.forEach(pill => {
    pill.addEventListener('click', () => {
      navPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const target = pill.dataset.target;

      Object.keys(sections).forEach(key => {
        if (sections[key]) {
          if (target === 'all') {
            sections[key].style.display = 'block';
          } else {
            sections[key].style.display = key === target ? 'block' : 'none';
          }
        }
      });

      // Si se selecciona una sección específica, hacer scroll suave hacia ella
      if (target !== 'all' && sections[target]) {
        sections[target].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function showToast(message) {
  const toast = document.getElementById('toast-notification');
  if (!toast) return;

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
    <span>${message}</span>
  `;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/**
 * Generador de Código QR local y descargable
 * Apunta directamente a https://frankmejiaz.github.io/Diptico/
 */
function renderInlineQRCode(container, url) {
  if (!container) return;
  const qrTargetUrl = 'https://aniversario-santateresita.vercel.app';

  container.innerHTML = `
    <div style="background: #ffffff; padding: 1.25rem; border-radius: 14px; display: inline-block; box-shadow: 0 8px 30px rgba(0,0,0,0.35); margin-bottom: 1rem;">
      <img src="assets/images/qr_diptico.png" alt="Código QR Díptico Oficial" style="width: 230px; height: 230px; display: block; border-radius: 8px;">
    </div>
    
    <div style="display: flex; flex-direction: column; align-items: center; gap: 0.75rem;">
      <a href="assets/images/qr_diptico.png" download="QR-Diptico-Santa-Teresita-91-Aniversario.png" class="btn-ctrl" style="background: linear-gradient(135deg, #d4af37, #b8860b); color: #06182c; border: none; font-weight: 700; padding: 0.55rem 1.2rem; text-decoration: none;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        <span>Descargar Imagen QR (PNG)</span>
      </a>

      <p style="color: #cbd5e1; font-size: 0.82rem; max-width: 300px; text-align: center; line-height: 1.4;">
        Enlace directo: <strong style="color: #f7df8b; word-break: break-all;">${qrTargetUrl}</strong>
        <br><span style="color: #94a3b8; font-size: 0.75rem;">Escanea con la cámara de cualquier teléfono para abrir el díptico.</span>
      </p>
    </div>
  `;
}