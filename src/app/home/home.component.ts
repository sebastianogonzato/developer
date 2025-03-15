import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef, AfterViewInit, VERSION, ViewEncapsulation  } from '@angular/core';
import { MatPaginator, MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
//nuova galleria
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import { BeforeSlideDetail, InitDetail } from 'lightgallery/lg-events';
import { LightGallery } from 'lightgallery/lightgallery';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { ShinystatService } from '../shinystat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements AfterViewInit {
  name = "Angular " + VERSION.major;
  risultatoCat: any;
  angFormEmail: FormGroup;
  endpoint: any;

   private lightGallery!: LightGallery;
   private needRefresh = false;


   ngOnInit(): void {
    this.shinystatService.loadScript();
  }
 
  
  ngAfterViewChecked(): void { // freccette di scorrimento
      if (this.needRefresh) {
          this.lightGallery.refresh();
          this.needRefresh = false;
      }
  }
  
  settings = {
    counter: true,
   // plugins: [lgZoom]
    plugins: [lgVideo]
  };



  onBeforeSlide = (detail: BeforeSlideDetail): void => {  // metti se statico senza scorrimento
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };


 @ViewChild(MatPaginator) paginator!: MatPaginator;

  listaRes = [
    
    // {  id: 1,  size: '1400-933', categoria: 'giardinaggio', 
    //   src:
    //   './assets/fotogiardinaggio/imggiard0004.jpg',
    // thumb:
    //   './assets/fotogiardinaggio/imggiard0004.jpg', 
    // },
    // {  id: 2,  size: '1400-933',  categoria: 'giardinaggio', 
    //   src:
    //   './assets/fotogiardinaggio/imggiard0005.jpg',  
    // thumb:
    //   './assets/fotogiardinaggio/imggiard0005.jpg'
    // },

     { id: 1, categoria: 'giardinaggio', Image: './assets/fotogiardinaggio/imggiard0004.jpg'}, // metti queste se statico con before
     { id: 2, categoria: 'giardinaggio', Image: './assets/fotogiardinaggio/imggiard0005.jpg'},
    { id: 3, categoria: 'giardinaggio', Image: './assets/fotogiardinaggio/imggiard0009.jpg'},
    { id: 4, categoria: 'giardinaggio', Image: './assets/fotogiardinaggio/imggiard0011.jpg'},
    { id: 5, categoria: 'giardinaggio', Image: './assets/fotogiardinaggio/imggiard0012.jpg'},
    { id: 6, categoria: 'giardinaggio', Image: './assets/fotogiardinaggio/imggiard0013.jpg'},
    { id: 7, categoria: 'giardinaggio', Image: './assets/fotogiardinaggio/imggiard0014.jpg'},
    { id: 8, categoria: 'giardinaggio', Image: './assets/fotogiardinaggio/imggiard0016.jpg'},
    { id: 9, categoria: 'giardinaggio', Image: './assets/fotogiardinaggio/imggiard0020.jpg'},
    { id: 10, categoria: 'giardinaggio', Image: './assets/fotogiardinaggio/imggiard0025.jpg'},
    { id: 11, categoria: 'giardinaggio', Image: './assets/fotogiardinaggio/imggiard0026.jpg'},
    { id: 12, categoria: 'giardinaggio', Image: './assets/fotogiardinaggio/imggiard0029.jpg'},
    { id: 13, categoria: 'giardinaggio', Image: './assets/fotogiardinaggio/imggiard0040.jpg'},
    { id: 14, categoria: 'giardinaggio', Image: './assets/fotogiardinaggio/imggiard0041.jpg'},
    { id: 15, categoria: 'giardinaggio', Image: './assets/fotogiardinaggio/imggiard0042.jpg'},
    { id: 16, categoria: 'giardinaggio', Image: './assets/fotogiardinaggio/imggiard0043.jpg'},
    { id: 18, categoria: 'potatura', Image: './assets/fotopotatura/imgcan000.jpg'},
    { id: 19, categoria: 'potatura', Image: './assets/fotopotatura/imgcan001.jpg'},
    { id: 20, categoria: 'potatura', Image: './assets/fotopotatura/imgcan002.jpg'},
    { id: 21, categoria: 'potatura', Image: './assets/fotopotatura/imgcan004.jpg'},
    { id: 22, categoria: 'potatura', Image: './assets/fotopotatura/imgcan005.jpg'},
    { id: 23, categoria: 'potatura', Image: './assets/fotopotatura/imgcan007.jpg'},
    { id: 24, categoria: 'potatura', Image: './assets/fotopotatura/imgcan008.jpg'},
    { id: 25, categoria: 'potatura', Image: './assets/fotopotatura/imgcan009.jpg'},
    { id: 26, categoria: 'potatura', Image: './assets/fotopotatura/imgcan011.jpg'},
    { id: 27, categoria: 'potatura', Image: './assets/fotopotatura/imgcan012.jpg'},
    { id: 28, categoria: 'potatura', Image: './assets/fotopotatura/imgcan013.jpg'},
    { id: 29, categoria: 'potatura', Image: './assets/fotopotatura/imgcan016.jpg'},
    { id: 30, categoria: 'potatura', Image: './assets/fotopotatura/imgcan018.jpg'},
    { id: 31, categoria: 'potatura', Image: './assets/fotopotatura/imgendot000.jpg'},
    { id: 32, categoria: 'potatura', Image: './assets/fotopotatura/imgendot001.jpg'},
    { id: 33, categoria: 'potatura', Image: './assets/fotopotatura/imgendot007.jpg'},
    { id: 34, categoria: 'potatura', Image: './assets/fotopotatura/imgendot008.jpg'},
    { id: 35, categoria: 'potatura', Image: './assets/fotopotatura/imgendot009.jpg'},
    { id: 36, categoria: 'potatura', Image: './assets/fotopotatura/imgott000.jpg'},
    { id: 37, categoria: 'potatura', Image: './assets/fotopotatura/imgott001.jpg'},
    { id: 38, categoria: 'potatura', Image: './assets/fotopotatura/imgott001bis.jpg'},
    { id: 39, categoria: 'potatura', Image: './assets/fotopotatura/imgott002.jpg'},
    { id: 40, categoria: 'potatura', Image: './assets/fotopotatura/imgott003.jpg'},
    { id: 41, categoria: 'potatura', Image: './assets/fotopotatura/imgott004.jpg'},
    { id: 42, categoria: 'potatura', Image: './assets/fotopotatura/imgott005.jpg'},
    { id: 43, categoria: 'potatura', Image: './assets/fotopotatura/imgott006.jpg'},
    { id: 44, categoria: 'potatura', Image: './assets/fotopotatura/imgott009.jpg'},
    { id: 45, categoria: 'potatura', Image: './assets/fotopotatura/imgott010.jpg'},
    { id: 46, categoria: 'potatura', Image: './assets/fotopotatura/imgott011.jpg'},
    { id: 47, categoria: 'potatura', Image: './assets/fotopotatura/imgott012.jpg'},
    { id: 48, categoria: 'potatura', Image: './assets/fotopotatura/imgott013.jpg'},
    { id: 49, categoria: 'potatura', Image: './assets/fotopotatura/imgott014.jpg'},
    { id: 50, categoria: 'potatura', Image: './assets/fotopotatura/imgott014bis.jpg'},
    { id: 51, categoria: 'potatura', Image: './assets/fotopotatura/imgott015.jpg'},
    { id: 52, categoria: 'potatura', Image: './assets/fotopotatura/imgott016.jpg'},
    { id: 53, categoria: 'potatura', Image: './assets/fotopotatura/imgott018.jpg'},
    { id: 54, categoria: 'potatura', Image: './assets/fotopotatura/imgott019.jpg'},
    { id: 55, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl002.jpg'},
    { id: 56, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl003.jpg'},
    { id: 57, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl004.jpg'},
    { id: 58, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl005.jpg'},
    { id: 59, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl006.jpg'},
    { id: 60, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl009.jpg'},
    { id: 61, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl012.jpg'},
    { id: 62, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl013.jpg'},
    { id: 63, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl014.jpg'},
    { id: 64, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl015.jpg'},
    { id: 65, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl016.jpg'},
    { id: 66, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl017.jpg'},
    { id: 67, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl018.jpg'},
    { id: 68, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl018bis.jpg'},
    { id: 69, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl019.jpg'},
    { id: 70, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl019bis.jpg'},
    { id: 71, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl028.jpg'},
    { id: 72, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl029.jpg'},
    { id: 73, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl030.jpg'},
    { id: 74, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl031.jpg'},
    { id: 75, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl032.jpg'},
    { id: 76, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl035.jpg'},
    { id: 77, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl037.jpg'},
    { id: 78, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl039.jpg'},
    { id: 79, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl040.jpg'},
    { id: 80, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl044.jpg'},
    { id: 81, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl046.jpg'},
    { id: 82, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl048.jpg'},
    { id: 83, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl050.jpg'},
    { id: 84, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl052.jpg'},
    { id: 85, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl053.jpg'},
    { id: 86, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl054.jpg'},
    { id: 87, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl055.jpg'},
    { id: 88, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl056.jpg'},
    { id: 89, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl057.jpg'},
    { id: 90, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl058.jpg'},
    { id: 91, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl059.jpg'},
    { id: 92, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl060.jpg'},
    { id: 93, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl061.jpg'},
    { id: 94, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl062.jpg'},
    { id: 95, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl063.jpg'},
    { id: 96, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl064.jpg'},
    { id: 97, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl065.jpg'},
    { id: 98, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl066.jpg'},
    { id: 99, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl067.jpg'},
    { id: 100, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl068.jpg'},
    { id: 101, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl069.jpg'},
    { id: 102, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl070.jpg'},
    { id: 103, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl071.jpg'},
    { id: 104, categoria: 'potatura', Image: './assets/fotopotatura/imgpbl072.jpg'},
    { id: 105, categoria: 'endoterapia', Image: './assets/fotoendoterapia/imgendot002.jpg'},
    { id: 106, categoria: 'endoterapia', Image: './assets/fotoendoterapia/imgendot003.jpg'},
    { id: 107, categoria: 'endoterapia', Image: './assets/fotoendoterapia/imgendot004.jpg'},
    { id: 108, categoria: 'endoterapia', Image: './assets/fotoendoterapia/imgendot005.jpg'},
    { id: 109, categoria: 'endoterapia', Image: './assets/fotoendoterapia/imgendot006.jpg'},
    { id: 110, categoria: 'endoterapia', Image: './assets/fotoendoterapia/imgendot006bis.jpg'},
  ]

  attestatis = [
    { id: 1, Image: './assets/attestati/attestato1.jpg'},
    { id: 2, Image: './assets/attestati/attestato2.jpg'},
    { id: 3, Image: './assets/attestati/attestato3.jpg'},
    { id: 4, Image: './assets/attestati/attestato4.jpg'},
    { id: 5, Image: './assets/attestati/attestato5.jpg'},
    { id: 6, Image: './assets/attestati/attestato6.jpg'},
  ]

  obs: Observable<any> | undefined;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>(this.listaRes);

  immaginiFiltrate: any[];

  constructor(
    private changeDetectorRef: ChangeDetectorRef, 
    private fb: FormBuilder,
    private http:HttpClient,
    private shinystatService: ShinystatService
  ) {
  
    this.endpoint = `${environment.apiUrl}`;

    this.angFormEmail = this.fb.group({
      nominativo: new FormControl('', [Validators.required]),
      telefono: new FormControl(''),
      email: ['',
      Validators.compose([
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]
      )],
      messaggio: new FormControl('', [Validators.required]),
      });
  
  
    this.immaginiFiltrate = this.listaRes;
  }
   
  ngAfterViewInit() {
     this.getCardFoto(0);
     this.changeDetectorRef.detectChanges();
     this.dataSource.paginator = this.paginator;

     this.lightGallery.refresh();
          this.needRefresh = false;
  }
 

  getCardFoto(valCategoria: any) {
   
  //  alert(valCategoria);
    //  if(valCategoria == 0){this.risultatoCat = this.listaRes.sort((a, b) => a.id - b.id);}
    //  if(valCategoria == 1){this.risultatoCat = this.listaRes.filter(item => item.categoria === 'giardinaggio').sort((a, b) => a.id - b.id);}
    //  if(valCategoria == 2){this.risultatoCat = this.listaRes.filter(item => item.categoria === 'potatura').sort((a, b) => a.id - b.id);}

      if(valCategoria == 0){this.immaginiFiltrate = this.listaRes.sort((a, b) => a.id - b.id);}
      if(valCategoria == 1){this.immaginiFiltrate = this.listaRes.filter(immagine => immagine.categoria === 'giardinaggio').sort((a, b) => a.id - b.id);}
      if(valCategoria == 2){this.immaginiFiltrate = this.listaRes.filter(immagine => immagine.categoria === 'potatura').sort((a, b) => a.id - b.id);}
      if(valCategoria == 3){this.immaginiFiltrate = this.listaRes.filter(immagine => immagine.categoria === 'endoterapia').sort((a, b) => a.id - b.id);}
   
      
    //  this.immaginiFiltrate = this.listaRes.filter(immagine => immagine.categoria === 'potatura').sort((a, b) => a.id - b.id);


    //  if(valCategoria == 0){
    //   setTimeout(() => {
    //     this.listaRes = this.listaRes.sort((a, b) => a.id - b.id);
    //   }, 2000);
     
    // }
    //  if(valCategoria == 1){this.listaRes = this.listaRes.filter(item => item.categoria === 'giardinaggio').sort((a, b) => a.id - b.id);}
    //  if(valCategoria == 2){this.listaRes = this.listaRes.filter(item => item.categoria === 'potatura').sort((a, b) => a.id - b.id);}
   
    
   
   // this.listaRes.filter(item => item.categoria === 'potatura').sort((a, b) => a.id - b.id);
  
      // this.dataSource = new MatTableDataSource<any>(this.risultatoCat);
      // this.dataSource.paginator = this.paginator;
      //  this.obs = this.dataSource.connect();
    }

    // getCardAttestati() {
    //   this.attestatis = this.attestatis.sort((a, b) => a.id - b.id);
    // }

    onInit = (detail: InitDetail): void => {
      this.lightGallery = detail.instance;
     // this.getCardFoto(0); 
};


invioEmail(angFormEmail: any) {
   this.http.get(this.endpoint+'?nominativo='+angFormEmail.value.nominativo
    +'&telefono='+angFormEmail.value.telefono
    +'&email='+angFormEmail.value.email
    +'&messaggio='+angFormEmail.value.messaggio).subscribe();
}

    
}
