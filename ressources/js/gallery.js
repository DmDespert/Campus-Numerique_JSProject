$(document).ready(function(){
    $('.row-display').on('click', function() {
        $('.gallery').css('flex-direction', 'row');
    });
    $('.column-display').on('click', function() {
        $('.gallery').css('flex-direction', 'column');
    });
});


