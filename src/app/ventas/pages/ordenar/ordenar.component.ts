import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  esMayusculas: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarNosotros(){
    
    if ( this.esMayusculas == false ){
      this.esMayusculas = true;
    } else {
      this.esMayusculas = false;
    }
  }

}
