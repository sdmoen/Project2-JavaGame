document.addEventListener('DOMcontentLoaded', function(){
    DocumentType.getElementbyId('form').addEventListener('submit',function(event){
        event.preventDefault();
        emailjs.init("service_0gpeva2");
        emailjs.sendForm('form', this)
        .then(function(){
            console.log('SUCCESS!');
        }, function(error) {
            consolwe.log('FAILED...', error);
        }
        )
    })
})