import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViejaService {

  constructor() { }



  validarGanador(jugador,lst){
    // Combinaciones para ganar
    // A:[1,2,3] B:[4,5,6] C:[7,8,9] D:[1,4,7] 
    // E:[2,5,8] F:[3,6,9] G:[1,5,9] H:[7,5,3]

      return new Promise((resolve) => {        
      
          let combinacion_a = lst.filter(x =>x.jugador == jugador &&(x.jugada == 1 || x.jugada == 2 || x.jugada == 3));   
          
          if(combinacion_a.length == 3){
            resolve(true);
          }
          
          let combinacion_b = lst.filter(x =>x.jugador == jugador &&(x.jugada == 4 || x.jugada == 5 || x.jugada == 6));   
      
          if(combinacion_b.length == 3){
            resolve(true);
          }
      
          let combinacion_c = lst.filter(x =>x.jugador == jugador &&(x.jugada == 7 || x.jugada == 8 || x.jugada == 9));   
      
          if(combinacion_c.length == 3){
            resolve(true);
          }
      
          let combinacion_d = lst.filter(x =>x.jugador == jugador &&(x.jugada == 1 || x.jugada == 4 || x.jugada == 7));   
      
          if(combinacion_d.length == 3){
            resolve(true);
          }
      
          let combinacion_e = lst.filter(x =>x.jugador == jugador &&(x.jugada == 2 || x.jugada == 5 || x.jugada == 8));   
      
          if(combinacion_e.length == 3){
            resolve(true);
          }
      
          let combinacion_f = lst.filter(x =>x.jugador == jugador &&(x.jugada == 3 || x.jugada == 6 || x.jugada == 9));   
      
          if(combinacion_f.length == 3){
            resolve(true);
          }
      
          let combinacion_g = lst.filter(x =>x.jugador == jugador &&(x.jugada == 1 || x.jugada == 5 || x.jugada == 9));   
      
          if(combinacion_g.length == 3){
            resolve(true);
          }
      
          let combinacion_h = lst.filter(x =>x.jugador == jugador &&(x.jugada == 7 || x.jugada == 5 || x.jugada == 3));   
      
          if(combinacion_h.length == 3){
            resolve(true);
          }
      });
  }



}
