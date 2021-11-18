document.addEventListener('DOMcontentLoaded', function(){
    document.getElementbyId('form').addEventListener('submit', function (event){
        event.preventDefault();
        emailjs.init("user_855GYOKzNke21zoGuscrq");
        emailjs.sendForm('service_0gpeva2','template_w8a42b5' ,this)
        .then(function(){
            console.log('SUCCESS!');
        }, function(error) {
            console.log('FAILED...', error);
        }
        )
    })
})