import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interface/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform( heroes: Heroe[], ordenarPor: string = 'sin valor' ): Heroe[] {

    // (a,b) compara el 1ro con el 2do, el 2do con el 3ro y así..
    // ponemos 1 si necesitamos cambiarlos de lugar y -1 si es al revés

    switch ( ordenarPor ) {

      case 'nombre':
        return heroes = heroes.sort( (a,b) => ( a.nombre > b.nombre ) ? 1 : -1 );
      
      case 'color':
        return heroes = heroes.sort( (a,b) => ( a.color > b.color ) ? 1 : -1 );
      
      case 'vuela':
        return heroes = heroes.sort( (a,b) => ( a.vuela > b.vuela ) ? -1 : 1 ); // en caos booleanos ordena entre 0 y 1

      default: 
      return heroes;
    }

    
  }

}
