import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'volar'
})
export class VuelaPipe implements PipeTransform {

    transform( argumento:boolean ):string{

        // IF ( puedeVolar es true ) -> 'Puede Volar' caso contrario ELSE -> 'No puede volar'
        return ( argumento ) ? 'puede volar' : 'no puede volar';

    }
}