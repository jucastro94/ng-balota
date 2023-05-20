import { Component, EventEmitter, Output,NgModule } from '@angular/core';
import { playersInterface } from './playersInterface';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
 player: {numeroId:number; nombre:string; apellido:string; numero:string};


 players:Array<playersInterface>;
 constructor(){
  this.player={
    numeroId:0,
    nombre:"",
    apellido:"",
    numero:""
  };
  this.players=[];
 }
 @Output()
  jugadores:EventEmitter<Array<playersInterface>> = new EventEmitter();

  registrarPlayer(){
    for(let x = 0; x < this.players.length;x++){
      if(this.players[x].numeroId===this.player.numeroId){
        alert("el Jugador ya esta registrado");
        return;
      }
    }
    this.players.push({
      numeroId:this.player.numeroId,
      nombre:this.player.nombre,
      apellido:this.player.apellido,
      numero:this.player.numero
    })
    this.jugadores.emit(this.players);
  }
}
