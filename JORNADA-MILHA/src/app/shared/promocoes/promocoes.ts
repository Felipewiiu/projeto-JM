import { Component, OnInit } from '@angular/core';
import { Promocao } from '../../core/type/type';
import { PromocaoService } from '../../core/services/promocaoService';

@Component({
  selector: 'app-promocoes',
  standalone: false,
  templateUrl: './promocoes.html',
  styleUrl: './promocoes.scss',
})
export class PromocoesComponent implements OnInit {
  promocoes!: Promocao[];
  constructor(private service: PromocaoService) {
  }
  
  ngOnInit(): void {
    this.service.listar().subscribe(
      res => {
        this.promocoes = res;
      }
    )
  }
}
