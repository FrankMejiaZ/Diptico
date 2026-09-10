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
    titulo: 'Celebración por el 107° Aniversario Fundacional de la Congregación Canonesas de la Cruz',
    subtitulo: 'Actuación',
    categoria: 'protocolar',
    categoriaNombre: 'Protocolar / Religioso',
    hora: '10:00 am',
    lugar: 'Patio de secundaria',
    lugarTipo: 'colegio',
    descripcion: 'Actuación y homenaje por los 107 años de la Congregación Canonesas de la Cruz.'
  },
  {
    id: 'ev-15-canonesas-misa',
    imagen: 'assets/images/eventos/canonesas_cruz.jpeg',
    dia: '15',
    mes: 'Setiembre',
    fechaCompleta: '15 de Setiembre de 2026',
    titulo: 'Celebración por el 107° Aniversario Fundacional de la Congregación Canonesas de la Cruz',
    subtitulo: 'Eucaristía',
    categoria: 'protocolar',
    categoriaNombre: 'Protocolar / Religioso',
    hora: '12:30 pm',
    lugar: 'Capilla de la IE',
    lugarTipo: 'colegio',
    descripcion: 'Eucaristía y celebración solemne por los 107 años de la Congregación Canonesas de la Cruz.'
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
    dias: ['17', '18', '21', '22'],
    mes: 'Setiembre',
    fechaCompleta: 'Del 17 al 22 de Setiembre de 2026',
    titulo: 'COPA "ST EX ALUMNAS" (Vóley y Básquet)',
    subtitulo: 'Reencuentro de confraternidad deportiva de promociones (Del 17 al 22 de Setiembre)',
    categoria: 'deportes',
    categoriaNombre: 'Deportes / Exalumnas',
    hora: '5:30 pm',
    lugar: 'Coliseo de la IE',
    lugarTipo: 'colegio',
    descripcion: 'Torneo de vóley y básquetbol entre promociones de exalumnas teresianas. Se juega del 17 al 22 de Setiembre a las 5:30 pm en el Coliseo de la IE.'
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
    mapBtnText: 'Ver Catedral en Google Maps',
    tieneRecorrido: true,
    recorridoBadge: '22 DE SETIEMBRE • RUTA PROCESIONAL',
    recorridoTitulo: 'Procesión en Honor a Santa Teresita',
    recorridoDesc: 'Ruta procesional solemne desde las instalaciones de la I.E.E. Santa Teresita por las calles históricas de Cajamarca hacia la Iglesia La Catedral.',
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
    mapBtnText: 'Ver Catedral en Google Maps',
    tieneRecorrido: true,
    recorridoBadge: '22 DE SETIEMBRE • SANTA MISA CENTRAL',
    recorridoTitulo: 'Eucaristía en Honor a Santa Teresita',
    recorridoDesc: 'Llegada del recorrido procesional y celebración de la Santa Misa Central en la Iglesia La Catedral de Cajamarca.',
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
    mapBtnText: 'Ver Plaza de Armas en Google Maps',
    tieneRecorrido: true,
    recorridoBadge: '23 DE SETIEMBRE • PREGÓN INSTITUCIONAL',
    recorridoTitulo: 'Pregón Institucional de Aniversario',
    recorridoDesc: 'Alegre pasacalle y recorrido festivo por las principales calles de Cajamarca anunciando el 91° Aniversario de la I.E.E. Santa Teresita.',
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
    lugar: 'Aula de 1er grado “H”',
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
  initAgenda();
  initJuegosFlorales();
  initModals();
  initShareFeatures();

  // Si la sección del díptico está visible al cargar, inicializar el folleto
  const secDiptico = document.getElementById('sec-diptico');
  if (secDiptico && secDiptico.style.display !== 'none') {
    setTimeout(initDipticoFlipbook, 60);
  }
});

/* --------------------------------------------------------------------------
   1. CONTROL DEL DÍPTICO 3D INTERACTIVO (StPageFlip Virtual Folleto)
   -------------------------------------------------------------------------- */
let dipticoFlip = null;

