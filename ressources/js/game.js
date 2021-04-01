$(document).ready(function(){
    //---== Little Game ==---
    $('.button-game').on('click', function() {
        let playerInput = $(this).attr("value");
        const win = "Well done, trump is angry";
        const draw = "Draw !"
        const lost = "Trump fucked your as****"

        const error = "Erreur, veuillez recommencer en tapant votre choix correctement";
        const playerChoice = getPlayerChoice(playerInput);
        const computerChoice = getComputerChoice();

        // Fonction qui vérifie l'input de l'utilisateur
        function getPlayerChoice(playerInput) {
            if(playerInput == "rock" || playerInput == "paper" || playerInput == "scissors") {
                $('.player').text("You choose " + playerInput);
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
                let rock =  "rock";
                $('.computer').text("Trump did " + rock);
                return rock;
            }
            else if(computerRand == 1) {
                let paper = "paper";
                $('.computer').text("Trump did " + paper);
                return paper;
            }
            else {
                let scissors = "scissors";
                $('.computer').text("Trump did " + scissors);
                return scissors;
            }
        }

        // Fonction qui vérifie qui remporte la victoire
        function findWinner(playerChoice, computerChoice) {
            if(playerChoice == computerChoice) {
                $('.result').text(draw);
                $('.img-result').css("background-image", "url('ressources/img/draw.jpeg')");
            }
            else {
                if(playerChoice == "rock") {
                    if(computerChoice == "paper") {
                        $('.result').text(lost);
                        $('.img-result').css("background-image", "url('ressources/img/win.jpeg')");
                    }
                    else {
                        $('.result').text(win);
                        $('.img-result').css("background-image", "url('ressources/img/lose.jpeg')");
                    }
                }
                if(playerChoice == "paper") {
                    if(computerChoice == "scissors") {
                        $('.result').text(lost);
                        $('.img-result').css("background-image", "url('ressources/img/win.jpeg')");
                    }
                    else {
                        $('.result').text(win);
                        $('.img-result').css("background-image", "url('ressources/img/lose.jpeg')");
                    }
                }
                if(playerChoice == "scissors") {
                    if(computerChoice == "rock") {
                        $('.result').text(lost);
                        $('.img-result').css("background-image", "url('ressources/img/win.jpeg')");
                    }
                    else {
                        $('.result').text(win);
                        $('.img-result').css("background-image", "url('ressources/img/lose.jpeg')");
                    }
                }
            }
        }

        // Affichage des résultats
        console.log("Le joueur fait " + playerChoice);
        console.log("L'ordinateur fait " + computerChoice);
        console.log(findWinner(playerChoice, computerChoice));
    })
});

