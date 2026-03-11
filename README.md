# Portfolio Eva Gallardo - Estructura de Archivos

Este proyecto ha sido refactorizado para separar el CSS en archivos independientes, mejorando la organización y mantenibilidad del código.

## 📁 Estructura de Carpetas

```
/
├── css/
│   ├── reset.css         # Reset y variables CSS
│   ├── sidebar.css       # Estilos de la barra lateral
│   ├── estilos.css       # Estilos del contenido principal
│   └── responsive.css    # Media queries responsivas
├── js/
│   ├── menu.js           # Funcionalidad del menú toggle
│   └── maps.js           # Carga lazy de mapas
├── assets/
│   ├── img/              # Imágenes
│   ├── icons/            # Iconos
│   └── cv/               # CV en PDF
├── index.html            # Página principal (Home)
├── sobremi.html          # Página Sobre Mí
├── curriculum.html       # Página Curriculum
├── portafolio.html       # Página Portafolio
├── contacto.html         # Página Contacto
└── manifest.json         # Configuración PWA
```

## 📄 Descripción de Archivos CSS

### reset.css
- Reset de estilos por defecto del navegador
- Configuración base (tipografía, box-sizing)
- Variables CSS globales (colores, tamaños)

### sidebar.css
- Barra lateral completa (`.layout__aside`)
- Foto de perfil y nombre
- Menú de navegación con tooltips
- Redes sociales
- Botón de descarga CV
- Footer del sidebar

### estilos.css
- Layout principal (`.layout`, `.layout__content`)
- Estilos de páginas específicas:
  - **Home**: Header, proyectos, tech stack
  - **Sobre Mí**: Intro, cards, código Java, timeline, cita
  - **Curriculum**: Grid, educación, experiencia, skills, idiomas
  - **Portafolio**: Filtros, galería de proyectos
  - **Contacto**: Info, mapas, botones de contacto
- Animaciones y efectos
- Scrollbar personalizada

### responsive.css
- Media queries para diferentes tamaños de pantalla:
  - `1200px`: Tablet grande
  - `992px`: Tablet (sidebar colapsado)
  - `768px`: Móvil (navegación inferior)
  - `480px`: Móvil pequeño

## 🚀 Cómo Usar

1. **Copiar archivos**: Copia toda la estructura a tu servidor web
2. **Mantener rutas**: Asegúrate de que las rutas a `css/` y `js/` sean correctas
3. **Assets**: Coloca tus imágenes en `assets/img/` y el CV en `assets/cv/`

## 📝 Notas

- Los archivos HTML ahora enlazan a los CSS externos en el `<head>`
- Se eliminó todo el CSS embebido de los HTML
- Se agregó `portafolio.html` que no existía antes
- Los JavaScript están separados en `js/`
- Las variables CSS facilitan cambiar colores desde un solo lugar