function initDipticoFlipbook() {
  const flipContainer = document.getElementById('diptico-flipbook');
  if (!flipContainer) return;

  if (typeof window.St === 'undefined' || !window.St.PageFlip) {
    console.warn('Librería StPageFlip no disponible.');
    return;
  }

  // Si ya fue creado, únicamente actualizamos dimensiones
  if (dipticoFlip) {
    dipticoFlip.update();
    return;
  }

  try {
    dipticoFlip = new window.St.PageFlip(flipContainer, {
      width: 460,
      height: 650,
      size: "stretch",
      minWidth: 260,
      maxWidth: 520,
      minHeight: 370,
      maxHeight: 740,
      maxShadowOpacity: 0.55,
      showCover: true,
      mobileScrollSupport: false,
      usePortrait: true,
      startPage: 0,
      drawShadow: true,
      flippingTime: 750,
      useMouseEvents: true,
      showPageCorners: true,
      clickEventForward: true
    });

    const pageItems = flipContainer.querySelectorAll('.page-item');
    dipticoFlip.loadFromHTML(pageItems);

    // Flechas de navegación
    const btnPrev = document.getElementById('btn-flip-prev');
    const btnNext = document.getElementById('btn-flip-next');

    if (btnPrev) {
      btnPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        dipticoFlip.flipPrev();
      });
    }

    if (btnNext) {
      btnNext.addEventListener('click', (e) => {
        e.stopPropagation();
        dipticoFlip.flipNext();
      });
    }

    // Botones de salto directo a cada una de las 4 caras
    const btnP1 = document.getElementById('btn-goto-p1');
    const btnP2 = document.getElementById('btn-goto-p2');
    const btnP3 = document.getElementById('btn-goto-p3');
    const btnP4 = document.getElementById('btn-goto-p4');

    if (btnP1) btnP1.addEventListener('click', () => irAPaginaDiptico(0));
    if (btnP2) btnP2.addEventListener('click', () => irAPaginaDiptico(1));
    if (btnP3) btnP3.addEventListener('click', () => irAPaginaDiptico(2));
    if (btnP4) btnP4.addEventListener('click', () => irAPaginaDiptico(3));

    // Eventos de giro de página
    dipticoFlip.on('flip', (e) => {
      actualizarControlesFlipbook(e.data);
    });

    dipticoFlip.on('changeOrientation', () => {
      if (dipticoFlip) {
        actualizarControlesFlipbook(dipticoFlip.getCurrentPageIndex());
      }
    });

    // Botones de zoom HD en cada página
    flipContainer.querySelectorAll('.zoom-hint-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const imgPath = btn.dataset.img;
        if (imgPath && typeof openZoomModal === 'function') {
          openZoomModal(imgPath);
        }
      });
    });

    // Actualizar indicador inicial
    actualizarControlesFlipbook(0);

    // Redimensión en cambio de ventana
    window.addEventListener('resize', () => {
      if (dipticoFlip && document.getElementById('sec-diptico').style.display !== 'none') {
        dipticoFlip.update();
      }
    });

  } catch (err) {
    console.error('Error inicializando StPageFlip:', err);
  }
}

function irAPaginaDiptico(pageIndex) {
  if (!dipticoFlip) return;
  try {
    dipticoFlip.flip(pageIndex);
  } catch (err) {
    dipticoFlip.turnToPage(pageIndex);
  }
  actualizarControlesFlipbook(pageIndex);
}

