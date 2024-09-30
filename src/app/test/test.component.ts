import { Component } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl } from '@angular/forms';
//import Swal from 'sweetalert2';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  angFormEmail: FormGroup;

  // name!: string;
  // email!: string;
  // message!: string;

  endpoint: any;

  constructor(
    private fb: FormBuilder,
    private http:HttpClient
  ) {
    this.endpoint = `${environment.apiUrl}`;

    this.angFormEmail = this.fb.group({
      nome: new FormControl('', [Validators.required]),
    // cognome: new FormControl('', [Validators.required]),
    // telefono: new FormControl('', [Validators.required]),
    //   emailrec: ['',
    //   Validators.compose([
    //     Validators.required,
    //     Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]
    //   )]
      });
  }



  invioEmail(angFormEmail: any) {
 
          //  const params = {
          //  ask: 'inviaEmailResetPsw',
          //  nome: angFormEmail.value.emailrec,
          // //  cognome: 'this.passwordCode'
          // //  messaggio: 'xx'
          // }
           this.http.get(this.endpoint+'?nome='+angFormEmail.value.nome).subscribe(res => {
             console.log(res);
             if(res){
              alert('ok');
              // Swal.fire({
              //   title: 'Profilo aggiornato',
              //   text: 'Il tuo profilo è stato aggiornato.',
              //   icon: 'success',
              //   showCancelButton: false,
              //   confirmButtonText: 'OK',
              //   //cancelButtonText: 'No, non eliminare'
              // })
            } else {
            // this.NotifyResetPasswordNoValid();
            }
           });
           
   }
}