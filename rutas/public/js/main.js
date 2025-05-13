// Script para el lado del cliente
document.addEventListener('DOMContentLoaded', function() {
    console.log('Aplicación cargada correctamente');
    
    // Marcar el enlace activo en la navegación
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath === linkPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Manejar envío de formularios
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // Por ahora, evitamos que los formularios se envíen
            // ya que no tenemos backend para procesarlos
            e.preventDefault();
            
            const formType = form.classList.contains('login-form') ? 'login' : 'contact';
            
            if (formType === 'login') {
                const username = document.getElementById('user').value;
                alert(`¡Hola ${username}! Esta es solo una demostración, no hay backend real para procesar tu inicio de sesión.`);
            } else {
                const name = document.getElementById('name').value;
                alert(`Gracias ${name} por tu mensaje. Esta es solo una demostración, no hay backend real para procesar tu formulario.`);
            }
        });
    });
});