function actualizarControlesFlipbook(pageIndex) {
  const pageIndicator = document.getElementById('flip-page-indicator');
  const statusLabel = document.getElementById('diptico-state-label');
  const btnPills = [
    document.getElementById('btn-goto-p1'),
    document.getElementById('btn-goto-p2'),
    document.getElementById('btn-goto-p3'),
    document.getElementById('btn-goto-p4')
  ];

  // Marcar botón activo correspondiente
  btnPills.forEach((btn, idx) => {
    if (!btn) return;
    if (idx === pageIndex) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const orientation = dipticoFlip ? dipticoFlip.getOrientation() : 'portrait';

  // Textos explicativos en el orden real de un díptico plegado
  const titulos = [
    'Cara 1: Portada Oficial — 91° Aniversario I.E.E. Santa Teresita',
    'Cara 2: Interior Izquierdo — Presentación Sor Margarita y actividades iniciales',
    'Cara 3: Interior Derecho — Juegos Florales y actividades hasta el 24 de Setiembre',
    'Cara 4: Contraportada (Última Cara) — Actos Centrales 25 y 26 de Setiembre'
  ];

  if (statusLabel) {
    if (orientation === 'landscape' && (pageIndex === 1 || pageIndex === 2)) {
      statusLabel.textContent = 'Caras 2 y 3: Interior Desplegado — Presentación y Actividades hasta el 24 de Setiembre';
      if (btnPills[1]) btnPills[1].classList.add('active');
      if (btnPills[2]) btnPills[2].classList.add('active');
    } else {
      statusLabel.textContent = titulos[pageIndex] || `Página ${pageIndex + 1}`;
    }
  }

  if (pageIndicator) {
    if (orientation === 'landscape' && (pageIndex === 1 || pageIndex === 2)) {
      pageIndicator.textContent = 'Caras 2 y 3 de 4 (Interior Abierto)';
    } else {
      pageIndicator.textContent = `Página ${pageIndex + 1} de 4`;
    }
  }
}

/* --------------------------------------------------------------------------
   2. CONTROL DE LA AGENDA INTERACTIVA Y FILTROS
   -------------------------------------------------------------------------- */
let activeDate = 'all';
let activeCategory = 'all';
let searchQuery = '';

/**
 * Determina la fecha inicial que se carga por defecto:
 * - Si se especifica en la URL (?fecha=16 o ?dia=16), se selecciona ese día.
 * - Si la fecha actual está en el mes de Setiembre y entre el 14 y 26, carga ese día.
 * - Si aún no empieza (antes del 14) o ya finalizaron las actividades (después del 26), carga en 'Todas Fechas'.
 */
function obtenerFechaInicial() {
  const params = new URLSearchParams(window.location.search);
  const paramFecha = params.get('fecha') || params.get('dia');
  if (paramFecha) {
    const pill = document.querySelector(`.date-pill[data-date="${paramFecha}"]`);
    if (pill) return paramFecha;
  }

  const hoy = new Date();
  const mes = hoy.getMonth(); // 8 = Setiembre (0=Ene ... 8=Set)
  const dia = hoy.getDate();

  if (mes === 8) {
    if (dia >= 14 && dia <= 26) {
      const diaStr = dia.toString();
      const pill = document.querySelector(`.date-pill[data-date="${diaStr}"]`);
      if (pill) {
        return diaStr;
      }
    }
  }

  return 'all';
}

function initAgenda() {
  const eventsContainer = document.getElementById('events-container');
  const datePills = document.querySelectorAll('.date-pill');
  const categoryChips = document.querySelectorAll('.chip');
  const searchInput = document.getElementById('search-input');

  if (!eventsContainer) return;

  function renderEvents() {
    // Si se seleccionó la píldora "Saludo Directora" en el carrusel de fechas
    if (activeDate === 'directora') {
      eventsContainer.innerHTML = `
        <div class="directora-parchment" style="grid-column: 1 / -1; margin: 0 auto; max-width: 820px; width: 100%;">
          <div class="directora-header">
            <span class="section-tag" style="color: #99781a;">Mensaje Institucional</span>
            <h2 class="directora-presentacion-title">Presentación</h2>
          </div>

          <div class="directora-body">
            <p>
              <strong>¡Estimada Comunidad Educativa Santa Teresita, apreciadas Exalumnas y entrañable Región de Cajamarca!</strong> Me llena de regocijo estrechar un afectuoso saludo, con ocasión de celebrar el nonagésimo primer año de vida institucional. Celebramos 91 años, educando con excelencia a la niñez y juventud cajamarquina, consolidándonos como un faro vivo de luz, dignidad y esperanza que ilumina a toda nuestra región.
            </p>

            <p>
              Nacida para guiar la educación femenina, la <strong>I.E.E. Santa Teresita</strong> forma a las líderes de nuestra sociedad. Frente a los desafíos de hoy, respondemos con pedagogía contemporánea e innovadora, preparando ciudadanas críticas, éticas y competentes para los desafíos del siglo XXI.
            </p>

            <p>
              Renovamos el compromiso sagrado de evangelizar desde la cultura, los valores y la fe. Trascendemos la simple instrucción para ofrecer un aprendizaje integral donde la fe se vive, la ciencia se descubre y los valores guían el pensamiento y la vida de las nuevas generaciones.
            </p>

            <p>
              Agradecemos a Dios y a nuestra patrona, <strong>Santa Teresita del Niño Jesús</strong>, por sostener nuestra labor. Este proyecto triunfa gracias al compromiso del personal de la I E y al acompañamiento de los padres de familia en la formación integral de nuestras estudiantes. ¡Que la bendición divina nos acompañe para seguir educando con ciencia, virtud y acción!
            </p>
          </div>

          <div class="directora-closing">
            <p class="directora-bendicion">¡¡¡ Feliz y bendecido 91 Aniversario Institucional !!!</p>
            <div class="directora-firma">Sor Margarita Castilla Félix</div>
            <div class="directora-cargo">DIRECTORA</div>
          </div>
        </div>
      `;
      return;
    }

    const filtered = EVENTOS_TERESIANOS.filter(ev => {
      // Filtro de Fecha: admite eventos multidía como Copa ST Ex Alumnas (del 17 al 22)
      const matchDate = activeDate === 'all' || (ev.dias ? ev.dias.includes(activeDate) : ev.dia === activeDate);
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
      const dateBadgeText = (ev.dias && ev.dias.length > 1) ? '17 al 22 SET' : `${ev.dia} ${ev.mes}`;

      const recorridoBtn = ev.tieneRecorrido ? `
        <button type="button" class="btn-recorrido" onclick="abrirModalRecorrido('${ev.id}')" title="Ver recorrido interactivo de esta actividad">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
            <line x1="9" y1="3" x2="9" y2="18"></line>
            <line x1="15" y1="6" x2="15" y2="21"></line>
          </svg>
          <span>Ver Recorrido Interactivo</span>
        </button>
      ` : '';

      return `
        <article class="event-card">
          <div class="event-card-header">
            <span class="event-date-badge">${dateBadgeText}</span>
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
          ${recorridoBtn}
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
      if (activeDate === 'directora') {
        activeDate = 'all';
        datePills.forEach(p => p.classList.toggle('active', p.dataset.date === 'all'));
      }
      renderEvents();
    });
  });

  // Buscador
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      if (searchQuery && activeDate === 'directora') {
        activeDate = 'all';
        datePills.forEach(p => p.classList.toggle('active', p.dataset.date === 'all'));
      }
      renderEvents();
    });
  }

  // Auto-seleccionar píldora según la fecha inicial calculada
  activeDate = obtenerFechaInicial();
  datePills.forEach(pill => {
    if (pill.dataset.date === activeDate) {
      pill.classList.add('active');
      setTimeout(() => {
        pill.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
      }, 150);
    } else {
      pill.classList.remove('active');
    }
  });

  // Render inicial
  renderEvents();
}

/* --------------------------------------------------------------------------
   FUNCIÓN: MOSTRAR MODAL DE RECORRIDO INTERACTIVO (PROCESIÓN, EUCARISTÍA Y PREGÓN)
   -------------------------------------------------------------------------- */
window.abrirModalRecorrido = function(id) {
  const ev = EVENTOS_TERESIANOS.find(item => item.id === id);
  if (!ev) return;

  const modal = document.getElementById('modal-recorrido');
  const badge = document.getElementById('modal-recorrido-badge');
  const titulo = document.getElementById('modal-recorrido-titulo');
  const desc = document.getElementById('modal-recorrido-desc');
  const mapsBtn = document.getElementById('modal-recorrido-maps-btn');

  if (!modal) return;

  if (badge) badge.textContent = ev.recorridoBadge || `${ev.dia} DE SETIEMBRE • RECORRIDO OFICIAL`;
  if (titulo) titulo.textContent = ev.recorridoTitulo || ev.titulo;
  if (desc) desc.textContent = ev.recorridoDesc || ev.descripcion;
  if (mapsBtn) {
    if (ev.mapUrl) {
      mapsBtn.href = ev.mapUrl;
      mapsBtn.style.display = 'inline-flex';
      const span = mapsBtn.querySelector('span');
      if (span) span.textContent = ev.mapBtnText || 'Ver en Google Maps';
    } else {
      mapsBtn.style.display = 'none';
    }
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

  // View Switcher (Programa Oficial vs Juegos Florales vs Díptico 3D)
  const navPills = document.querySelectorAll('.switcher-btn');
  const sections = {
    'agenda': document.getElementById('sec-agenda'),
    'juegos': document.getElementById('sec-juegos'),
    'diptico': document.getElementById('sec-diptico')
  };

  navPills.forEach(pill => {
    pill.addEventListener('click', () => {
      navPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const target = pill.dataset.target;

      Object.keys(sections).forEach(key => {
        if (sections[key]) {
          sections[key].style.display = key === target ? 'block' : 'none';
        }
      });

      // Si se selecciona Díptico 3D, asegurar que StPageFlip calcule dimensiones correctamente
      if (target === 'diptico') {
        setTimeout(() => {
          initDipticoFlipbook();
        }, 60);
      }

      // Si se selecciona una sección específica, hacer scroll suave hacia ella
      if (sections[target]) {
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