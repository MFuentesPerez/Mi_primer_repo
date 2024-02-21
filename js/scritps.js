$(document).ready(function(){
/*     console.log('Documento cargado');
 */
    $('#task-form').submit(function (e) {  /* ejemplo con Jquery, este es mas sencillo */
        e.preventDefault();
        let task = $('#task-input').val().trim();

        if(task){
            $('#task-list').append('<li class="list-group-item">' + task + '</li>');
        }
    })


    /* const form = document.querySelector('#task-form');  Ejemplo usando javascript
    form.addEventListener('submit', function(e){
        e.preventDefault();
    }) */
})