$(document).ready(function(){

    //---== API LOADER ==---
    $.ajax({
        //L'URL de la requête
        url: "https://api.tronalddump.io/tag",

        //La méthode d'envoi (type de requête)
        method: "GET",

        //Le format de réponse attendu
        dataType : "json",
    })
        //Ce code sera exécuté en cas de succès - La réponse du serveur est passée à done()
        .done(function(response){
            let tags = response._embedded.tag;

            tags.forEach(function(element) {
                $('#shits').after(
                    '<div class="row text-center">\
                    <a href="" class="special">' + element.value + '</a>\
                    </div>'
                );
            })

            console.log(tags)
        })

        //Ce code sera exécuté en cas d'échec - L'erreur est passée à fail()
        .fail(function(error){
            alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
        })

        //Ce code sera exécuté que la requête soit un succès ou un échec
        .always(function(){
            console.log("Requête effectuée");
        });
});


