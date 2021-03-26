<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--FAVICO-->
    <link rel="shortcut icon" href="ressources/img/favicon.ico" type="image/x-icon">
    <link rel="icon" href="ressources/img/favicon.ico" type="image/x-icon">
    <!--TITLE & DESCRPTION-->
    <title><?php echo $pagesMetaTitles[$url] ?></title>
    <meta name="description" content="<?php echo $pagesMetaDescriptions[$url] ?>"/>
    <!--CSS-->
    <link rel="stylesheet" href="ressources/css/style.css">
    <link rel="stylesheet" href="ressources/css/font-awesome.min.css">
    <!--FONTS-->
    <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Cutive+Mono&family=Special+Elite&display=swap" rel="stylesheet">
    <!--CSS ANIMATIONS-->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <!--API's-->

</head>
<body>
    <header id="top" class="bscolor">
        <nav>
            <a href="#top" class="logo bungee">ROB<span class="mcolor">CAD</span>.com</a>
            <div class="dropdown-menu">

            </div>
            <ul>
                <li><a href="/index.php?action=home">Home</a></li>
                <li><a href="/index.php?action=gallery">Gallery</a></li>
                <li><a href="/index.php?action=game">Game</a></li>
                <li><a href="/index.php?action=contact">Contact</a></li>
            </ul>
        </nav>
        <div class="container">
            <div class="row">
                <div class="block text-center">
                    <img src="ressources/img/main_logo.svg" alt="main_logo">
                    <h1 class="bungee text-center"><?php echo $mainTitle[$url] ?></h1>
                    <h2 class="second-title special text-center"><?php echo $secondTitle[$url] ?></a></h2>
                </div>
            </div>
        </div>

    </header>