let nb = 1;

function gallery() {
    for (let i=0; i<10; i++) {
        $('.block-img').append(
            '<div class="img-responsive img-basic"></div>'
        );
    }
}

function addImage() {
    let inputUrl = document.getElementById("getUrl").value;
    $('.block-img').append(
        '<div class="img-responsive img'+nb+'" style="background-image: url('+inputUrl+');">\
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
        $('.img-responsive').css('max-width', '30%');
    });
    $('.column-display').on('click', function () {
        $('.block-img').css('flex-direction', 'column');
        $('.img-responsive').css('max-width', '100%');
    });
});


