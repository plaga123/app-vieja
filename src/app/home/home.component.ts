import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import { ViejaService } from '../services/vieja.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  jugador:number=0;
  jugadas:Array<any>=[];
  ganste:boolean = false;
  ganador:string="";

  txt1:string="";
  txt2:string="";
  txt3:string="";
  txt4:string="";
  txt5:string="";
  txt6:string="";
  txt7:string="";
  txt8:string="";
  txt9:string="";

  caja1:string="";
  caja2:string="";
  caja3:string="";
  caja4:string="";
  caja5:string="";
  caja6:string="";
  caja7:string="";
  caja8:string="";
  caja9:string="";


  constructor(
    private serviValidar:ViejaService
  ) { }

  ngOnInit(): void {
  }


  onSelect(e){   

    if(this.ganste){
      Swal.fire(
        'Juego terminado',
        'Presione el boton para continuar',
        'error'
      )
      return true;
    }

    if(this.jugadas.find(x =>x.jugada == e)){
      Swal.fire(
        'Esta casilla ya esta ocupada',
        'Presione el boton para continuar',
        'error'
      )
      return true;
    }

    if(this.jugador == 0){
      this.jugador = 1;
    }

    let obj = {
      jugador:this.jugador,
      jugada:e
    }

    if(this.jugador == 1){
      this.jugadas.push(obj);
      this.colorCaja(this.jugador,e);    
      this.serviValidar.validarGanador(this.jugador,this.jugadas)
      .then((resp) =>{
        if(resp){
          Swal.fire(
            `Ganador jugador X`,
            'Presione el boton para continuar',
            'success'
          )
         this.ganste = true; 
        }
      });


      this.jugador = 2;
    }else{      
      this.jugadas.push(obj);
      this.colorCaja(this.jugador,e);     
      this.serviValidar.validarGanador(this.jugador,this.jugadas)
        .then((resp) =>{
          if(resp){
            Swal.fire(
              `Ganador jugador O`,
              'Presione el boton para continuar',
              'success'
            )
          this.ganste = true; 
          }
        })
      this.jugador = 1;
    }    
  }

  
  colorCaja(jugador,valor){

    if(jugador == 1){

      switch (valor) {
        case 1:
          this.txt1 = "X";
          this.caja1 = "green";
        break;

        case 2:
          this.txt2 = "X";
          this.caja2 = "green";
        break;

        case 3:
          this.txt3 = "X";
          this.caja3 = "green";
        break;

        case 4:
          this.txt4 = "X";
          this.caja4 = "green";
        break;

        case 5:
          this.txt5 = "X";
          this.caja5 = "green";
        break;

        case 6:
          this.txt6 = "X";
          this.caja6 = "green";
        break;

        case 7:
          this.txt7 = "X";
          this.caja7 = "green";
        break;

        case 8:
          this.txt8 = "X";
          this.caja8 = "green";
        break;

        case 9:
          this.txt9 = "X";
          this.caja9 = "green";
        break;        
      }

    }else{
      switch (valor) {
        case 1:
          this.txt1 = "O";
          this.caja1 = "blue";
         
        break;

        case 2:
          this.txt2 = "O";
          this.caja2 = "blue";
        break;

        case 3:
          this.txt3 = "O";
          this.caja3 = "blue";
        break;

        case 4:
          this.txt4 = "O";
          this.caja4 = "blue";
        break;

        case 5:
          this.txt5 = "O";
          this.caja5 = "blue";
        break;

        case 6:
          this.txt6 = "O";
          this.caja6 = "blue";
        break;

        case 7:
          this.txt7 = "O";
          this.caja7 = "blue";
        break;

        case 8:
          this.txt8 = "O";
          this.caja8 = "blue";
        break;

        case 9:
          this.txt9 = "O";
          this.caja9 = "blue";
        break;     
        
      }
    }
  }

  onJugar(){
    this.jugador = 0;
    this.jugadas = [];
    this.ganste = false;

    this.ganador = "";

    this.txt1="";
    this.txt2="";
    this.txt3="";
    this.txt4="";
    this.txt5="";
    this.txt6="";
    this.txt7="";
    this.txt8="";
    this.txt9="";
  
    this.caja1="";
    this.caja2="";
    this.caja3="";
    this.caja4="";
    this.caja5="";
    this.caja6="";
    this.caja7="";
    this.caja8="";
    this.caja9="";
  }

}
