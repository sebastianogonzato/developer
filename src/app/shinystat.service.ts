import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShinystatService {
  constructor() { }

  loadScript() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://codice.shinystat.com/cgi-bin/getcod.cgi?USER=russo';
    document.body.appendChild(script);
  }





}