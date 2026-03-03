import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-controle',
  standalone: false,
  templateUrl: './botao-controle.html',
  styleUrl: './botao-controle.scss',
})
export class BotaoControle {
  @Input() operacao: 'incrementar' | 'decrementar' = "incrementar";
  @Input() src = '';
  @Input() alt = '';
}
