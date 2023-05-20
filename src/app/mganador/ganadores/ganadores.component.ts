import { Component } from '@angular/core';
import { jugadorInterface } from '../../mganador/ganadores/jugadorInterface';

@Component({
  selector: 'app-ganadores',
  templateUrl: './ganadores.component.html',
  styleUrls: ['./ganadores.component.scss']
})
export class GanadoresComponent {

  ganador: {numeroId:number; nombre:string; apellido:string; numero:string};
  players:Array<jugadorInterface>;
  ganadores:Array<jugadorInterface>;
  numeroGanador:string;

 constructor(){
  this.ganador={
    numeroId:0,
    nombre:"",
    apellido:"",
    numero:"",
  };
  this.numeroGanador="";
  this.players=[];
  this.ganadores=[];
 }
 getNumeroGanador(valor:string){
  this.numeroGanador=valor;
  //this.jugadoresGanadores();
  //alert(this.numeroGanador);
  //console.log(this.ganadores[0].numeroId);
 }
 getJugadores(judadores:Array<jugadorInterface>){
  this.players.shift();
  this.players=[...judadores];
  /*for (let i =0 ; i<judadores.length;i++){
    this.players.push(judadores[i]);
  }*/
 }

/* jugadoresGanadores(){
  for (let i =0 ; i<this.players.length;i++){
    if(this.ganadores[i].numero === this.numeroGanador){
      this.ganadores.push(...this.players[i]);
    }
  }
 }*/
}
