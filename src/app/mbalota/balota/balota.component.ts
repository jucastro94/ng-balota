import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-balota',
  templateUrl: './balota.component.html',
  styleUrls: ['./balota.component.scss']
})
export class BalotaComponent {
  @Input()
  valor: number=0;
}
