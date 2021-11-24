/**
 * Sends data collected in contact form to email after the submit button is clicked calls the toggleMessage function
 * Code written from the official EmailJS tuttorial https://www.emailjs.com/docs/tutorial/creating-contact-form/
 */

 (function () {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init("user_855GYOKzNke21zoGuscrq");
})();

window.onload = function () {
    document.getElementById("form").addEventListener("submit", function (event) {
        event.preventDefault();
        emailjs.sendForm("service_0gpeva2", "template_w8a42b5", this).then(
            function () {
                console.log("SUCCESS!");
            },
            function (error) {
                console.log("FAILED...", error);
            }
        );
        toggleMessage();
    });
};

// function to toggle screen to display thank you message when form sent sucessfully

function toggleMessage() {
    let html = `<p class='message'>Your feedback is much appreciated</p>`;
    document.getElementById("form").innerHTML = html;
}
