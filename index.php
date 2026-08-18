<?php
	ob_start("ob_gzhandler");
	$page = isset($_GET['id']) ? addslashes($_GET['id']) : 'home';
	if(!preg_match('/^[\\w\-+]{1,}$/', $page)) $page="home";
?>



<!DOCTYPE html>


<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Portfolio</title>

  <!-- mobile responsive meta -->
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5">

  <!-- ** Plugins Needed for the Project ** -->
  <!-- Slick -->
  <link rel="stylesheet" href="plugins/slick/slick.css">

  <!-- Fontawesome -->
  <link rel="stylesheet" href="plugins/font-awesome/fontawesome.min.css">
  <link rel="stylesheet" href="plugins/font-awesome/brands.css">
  <link rel="stylesheet" href="plugins/font-awesome/solid.css">

  <!-- aos -->
  <link rel="stylesheet" href="plugins/aos/aos.css">

  <!-- Main Stylesheet -->
  <link href="css/style.css" rel="stylesheet">

  <!--Favicon-->
  <!-- <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
  <link rel="icon" href="images/favicon.ico" type="image/x-icon"> -->

  <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">


</head>

<body>

  <div class="preloader">
    <div class="dots dot1">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  </div>
<!--================== Header Section Start ==================-->
<header class="navigation border-bottom">
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="index.php">
        <i class="far fa-envelope"></i>Sebastiano Gonzato - developer
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.php">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link @@chisono" href="?id=chisono">Chi sono</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link @@portfolio" href="portfolio.html">Portfolio</a>
          </li> -->
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle @@portfolio @@portfolio-single" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Portfolio
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item @@portfolio" href="portfolio.html">Portfolio</a></li>
              <li><a class="dropdown-item @@portfolio-single" href="portfolio-single.html">Portfolio single</a></li>
            </ul>
          </li> -->
           <li class="nav-item">
            <a class="nav-link @@portfolio" href="?id=portfolio">Portfolio</a>
          </li>
         
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle @@blog @@blog-single" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Blog
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item @@blog" href="blog.html">blog </a></li>
              <li><a class="dropdown-item @@blog-single" href="blog-single.html">blog single</a></li>
            </ul>
          </li> -->
          <li class="nav-item">
            <a class="nav-link @@contact" href="?id=contatti">Contatti</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
<!--================== Header Section End ==================-->





<!-- Contenuto centrale che cambia pagina -->
 <?php
							$modulo = dirname(__FILE__)."/pages/".$page.".php";
							//echo "PATH: ".$modulo;
							if (file_exists($modulo)) {
								@include($modulo);	
							
							}
							else
							{
								@include(dirname(__FILE__)."/pages/404.php");
							}
							echo "\n";
?>









<!--================== Footer Section Start ==================-->
<footer>
  <div class="footer-top section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto text-center">
          <h2 class="text-primary h4 fw-bold mb-md-5 mb-3">Vuoi contattarmi ?</h2>
          <p class="mb-2"><a href="?id=contatti" style="text-decoration: none; color: inherit;">Clicca qui per contattarmi</a></p>
          <!-- <a href="#" class="mb-3 h6 text-tertiary d-block">hellorick@gmail.com</a>
          <a class="mb-lg-4 mb-3 d-inline-block text-dark" href="#">+880 (308) 555-0121</a> -->
          <!-- <ul class="list-inline">
            <li class="list-inline-item"><a href="#">Whtatsapp</a></li>
            <li class="list-inline-item"><a href="#">Facebook</a></li>
            <li class="list-inline-item"><a href="#">Instagram</a></li>
          </ul> -->
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom text-center py-md-5 py-4 mb-0 border-top">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <p class="mb-0">Developed by <a rel="nofollow" href="https://gonzatosebastiano.it/ " target="blank">Sebastiano Gonzato
          </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>
<!--================== Footer Section End ==================-->
<!-- jQuery -->
<script src="plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap JS -->
<script src="plugins/bootstrap/bootstrap.bundle.min.js"></script>
<!-- slick-slider-->
<script src="plugins/slick/slick.min.js"></script>
<!-- aos -->
<script src="plugins/aos/aos.js"></script>
<!-- isotope -->
<script src="plugins/shuffle/shuffle.js"></script>
<!-- Main Script -->
<script src="js/script.js"></script>

</body>

</html>