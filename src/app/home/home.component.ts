import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  jugador:number=0;
  jugadas:Array<any>=[];
  ganste:boolean = false;

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


  constructor() { }

  ngOnInit(): void {
  }


  onSelect(e){

    if(this.ganste){
      alert('Ya el juego termino');
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
      console.log('soy el jugador 1')
      if(this.validarGanador(this.jugador)){
        alert('Ganaste');
        this.ganste = true;
        return true;
      }
      this.jugador = 2;
    }else{      
      this.jugadas.push(obj);
      this.colorCaja(this.jugador,e);
      console.log('soy el jugador 2')
      if(this.validarGanador(this.jugador)){
        alert('Ganaste');
        this.ganste = true;
        return true;
      }
      this.jugador = 1;
    }   
  }

  validarGanador(jugador){
    // Combinaciones para ganar
    // A:[1,2,3] B:[4,5,6] C:[7,8,9] D:[1,4,7] 
    // E:[2,5,8] F:[3,6,9] G:[1,5,9] H:[7,5,3]

    let combinacion_a = this.jugadas.filter(x =>x.jugador == jugador &&(x.jugada == 1 || x.jugada == 2 || x.jugada == 3));   
    
    if(combinacion_a.length == 3){
      return true;
    }
    
    let combinacion_b = this.jugadas.filter(x =>x.jugador == jugador &&(x.jugada == 4 || x.jugada == 5 || x.jugada == 6));   

    if(combinacion_b.length == 3){
      return true;
    }

    let combinacion_c = this.jugadas.filter(x =>x.jugador == jugador &&(x.jugada == 7 || x.jugada == 8 || x.jugada == 9));   

    if(combinacion_c.length == 3){
      return true;
    }

    let combinacion_d = this.jugadas.filter(x =>x.jugador == jugador &&(x.jugada == 1 || x.jugada == 4 || x.jugada == 7));   

    if(combinacion_d.length == 3){
      return true;
    }

    let combinacion_e = this.jugadas.filter(x =>x.jugador == jugador &&(x.jugada == 2 || x.jugada == 5 || x.jugada == 8));   

    if(combinacion_e.length == 3){
      return true;
    }

    let combinacion_f = this.jugadas.filter(x =>x.jugador == jugador &&(x.jugada == 3 || x.jugada == 6 || x.jugada == 9));   

    if(combinacion_f.length == 3){
      return true;
    }

    let combinacion_g = this.jugadas.filter(x =>x.jugador == jugador &&(x.jugada == 1 || x.jugada == 5 || x.jugada == 9));   

    if(combinacion_g.length == 3){
      return true;
    }

    let combinacion_h = this.jugadas.filter(x =>x.jugador == jugador &&(x.jugada == 7 || x.jugada == 5 || x.jugada == 3));   

    if(combinacion_h.length == 3){
      return true;
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
