document.addEventListener('DOMcontentLoaded', function(){
    DocumentType.getElementbyId('form').addEventListener('submit',function(event){
        event.preventDefault();
        emailjs.init("user_855GYOKzNke21zoGuscrq");
        emailjs.sendForm('form', this)
        .then(function(){
            console.log('SUCCESS!');
        }, function(error) {
            consolwe.log('FAILED...', error);
        }
        )
    })
})