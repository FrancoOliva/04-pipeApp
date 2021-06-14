import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

    transform( argumento: string, enMayusculas: boolean = true ): string{

        // Forma 1
        // if ( enMayusculas ){
        //     return argumento.toUpperCase();
        // } else {
        //     return argumento.toLowerCase();
        // }

        // Forma 2 con operador ternario
        return ( enMayusculas ) ? argumento.toUpperCase() : argumento.toLowerCase();
    }

}