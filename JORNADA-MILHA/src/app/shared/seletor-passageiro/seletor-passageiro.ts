import { Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-seletor-passageiro',
  standalone: false,
  templateUrl: './seletor-passageiro.html',
  styleUrl: './seletor-passageiro.scss',
})
export class SeletorPassageiro implements ControlValueAccessor {
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';
  value: number = 0;
  onChange = (value: number) => {};
  onToch = () => {};

  writeValue(valor: any): void {
    this.value = valor;
  }

  registerOnChange(fn: any): void {
    //Faz o vinculo com a alteração do valor
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onChange = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented');
  }

  decrementar() {
    if (this.value > 0) {
      this.value -= 1;
      this.onChange(this.value);
      this.onToch();
    }

    console.log(this.value)
  }

  incrementar() {
    this.value += 1;
    this.onChange(this.value);
    this.onToch();
  }
}
