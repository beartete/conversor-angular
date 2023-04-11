import { Component } from '@angular/core';

@Component({
  selector: 'app-conv',
  templateUrl: './conv.component.html',
  styleUrls: ['./conv.component.css']
})
export class ConvComponent {
  inputValue: number = 0;
  fromUnit: string = '';
  toUnit: string = '';
  convertedValue: number = 0;

  convert(): void {
    if (this.inputValue && this.fromUnit && this.toUnit) {
      if (this.fromUnit === 'cm' && this.toUnit === 'm') {
        this.convertedValue = this.inputValue / 100;
      } else if (this.fromUnit === 'cm' && this.toUnit === 'km') {
        this.convertedValue = this.inputValue / 100000;
      } else if (this.fromUnit === 'm' && this.toUnit === 'cm') {
        this.convertedValue = this.inputValue * 100;
      } else if (this.fromUnit === 'm' && this.toUnit === 'km') {
        this.convertedValue = this.inputValue / 1000;
      } else if (this.fromUnit === 'km' && this.toUnit === 'cm') {
        this.convertedValue = this.inputValue * 100000;
      } else if (this.fromUnit === 'km' && this.toUnit === 'm') {
        this.convertedValue = this.inputValue * 1000;
      } else {
        // Unidades de medida inválidas
        this.convertedValue = 0;
      }
    }
  }
  limpar() {
    this.inputValue = 0;
    this.fromUnit = '';
    this.toUnit = '';
    this.convertedValue = 0;
  }
}
