// Inicializar EmailJS con la clave pública
emailjs.init("xEA2aBIqVj198adgp"); // Reemplaza "YOUR_PUBLIC_KEY" con tu clave pública de EmailJS

// JavaScript para el menú de navegación móvil
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('nav-open');
});

// Manejar el envío del formulario de contacto con EmailJS y SweetAlert
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm('service_tdree0d', 'template_8rp8k7m', this)
        .then(function(response) {
            Swal.fire({
                title: 'Mensaje enviado',
                text: 'Nos pondremos en contacto pronto.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            });
            document.getElementById("contact-form").reset();
        }, function(error) {
            Swal.fire({
                title: 'Error',
                text: 'No se pudo enviar el mensaje. Intenta de nuevo.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
            console.error('Error al enviar el formulario:', error);
        });
});
