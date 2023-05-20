import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  exports:[PlayerComponent],
  declarations: [PlayerComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MplayerModule { }
