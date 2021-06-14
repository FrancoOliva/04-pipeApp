import { Component } from '@angular/core';
import { Color, Heroe } from '../../interface/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent{

  esMayusculas: boolean = false;

  ordenarPor : string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }
  ]

  // constructor() { }

  // ngOnInit(): void {
  // }

  cambiarNosotros(){
    
    if ( this.esMayusculas == false ){
      this.esMayusculas = true;
    } else {
      this.esMayusculas = false;
    }
  }

  cambiarOrden( valor:string ){
    this.ordenarPor = valor;

    console.log(this.ordenarPor);
  }

}
