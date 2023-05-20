import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GanadoresComponent } from './ganadores/ganadores.component';
import { MplayerModule } from '../mplayer/mplayer.module';
import { PlayerComponent } from '../mplayer/player/player.component';
import { jugadorInterface } from './ganadores/jugadorInterface';
import { MjuegoModule } from '../mjuego/mjuego.module';



@NgModule({
  exports:[GanadoresComponent],
  declarations: [GanadoresComponent],
  imports: [
    CommonModule,
    MplayerModule,
    MjuegoModule
  ]
})
export class MganadorModule { }
