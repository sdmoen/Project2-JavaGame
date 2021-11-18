(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_855GYOKzNke21zoGuscrq');
})();

window.onload = function() {
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        // this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_0gpeva2','template_w8a42b5', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}