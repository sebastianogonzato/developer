  
  <!DOCTYPE html>
<html lang="en">

<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <script src="https://code.jquery.com/jquery-latest.js"></script> 
  
   <script type="text/javascript">  
$(document).ready(function() {

    $("form#contattami").submit(function(e) {
        e.preventDefault();
        var form = $(this);
        var btn = $("#btnInvia");
        // Disabilita il pulsante
        btn.prop("disabled", true);
        // Mostra overlay
        $("#loadingOverlay").css("display", "flex");
        $.ajax({
            type: "POST",
            url: "apimail/apimail.php",
            data: form.serialize(),
            dataType: "html",
            success: function(risposta) {
                // Nasconde overlay
                $("#loadingOverlay").hide();
                // Riabilita pulsante
                btn.prop("disabled", false);
                // Reset form
                form[0].reset();
                // SweetAlert
               Swal.fire({
                  icon: "success",
                  title: "Messaggio inviato!",
                  html: "Il tuo messaggio è stato inviato correttamente.<br><br>Grazie di avermi contattato, risponderò il prima possibile.",
                  confirmButtonText: "OK"
              });
            },
            error: function() {
                // Nasconde overlay
                $("#loadingOverlay").hide();
                // Riabilita pulsante
                btn.prop("disabled", false);
                // SweetAlert errore
                Swal.fire({
                    icon: "error",
                    title: "Errore!",
                    text: "Impossibile inviare il messaggio. Riprova più tardi.",
                    confirmButtonText: "OK"
                });
            }
        });
    });
});
    </script>   

    <style>
#loadingOverlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.55);
    z-index: 99999;
    /* Centro perfetto */
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.spinner {
    width: 55px;
    height: 55px;
    border: 5px solid rgba(255, 255, 255, 0.3);
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}

.loadingText {
    color: #ffffff;
    font-size: 18px;
    margin-top: 15px;
    font-weight: 500;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
  
  
  
  <!--================== Contact Section Start ==================-->
  <section class="contact section">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-6">
          <div class="mb-5 mb-lg-0">
            <h3 class="mb-4">Salve!......</h3>
            <h4 class="mb-5 pb-4 lh-sm">Potete contattarmi tramite il seguente modulo </h4>
            <form id="contattami" class="row px-4 px-md-0">
                <div class="col-md-6 contact-from border-bottom pb-4 mb-5">
                  <input type="text" name="nome" id="nome" autocomplete="off" required>
                  <label>Nome*</label>
                </div>
                <div class="col-md-6 contact-from border-bottom pb-4 mb-5">
                  <input type="text" name="cognome" id="cognome" autocomplete="off" required>
                  <label>Cognome*</label>
                </div>
                <div class="col-md-6 contact-from border-bottom pb-4 mb-5">
                  <input type="email" name="emailx" id="emailx" autocomplete="off" required>
                  <label>E-Mail*</label>
                </div>
                <div class="col-md-6 contact-from border-bottom pb-4 mb-5">
                  <input type="number" name="telefono" id="telefono" autocomplete="off">
                  <label>Telefono</label>
                </div>
                <div class="contact-from border-bottom pb-4 mb-5 w-100">
                  <input type="text" name="messaggio" id="messaggio" autocomplete="off" required>
                  <label>Messaggio*</label>
                </div>
                <!-- <div id="risposta"></div>   -->
                <button type="submit" id="btnInvia" class="btn btn-primary btn-lg mt-4">
                    Invia
                </button>
            </form>
          </div>
        </div>
        <div class="col-lg-5 offset-lg-1">
          <div class="text-center text-lg-start">
            <h4 class="mb-4">Modulo di contatto</h4>
            <p class="mb-md-5">Per qualunque informazione potete<br>
              contattarmi Tramite questo modulo.<br>
              </p>
              <h4 class="mb-4">Contatto linkedin</h4>
             <ul class="list-inline contact-us">
               <!-- <li class="list-inline-item"><a href="#"> <i class="fab fa-facebook"></i></a></li>
               <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li> -->
               <li class="list-inline-item"><a href="https://www.linkedin.com/in/sebastiano-gonzato-a0405585" target="_blank">
                <i class="fab fa-linkedin-in"></i>
                </a>
               </li>
               <!-- <li class="list-inline-item"><a href="#"><i class="fab fa-skype"></i></a></li>
               <li class="list-inline-item"><a href="#"><i class="fab fa-github"></i></a></li> -->
             </ul>
          </div>

        </div>
      </div>
    </div>
  </section>
  <!--================== Contact Section End ==================-->

  <div class="backtotop">
  <i class="fas fa-angle-up"></i>
</div>

<div id="loadingOverlay">
    <div class="spinner"></div>
    <div class="loadingText">Invio in corso...</div>
</div>


</html>
