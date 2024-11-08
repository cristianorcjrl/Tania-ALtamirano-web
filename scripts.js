// JavaScript para el menú de navegación móvil
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('nav-open');
});

// Manejar el envío del formulario de contacto con EmailJS y SweetAlert
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.send("service_tdree0d", "template_8rp8k7m", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }).then(function(response) {
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
    });
});
