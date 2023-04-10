import { Component } from '@angular/core';

@Component({
  selector: 'app-conv',
  templateUrl: './conv.component.html',
  styleUrls: ['./conv.component.css']
})
export class ConvComponent {
  selectedOption1: string = '';
  primeiroNumero: number = 0;
  segundoNumero: number = 0;
  resultado: number = 0;

  limpar() {
    this.resultado = 0;
    this.segundoNumero = 0;
  }

  converter() {
    switch (this.selectedOption1) {
      case '1':
        this.segundoNumero = this.primeiroNumero * 1000;
        break;
      case '2':
        this.segundoNumero = this.primeiroNumero / 100;
        break;
      case '3':
        this.segundoNumero = this.primeiroNumero * 10;
        break;
      default:
        this.segundoNumero = 0;
        break;
    }
  }
}
