document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio do formulário

        // Exibe a mensagem de sucesso
        successMessage.classList.remove('hidden');
        successMessage.classList.add('show');

        // Limpa o formulário
        contactForm.reset();

        // Remove a mensagem de sucesso após alguns segundos
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 5000); // Duração de 5 segundos
    });
});
