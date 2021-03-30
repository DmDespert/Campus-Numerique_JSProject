$(document).ready(function () {

    //---== API LOADER ==---
    $.ajax({
        //L'URL de la requête
        url: `https://api.tronalddump.io/tag/`,

        //La méthode d'envoi (type de requête)
        method: "GET",

        //Le format de réponse attendu
        dataType: "json",
    })
        //Ce code sera exécuté en cas de succès - La réponse du serveur est passée à done()
        .done(function (response) {
            let tags = response._embedded.tag;

            tags.forEach(function (element) {
                $('#start-section .container .row').after(
                    '<span class="special eventClass" tag="' + element.value + '">' + element.value + '</span>'
                );
            })

            $('.eventClass').on('click', function (e) {
                let isUrl = e.target.attributes.tag.value;
                $.ajax({
                    //L'URL de la requête
                    url: `https://api.tronalddump.io/search/quote/`,

                    //La méthode d'envoi (type de requête)
                    method: "GET",

                    //Le format de réponse attendu
                    dataType: "json",

                    data: {
                        tag: isUrl,
                    }
                })
                    //Ce code sera exécuté en cas de succès - La réponse du serveur est passée à done()
                    .done(function (response) {
                        console.log(response);
                        let quotes = response._embedded.quotes;

                        quotes.forEach(function (element) {
                            $('#shits').after(
                                '<div class="row text-center">\
                                <p>'+element.value+'</p>\
                                </div>'
                            );
                        })
                    })
                    //Ce code sera exécuté en cas d'échec - L'erreur est passée à fail()
                    .fail(function (error) {
                        alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
                    })

            })
        })

        //Ce code sera exécuté en cas d'échec - L'erreur est passée à fail()
        .fail(function (error) {
            alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
        })

        //Ce code sera exécuté que la requête soit un succès ou un échec
        .always(function () {
            console.log("Requête effectuée");
        });

});


