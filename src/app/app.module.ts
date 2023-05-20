import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { BalotaComponent } from './mbalota/balota/balota.component';
//import { PlayerComponent } from './mplayer/player/player.component';
import { NavComponent } from './nav/nav.component';
//import { JuegoComponent } from './mjuego/juego/juego.component';
////import { GanadoresComponent } from './mganador/ganadores/ganadores.component';
import { MbalotaModule } from './mbalota/mbalota.module';
import { MplayerModule } from './mplayer/mplayer.module';
import { MganadorModule } from './mganador/mganador.module';
import { MjuegoModule } from './mjuego/mjuego.module';
import { ServiceWorkerModule } from '@angular/service-worker';
@NgModule({
  declarations: [
    AppComponent,
    //BalotaComponent,
    //PlayerComponent,
    NavComponent,
    //JuegoComponent,
    //GanadoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MbalotaModule,
    MplayerModule,
    MganadorModule,
    MjuegoModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
