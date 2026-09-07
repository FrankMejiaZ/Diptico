# 🌹 Díptico Interactivo 3D — 91° Aniversario I.E.E. Santa Teresita

Sitio web interactivo conmemorativo del **91° Aniversario de la Institución Educativa Emblemático Santa Teresita** de Cajamarca (1935 - 2026).

> **Lema Institucional:** *"Ciencia — Virtud — Acción"*  
> *"Un legado que inspira, un futuro que construimos juntos"*

---

## ✨ Características Principales

1. **Simulador de Díptico 3D Realista:**
   - Visualización de la portada oficial, interior desplegado con el saludo de la Directora Sor Margarita Castilla Félix y contraportada con los actos centrales.
   - Botones para examinar cada lámina en **Alta Definición (HD)**.
2. **Agenda Oficial Interactiva:**
   - Búsqueda en tiempo real por actividades, horas, lugares o asignaturas.
   - Filtro rápido por fechas (del 14 al 26 de setiembre) y por niveles (Primaria, Secundaria, Protocolar, Deportes).
   - Botón directo **"Agendar"** que añade automáticamente cada actividad a tu **Google Calendar**.
   - Enlace directo a **Google Maps** para eventos externos (Plaza de Armas, Catedral, Zarco Campestre, etc.).
3. **Juegos Florales Teresianos 2026:**
   - Sección especial *"Caminito de Santa Teresita: Floreciendo en Arte y Talento"*.
   - Desglose detallado de las 9 áreas curriculares de Secundaria y las actividades por grados de Primaria.
4. **Presentación Institucional:**
   - Mensaje solemne completo de la Directora Sor Margarita Castilla Félix maquetado en estilo pergamino teresiano.
5. **Efecto Conmemorativo de Pétalos de Rosas:**
   - Animación ligera en Canvas (*"Bajo una lluvia de rosas"*), con interruptor para activar o pausar con un clic.
6. **Código QR y Compartir:**
   - Generador de Código QR en pantalla listo para ser proyectado en eventos o impreso en programas físicos.
   - Botón para compartir por WhatsApp o copiar enlace con un solo toque.
   - Descarga directa del **PDF Oficial Original**.

---

## 🚀 ¿Cómo abrir y usar este proyecto?

Este proyecto fue diseñado para funcionar de **dos maneras complementarias**:

### Método 1: Doble Clic Directo (Sin instalar nada)
1. Navega hasta esta carpeta en tu Explorador de Archivos de Windows.
2. Haz doble clic en el archivo **`index.html`**.
3. Se abrirá inmediatamente en tu navegador preferido (Chrome, Edge, Firefox, etc.) sin necesidad de internet ni servidores.

---

### Método 2: Con Mini-Servidor Local (Puerto seguro 8095)
Para evitar conflictos con puertos de Docker u otros proyectos (como 80, 8080, 3000, 5000), se ha configurado el puerto **8095**:

1. Haz doble clic en el archivo **`start-server.bat`**.
2. Se iniciará el servidor local y se abrirá automáticamente tu navegador en:
   ```
   http://localhost:8095
   ```
3. Para apagarlo, simplemente cierra la ventana de la consola o presiona `Ctrl + C`.

---

## 🌐 Cómo publicar GRATIS en GitHub Pages (Paso a Paso)

Tu repositorio es: [https://github.com/FrankMejiaZ/Diptico](https://github.com/FrankMejiaZ/Diptico)

Para tener tu enlace web público y accesible para cualquier persona mediante un código QR o enlace en redes sociales:

1. **Sube los cambios a GitHub:**
   Abre una terminal en esta carpeta y ejecuta:
   ```bash
   git add .
   git commit -m "feat: Diptico interactivo 3D del 91 Aniversario Santa Teresita"
   git push -u origin main
   ```
   *(Si es la primera vez, pedirá iniciar sesión con tu cuenta de GitHub).*

2. **Activa GitHub Pages en la web de GitHub:**
   - Ve a tu repositorio: `https://github.com/FrankMejiaZ/Diptico`
   - Haz clic en la pestaña **Settings** (Configuración) arriba a la derecha.
   - En el menú lateral izquierdo, haz clic en **Pages**.
   - En **Build and deployment** > **Source**, selecciona **"Deploy from a branch"**.
   - En **Branch**, selecciona la rama **`main`** y la carpeta **`/(root)`**.
   - Haz clic en **Save** (Guardar).

3. **¡Listo!** En unos 60 segundos, GitHub generará tu enlace público oficial:
   ```
   https://frankmejiaz.github.io/Diptico/
   ```
   Cualquier persona, estudiante, padre de familia o autoridad podrá abrirlo desde cualquier celular en el mundo escaneando el código QR o pulsando el link.

---

## 📁 Estructura del Repositorio

```
Diptico/
├── index.html                 # Página principal interactiva (HTML5)
├── start-server.bat           # Lanzador del mini-servidor local (puerto 8095)
├── README.md                  # Manual de uso y despliegue
├── assets/
│   ├── css/
│   │   └── style.css          # Estilos visuales, perspectiva 3D y diseño responsivo
│   ├── js/
│   │   ├── app.js             # Lógica de la agenda, filtros, calendario y modales
│   │   └── petals.js          # Animación de lluvia de rosas teresianas
│   ├── images/
│   │   ├── panel_portada.webp      # Portada optimizada para web
│   │   ├── panel_contraportada.webp# Contraportada optimizada
│   │   ├── panel_interior_izq.webp # Interior izquierdo (Presentación)
│   │   ├── panel_interior_der.webp # Interior derecho (Juegos Florales)
│   │   ├── page1_full.png          # Lámina 1 completa original en HD
│   │   └── page2_full.png          # Lámina 2 completa original en HD
│   └── docs/
│       └── diptico-oficial.pdf     # Documento PDF oficial para descarga
```

---

*I.E.E. Santa Teresita — Cajamarca, Perú*  
*91 Años formando corazones que transforman el presente y construyen futuro.*
