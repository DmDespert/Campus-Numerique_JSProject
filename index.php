<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--FAVICO-->
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
    <link rel="icon" href="img/favicon.ico" type="image/x-icon">
    <!--TITLE & DESCRPTION-->
    <title><?php echo $pagesMetaTitles[$url] ?></title>
    <meta name="description" content="<?php echo $pagesMetaDescriptions[$url] ?>"/>
    <!--CSS-->
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <!--FONTS-->
    <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Cutive+Mono&family=Special+Elite&display=swap" rel="stylesheet">
    <!--CSS ANIMATIONS-->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <!--API's-->

</head>
<body>
    <header id="top" class="bscolor">
        <nav>
            <div class="logo bungee">ROB<span class="mcolor">CAD</span>.com</div>
            <ul>
                <li><a href="#top">Home</a></li>
                <li><a href=gallery.php">Gallery</a></li>
                <li><a href="game.php">Game</a></li>
                <li><a href="contact.php">Contact</a></li>
            </ul>
        </nav>
        <div class="container">
            <div class="row">
                <h1 class="bungee">Welcome to Rob<span class="mcolor">CAD</span></h1>
            </div>
            <div class="row">
                <h2 class="second-title special">Bored ? Let's play a <a href="game.php" class="mcolor">game</a></h2>
            </div>
        </div>

    </header>
    <main>
        <section>
            <div class="container">
                <div id="shits" class="row">
                    <h3 class="bungee">Last shits from Trump</h3>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <div class="container">
            <div class="row">
                <div class="block">
                    <h3 class="bungee text-center">Social networks</h3>
                    <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non hendrerit sapien. Maecenas lobortis elit ex, in rutrum nulla placerat in. Proin ac vulputate dolor.</p>
                </div>
                <div class="block">
                    <h3 class="bungee text-center">More informations</h3>
                    <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non hendrerit sapien. Maecenas lobortis elit ex, in rutrum nulla placerat in. Proin ac vulputate dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
                </div>
            </div>
        </div>
    </footer>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="assets/js/script.js"></script>
</body>
</html>