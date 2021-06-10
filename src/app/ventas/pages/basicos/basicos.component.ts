import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = "franco";
  nombreUpper: string = "FRANCO";
  nombreCompleto: string = "fRAnco OLiVa";

  fecha: Date = new Date(); // fecha actual

}
