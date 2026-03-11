/* ============================================
   MENÚ TOGGLE - RESPONSIVE
   ============================================ */
document.addEventListener("DOMContentLoaded", (event) => {
    let button = document.querySelector(".layout__menu-toggle");
    
    // Solo ejecutar si existe el botón de toggle
    if (button) {
        let icon_bars = document.querySelector(".layout__menu-toggle .fa-bars");
        let icon_xmark = document.querySelector(".layout__menu-toggle .fa-xmark");
        let aside = document.querySelector(".layout__aside");

        button.addEventListener("click", (event) => {
            let visible = document.querySelector(".layout__aside--visible");

            if (!visible) {
                aside.classList.add("layout__aside--visible");
                if (icon_bars) icon_bars.style.opacity = 0;
                if (icon_xmark) icon_xmark.style.opacity = 1;
            } else {
                aside.classList.remove("layout__aside--visible");
                if (icon_bars) icon_bars.style.opacity = 1;
                if (icon_xmark) icon_xmark.style.opacity = 0;
            }
        });

        window.addEventListener("resize", () => {
            let size = parseInt(document.body.clientWidth);

            if (size <= 1060) {
                aside.classList.remove("layout__aside--visible");
                if (icon_bars) icon_bars.style.opacity = 1;
                if (icon_xmark) icon_xmark.style.opacity = 0;
            }
        });
    }
});
