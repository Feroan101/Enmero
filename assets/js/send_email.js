// Initialize EmailJS
(function() {
    emailjs.init({
        publicKey: 'AuiQXjhSdqgs86ZiX'
    });
})();

// Form submit event handler
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            emailjs.sendForm('service_dvrelxi', 'template_h0qcny7', this)
                .then(function(response) {
                    // Show success message
                    document.getElementById('successMessage').classList.remove('d-none');
                    document.getElementById('errorMessage').classList.add('d-none');
                    // Clear the form fields
                    form.reset();
                }, function(error) {
                    // Show error message
                    document.getElementById('errorMessage').classList.remove('d-none');
                    document.getElementById('successMessage').classList.add('d-none');
                });
        });
    }
});
