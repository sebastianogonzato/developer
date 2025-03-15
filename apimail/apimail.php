<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: PUT,GET,POST,DELETE,OPTIONS');
header('Access-Control-Allow-headers: *');
//header('Content-Type: application/json'); e sotto add-> echo json_encode($data,JSON_INVALID_UTF8_IGNORE);
header('Content-Type: application/json; charset=UTF-8');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// include_once("condb.php");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

//$ask = trim($request->ask);

$nominativo = $_GET['nominativo'];
$telefono = $_GET['telefono'];
$email = $_GET['email'];
$messaggio = $_GET['messaggio'];

$mail = new PHPMailer(true);
try {
     //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
  //   $mail->isSMTP();                                            //Send using SMTP
     $mail->isSMTP();                                            //Send using SMTP
  $mail->Host       = 'smtp.googlemail.com';                     //Set the SMTP server to send through
  $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
  $mail->Username   = 'sebaloba71@gmail.com';                     //SMTP username
  $mail->Password   = 'oqjzsmknbkggycud';                               //SMTP password
  $mail->SMTPSecure = 'tls';         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
  $mail->Port       = 587;   

     $mail->SMTPOptions = array(
      'ssl' => array(
      'verify_peer' => false,
      'verify_peer_name' => false,
      'allow_self_signed' => true
      )
      );

     //Recipients
     $mail->setFrom('sebaloba71@gmail.com', 'Richiesta dal sito GIARDINIDELCIELO');
     $mail->addAddress('info@giardinidelcielo.it');  
     $mail->isHTML(true);                                 
     $mail->Subject = 'Rchiesta dal sito GIARDINIDELCIELO';
     $mail->CharSet = "UTF-8";
     $mail->Body    = '
     <div style="margin: 0 auto;"> 
      <div class="es-m-p0l es-m-txt-c" align="center" style="padding:0;Margin:0;padding-left:15px;font-size:0px"><img src="#" alt width="200" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></div>
      <h3 style="text-align: center; margin-bottom: 40px; font-size: 20px; color: ##3c8dbc">Benvenuto su GIARDINIDELCIELO</h3>

      <span style="text-align: left;">Dati utente per una richiesta</span>
      <br><br>
      <span style="text-align: center; font-size: 16px"><b>Nominativo: </b> '.$nominativo.' </span>
      <br>
      <span style="text-align: center; font-size: 16px"><b>Telefono: </b> '.$telefono.' </span>
       <br>
      <span style="text-align: center; font-size: 16px"><b>Email: </b> '.$email.' </span>
       <br>
      <span style="text-align: center; font-size: 16px"><b>Messaggio: </b> '.$messaggio.' </span>
      </div>
         ';
         $mail->send();
       //echo json_encode('Verifica code inviato correttamente.');
          echo"Messaggio inviato correttamente";
         } catch (Exception $e) {
             echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
         }
           // fine invio email


           ?>