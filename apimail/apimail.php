<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: PUT,GET,POST,DELETE,OPTIONS');
header('Access-Control-Allow-headers: *');
header('Content-Type: application/json; charset=UTF-8');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$nome = $_POST['nome'];
$cognome = $_POST['cognome'];
$telefono = $_POST['telefono'];
$emailx = $_POST['emailx'];
$messaggio = $_POST['messaggio'];

$mail = new PHPMailer(true);
try {
     //Server settings
    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                     
  //   $mail->isSMTP();                                           
      $mail->isSMTP();                                            
      $mail->Host       = 'smtp.googlemail.com';                     
      $mail->SMTPAuth   = true;                                  
      $mail->Username   = 'sebastianodeveloper@gmail.com';                    
      $mail->Password   = 'qaed rqtc hcyw omfr';                               
      $mail->SMTPSecure = 'tls';         
      $mail->Port       = 587;   

     $mail->SMTPOptions = array(
      'ssl' => array(
      'verify_peer' => false,
      'verify_peer_name' => false,
      'allow_self_signed' => true
      )
      );

     //Recipients
     $mail->setFrom('sebastianodeveloper@gmail.com', 'Richiesta dal sito Sebastiano Gonzato Developer');
     $mail->addReplyTo($emailx, $nome . ' ' . $cognome);
     $mail->addAddress('sebastianodeveloper@gmail.com', 'Sebastiano Gonzato');  
     $mail->isHTML(true);                                 
     $mail->Subject = 'Rchiesta dal sito Sebastiano Gonzato Developer';
     $mail->CharSet = "UTF-8";
     $mail->Body    = '
     <div style="margin: 0 auto;"> 
      <div class="es-m-p0l es-m-txt-c" align="center" style="padding:0;Margin:0;padding-left:15px;font-size:0px"><img src="#" alt width="200" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></div>
      <h3 style="text-align: center; margin-bottom: 40px; font-size: 20px; color: ##3c8dbc">Richiesta per Sebastiano Gonzato Developer</h3>

      <span style="text-align: left;">Dati utente per una richiesta</span>
      <br><br>
      <span style="text-align: center; font-size: 16px"><b>Nome: </b> '.$nome.' </span>
      <br>
      <span style="text-align: center; font-size: 16px"><b>Cognome: </b> '.$cognome.' </span>
      <br>
      <span style="text-align: center; font-size: 16px"><b>Telefono: </b> '.$telefono.' </span>
       <br>
      <span style="text-align: center; font-size: 16px"><b>Email: </b> '.$emailx.' </span>
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