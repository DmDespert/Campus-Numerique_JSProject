<?php

//---FRONT CONTROLER---//

//Variables SANITIZING (URL)
$url = filter_input(INPUT_GET, 'action', FILTER_SANITIZE_STRING);
$id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_STRING);
$urlIsSet = isset($url);

//---ROADS---//

//Dictionnaire des routes - ROADS
$road = [
    'home' => 'homeController.php',
    'gallery' => 'galleryController.php',
    'game' => 'gameController.php',
    'contact' => 'contactController.php',
];

//Personnalisation des titres & descriptions des pages
$pagesMetaTitles = [
    'home' => $metaTitle = "Accueil - robcad.com",
    'gallery' => $metaTitle = "Gallery - robcad.com",
    'game' => $metaTitle = "Game - robcad.com",
    'contact' => $metaTitle = 'Contact - robcad.com',
    '404' => $metaTitle = "404 - robcad.com"
];

$pagesMetaDescriptions = [
    'home' => $metaDescription = "Welcome to robcad nice website",
    'gallery' => $metaDescription = "Check the nice gallery there",
    'game' => $metaDescription = "Contain a super simple game",
    'contact' => $metaDescription = 'Contact page of the website',
    '404' => $metaDescription = "Page d'erreur du site internet"
];

$mainTitle = [
    'home' => $mainTitle = "Welcome to Rob<span class='mcolor'>CAD</span>",
    'gallery' => $mainTitle = "Check the<span class='mcolor'> super gallery</span>",
    'game' => $mainTitle = "Here's the <span class='mcolor'> game</span>",
    'contact' => $mainTitle = "Super <span class='mcolor'> contact paaage</span>",
    '404' => $mainTitle = "404 - robcad.com"
];

$secondTitle = [
    'home' => $secondTitle = "Bored ? Let's play a <a href='/index.php?action=game' class='mcolor'>game",
    'gallery' => $secondTitle = "Yup, that's nice to be here",
    'game' => $secondTitle = "Here's the nice gaaaaame !! Woohoo !",
    'contact' => $secondTitle = "Do not do that, i won't read your shit",
    '404' => $secondTitle = "404 - robcad.com"
];

$scriptsLoader = [
    'home' => $scriptsLoader = '<script src="ressources/js/home.js"></script>',
    'gallery' => $scriptsLoader = '<script src="ressources/js/gallery.js"></script>',
    'game' => $scriptsLoader = '<script src="ressources/js/game.js"></script>',
    'contact' => $scriptsLoader = '<script src="ressources/js/contact.js"></script>',
];

if (filter_has_var(INPUT_GET, 'action')) {
    $action = filter_input(INPUT_GET, 'action', FILTER_SANITIZE_STRING);
    if (!isset($road[$action])) {
        error404();
    }
    $files = $road[$action];
} else {
    header("Location: index.php?action=home", TRUE, 301);
}

require('ressources/views/layouts/header.tpl');
require 'app/controllers/' . $files;
require('ressources/views/layouts/footer.tpl');