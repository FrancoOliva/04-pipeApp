import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Carla';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Franco','Maria','Pedro','Marcelo','Carla'];

  clientesMapa = {
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2':'tenemos 2 clientes esperando.',
    'other':'tenemos # clientes esperando.' // # transfiere el valor que estamos recibiendo
  }

  cambiarPersona(){
    this.nombre = 'Franco';
    this.genero = 'masculino';
  }

  borrarCliente(){
    this.clientes.splice(0,1);
    
  }

  // KayValue Pipe
  persona = {
    nombre: 'Franco',
    edad: 29,
    dirección: 'Rosario, Santa Fe, Argentina'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  // Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve,reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data de la promesa')
    }, 3500 );

  });

}
