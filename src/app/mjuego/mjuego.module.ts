import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegoComponent } from './juego/juego.component';
import { MbalotaModule } from '../mbalota/mbalota.module';



@NgModule({
  exports:[JuegoComponent],
  declarations: [JuegoComponent],
  imports: [
    CommonModule,
    MbalotaModule
  ]
})
export class MjuegoModule { }
