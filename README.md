# Portfolio Eva Gallardo - Estructura de Archivos

Portfolio personal estático de Eva Gallardo, Desarrolladora de Aplicaciones Multiplataforma (DAM). Proyecto refactorizado con CSS modular, diseño responsive y navegación fluida entre proyectos.

## 📁 Estructura de Carpetas

```
/
├── css/
│   ├── reset.css         # Reset y variables CSS
│   ├── sidebar.css       # Estilos de la barra lateral
│   ├── estilos.css       # Estilos del contenido principal
│   ├── responsive.css    # Media queries responsivas
│   └── proyecto.css      # Estilos específicos para páginas de proyecto
├── js/
│   ├── menu.js           # Funcionalidad del menú toggle
│   └── maps.js           # Carga lazy de mapas
├── assets/
│   ├── img/              # Imágenes
│   ├── icons/            # Iconos
│   ├── cv/               # CV en PDF
│   └── pdf/              # Documentación técnica (LaTeX)
├── proyectos/
│   ├── app-tickets.html      # App de gestión de incidencias 
│   ├── imirly-android.html   # TFC - App de servicios profesionales (Kotlin/Spring Boot)
│   ├── inventario-lacimurga.html  # App web de inventario (HTML/CSS/JS)
│   ├── marketplace-android.html   # App ecommerce en desarrollo (Kotlin/Jetpack Compose)
│   ├── multi-move.html       # Sandbox plataformas 2D (Unity/C#)
│   ├── pokedex.html          # Enciclopedia Pokémon con PokeAPI (Java/XML)
│   ├── real-time-tactics.html   # Juego táctica 1v1 por turnos (Unity/C#)
│   ├── sama-vintage.html     # Ecommerce joyería vintage (HTML/CSS/JS)
│   └── tri-blaster.html      # Shooter arcade 2D (Unity/C#)
├── index.html            # Página principal (Home)
├── sobremi.html          # Página Sobre Mí
├── curriculum.html       # Página Curriculum
├── portfolio.html        # Página Portafolio con filtros
├── contacto.html         # Página Contacto con mapas
└── manifest.json         # Configuración PWA
```


## 📄 Descripción de Archivos

### CSS
| Archivo | Descripción |
|---------|-------------|
| `reset.css` | Reset de estilos, variables CSS globales (colores, tamaños, tipografía) |
| `sidebar.css` | Barra lateral fija: foto, nombre, menú de navegación con efecto hover, redes sociales, botón CV, footer |
| `estilos.css` | Layout principal y estilos de todas las secciones (Home, Sobre Mí, Curriculum, Portafolio, Contacto) + animaciones |
| `responsive.css` | Media queries: tablet grande (1200px), tablet con sidebar colapsado (992px), móvil con navegación inferior (768px), móvil pequeño (480px) |
| `proyecto.css` | Estilos reutilizables para páginas de proyecto: hero, features grid, tech stack, galería, navegación entre proyectos |

### JavaScript
| Archivo | Descripción |
|---------|-------------|
| `menu.js` | Toggle del menú responsive, gestión de iconos hamburguesa/cerrar, comportamiento en resize |
| `maps.js` | Carga lazy de iframes de Google Maps para mejorar rendimiento |

## 🎨 Stack Tecnológica del Portfolio

- **Frontend**: HTML5 semántico, CSS3 (Flexbox/Grid), JavaScript vanilla
- **Diseño**: Mobile-first, sidebar responsive, tematización con variables CSS
- **Iconos**: Font Awesome 6.4
- **Tipografía**: Google Fonts (Poppins)
- **PWA**: Manifest.json con theme color e iconos

## 🚀 Cómo Usar

1. **Clonar o descargar** el repositorio
2. **Mantener rutas**: Asegúrate de que las rutas a `css/`, `js/` y `assets/` sean correctas desde cada HTML
3. **Assets**: Coloca tus imágenes en `assets/img/`, el CV en `assets/cv/` y documentos en `assets/pdf/`
4. **Abrir**: Ejecuta `index.html` en cualquier navegador moderno (no requiere servidor)

## 📝 Notas de Mantenimiento

- **Variables CSS**: Modifica colores y tamaños globales desde `reset.css`
- **Proyectos nuevos**: Crea el HTML en `proyectos/`, enlázalo desde `portfolio.html` y añade la navegación anterior/siguiente
- **Filtros del portfolio**: Usa `data-category="android"`, `"unity"` o `"web"` para categorizar correctamente
- **Navegación entre proyectos**: Cada proyecto debe enlazar al anterior y siguiente para flujo continuo
- **CSS embebido**: Evita estilos inline; usa `proyecto.css` para estilos comunes de proyectos