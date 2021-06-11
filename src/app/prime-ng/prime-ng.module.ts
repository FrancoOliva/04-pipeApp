import { NgModule } from '@angular/core';


// PrimeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';

// Este modulo solo nos va a servir para exportar
// los modulos de primeNg que estoy utilizando
@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule
  ]
})
export class PrimeNgModule { }
