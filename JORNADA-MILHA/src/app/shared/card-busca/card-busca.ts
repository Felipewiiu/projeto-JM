
import { Component, Input } from '@angular/core';
import { Promocao } from '../../core/type/type';

@Component({
  selector: 'app-card-busca',
  standalone: false,
  templateUrl: './card-busca.html',
  styleUrl: './card-busca.scss',
})
export class CardBusca {
  @Input() promocao! : Promocao

}
