import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { App } from '@capacitor/app';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private browser: InAppBrowser) {}
  // ionic cap sync , copy, build
  ngOnInit(): void {
    /* 
      En la siguiente declaracion se envian tres parametros:
        1. La ruta de la app a desplegar
        2. funcion _self
        3. Configuraciones, para que no se muestre barra de url en la app.    
    */
    const browserInstance = this.browser.create(
      'https://sistemaaccyl.atlassian.net/jira/software/projects/OT/boards/2', 
      '_self', 
      'location=no, hidenavigationbuttons=true,hideurlbar=true,zoom=no'
      );

      // La siguiente instruccion se encarga de cerrar el app al presionar boton atras
      browserInstance.on("exit").subscribe(evt => {
        App.exitApp();
      })
  }
}
