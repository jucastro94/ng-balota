import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './mplayer/player/player.component';
import { JuegoComponent } from './mjuego/juego/juego.component';
import { GanadoresComponent } from './mganador/ganadores/ganadores.component';

const routes: Routes = [
  {
    path:'',
    component: GanadoresComponent
  },
  {
    path:'',
    component: PlayerComponent
  },
  {
    path:"ganadores",
    component: GanadoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
