// main.js - Funcionalidades del lado del cliente

document.addEventListener('DOMContentLoaded', function() {
    console.log('La aplicación RutasApp se ha cargado correctamente');
    
    // Manejar envío de formularios
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // Prevenir el envío del formulario ya que no tenemos backend configurado
            e.preventDefault();
            
            // Determinar qué tipo de formulario es
            const isLoginForm = window.location.pathname === '/login';
            
            if (isLoginForm) {
                const username = document.getElementById('user').value;
                alert(`Bienvenido ${username}! Esta es una demostración, el formulario no se enviará realmente.`);
            } else {
                const name = document.getElementById('name').value;
                alert(`Gracias ${name} por tu mensaje. Esta es una demostración, el formulario no se enviará realmente.`);
            }
            
            // Opcional: Redirigir a la página de inicio
            // window.location.href = '/';
        });
    });
});