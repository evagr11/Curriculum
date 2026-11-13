<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0%3A2B1F24%2C50%3A9C4D66%2C100%3AF2A7C0&height=200&section=header&text=Curriculum+web&fontSize=60&fontColor=fff&fontAlignY=38&desc=Portfolio+de+una+Desarrolladora+Multiplataforma&descAlignY=62&descSize=18" width="100%"/>
</div>

<div align="center">
  <a href="https://github.com/evagr11/Curriculum" target="_blank"><img src="https://img.shields.io/badge/Ver_Código-2B1F24?style=for-the-badge&logo=github&logoColor=white" alt="Ver Código"></a>
  <a href="https://evagr11.github.io/Curriculum/" target="_blank"><img src="https://img.shields.io/badge/Ver_Web-9C4D66?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Ver Web"></a>
</div>
  <br>
<div align="center">
  <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com/?font=JetBrains+Mono&size=18&duration=3500&pause=800&color=9C4D66&center=true&vCenter=true&width=600&lines=Portfolio+personal+con+HTML%2C+CSS+y+JS%3BCrema%2C+ciruela+y+una+firma+a+mano%3BCaligraf%C3%ADa+%2B+letra+de+c%C3%B3digo%3BM%C3%A1s+de+20+proyectos+con+su+p%C3%A1gina" alt="Typing SVG" /></a>
</div>

# Sobre el Proyecto

Esta es mi **web de portfolio y currículum**: el sitio donde está todo con detalle, mi trayectoria, mi formación y una página para cada proyecto. La he construido desde cero con HTML semántico, CSS separado por módulos y JavaScript sin librerías.

En noviembre de 2026 le hice un **lavado de cara**: pasé del rosa con Poppins a una identidad en **crema y ciruela** que mezcla una parte editorial (titulares en serif y mi nombre como una firma a mano) con detalles en letra de código, que es lo que hago.

<div align="center">
  <img src="https://github.com/user-attachments/assets/5c97d927-6ad8-4aba-95de-6dd0d8559459" alt="Inicio de la web de curriculum" width="80%"/>
  <p><em>Inicio de la web</em></p>
</div>

**Características principales:**

*   **Identidad propia:** Mi nombre en caligrafía (*Herr Von Muellerhoff*), titulares en *Cormorant Garamond*, etiquetas y botones en *JetBrains Mono* y el texto en *DM Sans*.
*   **Paleta crema y ciruela:** Todos los colores salen de variables CSS en `reset.css`, así que se cambian en un solo sitio.
*   **Portfolio con filtros:** Más de 20 proyectos (Android, Unity, web, backend, escritorio y apuntes) con su mockup o, si todavía no lo tiene, un recuadro con su icono, y una página de detalle para cada uno.
*   **Menú que se adapta:** En escritorio se lee como texto numerado; en tablet se queda en una barra estrecha de iconos y en el móvil pasa a una barra inferior.
*   **Responsive:** Las tarjetas pasan de 3 a 2 y a 1 columna y los titulares se ajustan en móvil.
*   **Movimiento reducido:** Si el sistema tiene activado «reducir movimiento», se desactivan las animaciones.

### Galería de Funcionalidades

| Sección de Portfolio | Vista de Detalles del Proyecto |
| :------------------: | :----------------------------: |
| <img src="https://github.com/user-attachments/assets/2986de1f-0456-4324-adc8-e36e1611edb2" alt="Ventana de portfolio con los proyectos y los filtros por tipo" width="100%"/> | <img src="https://github.com/user-attachments/assets/97b55afd-af32-429a-9f02-18645d0f3e6e" alt="Ventana de detalle de uno de los proyectos" width="100%"/> |
| *Ventana de portfolio, con los proyectos y los filtros por tipo.* | *Ventana de detalle de uno de los proyectos.* |

# Contexto del Proyecto

Es un **proyecto personal** que me sirve de carta de presentación para conseguir prácticas o mi primer trabajo como desarrolladora. Tengo dos webs con objetivos distintos: [evagr11.github.io](https://evagr11.github.io/), una presentación breve de un minuto, y esta, donde está todo con detalle. Las dos comparten la misma identidad visual desde el rediseño.

Para el rediseño probé varias direcciones (romántica editorial, tinta y código, cuaderno, contraste fuerte) y varios tonos de la misma paleta, y me quedé con la mezcla de las dos primeras en el tono crema y ciruela. El cambio está hecho casi todo en CSS: el HTML de las páginas sigue igual salvo las fuentes y el color del tema.

# Stack Tecnológico

<div align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white" alt="Font Awesome">
  <img src="https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=googlefonts&logoColor=white" alt="Google Fonts">
  <img src="https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages">
  <img src="https://img.shields.io/badge/Status-Publicada-9C4D66?style=for-the-badge" alt="Status Publicada">
</div>

<br>

<div align="center">

| Componente | Tecnología |
| :--- | :--------- |
| **Estructura** | `HTML5` semántico, una página por sección y por proyecto |
| **Estilos** | `CSS3` con variables, Grid y Flexbox, separado en módulos |
| **Interacción** | `JavaScript` (Vanilla): filtros del portfolio y mapas |
| **Tipografías** | `Herr Von Muellerhoff`, `Cormorant Garamond`, `JetBrains Mono` y `DM Sans` (Google Fonts) |
| **Iconos** | `Font Awesome 6` |
| **Despliegue** | `GitHub Pages` desde la rama `main` |

</div>

# Estructura del Proyecto

```bash
Curriculum/
├── assets
│   ├── cv/              # CV en PDF
│   ├── fonts/           # Font Awesome en local
│   ├── icons/           # Favicon
│   ├── img/             # Mockups y capturas de cada proyecto
│   └── pdf/             # Documentación de los proyectos
├── css
│   ├── reset.css        # Reset, paleta crema y ciruela y tipografías (variables)
│   ├── sidebar.css      # Barra lateral ciruela con la firma y el menú numerado
│   ├── estilos.css      # Inicio, Sobre mí, Currículum, Portafolio y Contacto
│   ├── proyecto.css     # Páginas de proyecto y componentes comunes
│   └── responsive.css   # Tablet (barra de iconos) y móvil (barra inferior)
├── js
│   ├── maps.js
│   └── menu.js
├── proyectos/           # Una página de detalle por proyecto
│   ├── imirly-android.html
│   ├── simcra.html
│   ├── el-extremeno.html
│   └── ...
├── contacto.html
├── curriculum.html
├── index.html
├── portfolio.html
└── sobremi.html
```

# Cómo Utilizar el Proyecto

### 1. Verla online

**[evagr11.github.io/Curriculum](https://evagr11.github.io/Curriculum/)**

### 2. Probarla en local

Es una web estática, así que no necesita instalar nada.

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/evagr11/Curriculum.git
    ```
2.  Navega a la carpeta:
    ```bash
    cd Curriculum
    ```
3.  Abre `index.html` en el navegador:
    ```bash
    # En Windows
    start index.html

    # En Linux
    xdg-open index.html
    ```

### 3. Cambiar los colores o las fuentes

Toda la paleta y las cuatro tipografías están al principio de `css/reset.css`, en `:root`. Si cambias `--frambuesa` o `--ciruela`, cambia toda la web.

<br>

<div align="center">
  <p>Creado por <strong>Eva Gallardo</strong></p>
  <a href="https://github.com/evagr11" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="https://www.linkedin.com/in/eva-gallardo-romero-830362349/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
</div>

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0%3A2B1F24%2C50%3A9C4D66%2C100%3AF2A7C0&height=120&section=footer" width="100%"/>
</div>
