import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ListaAnuncioPage } from '../pages/listaanuncio/listaanuncio';
import { FichaAnuncioPageovieInfoPage } from '../pages/fichaanuncio/fichaanuncio';
import { AnuncioService } from '../providers/anuncio-service';
 
@NgModule({
  declarations: [
    MyApp,
    ListaAnuncioPage,
    FichaAnuncioPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListaAnuncioPage,
    FichaAnuncioPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}