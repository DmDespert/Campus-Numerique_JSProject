let nb = 1;

function gallery() {
    for (let i=0; i<10; i++) {
        $('.block-img').append(
            '<img src="ressources/img/carousel/car1.jpeg" alt="img'+i+'" class="responsive">\
            <button type="button" class="hidden-btn"></button>'
        );
    }
}

function addImage() {
    let inputUrl = document.getElementById("getUrl").value;
    $('.block-img').append(
        '<img src="'+inputUrl+'" alt="" class="responsive img'+nb+'">\
        <button class="img'+nb+'" onclick="removeImg('+nb+')">X</button>'
    );
    nb++;
}

function removeImg(id) {
    $('.img'+id).remove();
}

$(document).ready(function () {
    gallery();

    $('.row-display').on('click', function () {
        $('.block-img').css('flex-direction', 'row');
        $('.responsive').css('max-width', '30%');
    });
    $('.column-display').on('click', function () {
        $('.block-img').css('flex-direction', 'column');
        $('.responsive').css('max-width', '100%');
    });
});


