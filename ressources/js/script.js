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
        /*On peut par exemple convertir cette réponse en chaine JSON et insérer
         * cette chaine dans un div id="res"*/
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
        //On peut afficher les informations relatives à la requête et à l'erreur
        .fail(function(error){
            alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
        })

        //Ce code sera exécuté que la requête soit un succès ou un échec
        .always(function(){
            console.log("Requête effectuée");
        });

        //---== Little Game ==---

    // you can write js here
    console.log('exo-3');

    const playerInput = prompt("Your choice ( rock, paper, scissors) ?").toLowerCase();
    const error = "Erreur, veuillez recommencer en tapant votre choix correctement";
    const playerChoice = getPlayerChoice(playerInput);
    const computerChoice = getComputerChoice();

// Fonction qui vérifie l'input de l'utilisateur
    function getPlayerChoice(playerInput) {
        if(playerInput == "rock" || playerInput == "paper" || playerInput == "scissors") {
            return playerInput;
        } else {
            return error;
        }
    }

// Fonction qui retourne un entier entre 0 et 2 en random pour l'ordinateur
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

// Fonction qui récupère le random et lui attribut une chaine de caractère
    function getComputerChoice() {
        let computerRand = getRndInteger(0,2);
        if(computerRand == 0) {
            return "rock";
        }
        else if(computerRand == 1) {
            return "paper";
        }
        else {
            return "scissors";
        }
    }

    // Fonction qui vérifie qui remporte la victoire
    function findWinner(playerChoice, computerChoice) {
        if(playerChoice == computerChoice) {
            return "Tied";
        }
        else {
            if(playerChoice == "rock") {
                if(computerChoice == "paper") {
                    return "Lost";
                }
                else {
                    return "Win";
                }
            }
            if(playerChoice == "paper") {
                if(computerChoice == "scissors") {
                    return "Lost";
                }
                else {
                    return "Win";
                }
            }
            if(playerChoice == "scissors") {
                if(computerChoice == "rock") {
                    return "Lost";
                }
                else {
                    return "Win";
                }
            }
        }
    }

    // Affichage des résultats
        console.log("Le joueur fait " + playerChoice);
        console.log("L'ordinateur fait " + computerChoice);
        console.log(findWinner(playerChoice, computerChoice));
});


