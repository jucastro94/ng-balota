import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent {
  num1:number;
  num2:number;
  num3:number;
  num4:number;
  num5:number;
  numWin:string;

  @Output()
  numeroGanador: EventEmitter<string>= new EventEmitter();

  constructor(){
    this.num1=0;
    this.num2=0;
    this.num3=0;
    this.num4=0;
    this.num5=0;
    this.numWin="";
  }
  getNumberPlaying(){
    let myNumber:number;
    myNumber=(Math.trunc(Math.random()*9)-1)+(1);
    if(myNumber < 0 )myNumber=0;
    return myNumber;
  }
  playLotery():void{
    this.num1=this.getNumberPlaying();
    this.num2=this.getNumberPlaying();
    this.num3=this.getNumberPlaying();
    this.num4=this.getNumberPlaying();
    this.num5=this.getNumberPlaying();
    this.numWin = this.num1.toString()+this.num2.toString()//+this.num3.toString()+this.num4.toString()+this.num5.toString();
    this.numeroGanador.emit(this.numWin);
  }

}
