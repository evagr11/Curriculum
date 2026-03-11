/* ============================================
   CARGA LAZY DE MAPAS DE GOOGLE
   ============================================ */
document.addEventListener("DOMContentLoaded", (event) => {
    
    // Cargar iframe del mapa con delay para mejorar rendimiento
    setTimeout(() => {
        const mapContainer = document.querySelector("#load-iframe-map");
        
        if (mapContainer) {
            mapContainer.innerHTML = `
                <iframe class="contacto__iframe"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=Padul,Granada,Spain&output=embed">
                </iframe>
            `;
        }
    }, 600);
    
});
