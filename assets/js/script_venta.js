window.onload = function () {
    
    const nombreRecibido = localStorage.getItem('propiedadesVenta');
    const elementoMensaje = document.getElementById('propVentas');

    // Usar plantillas literales para interpolar la variable
    elementoMensaje.innerHTML = `${nombreRecibido}`;
};