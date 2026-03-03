
import { Component, OnInit } from '@angular/core';
import { PromocaoService } from '../../core/services/promocaoService';
import { Promocao } from '../../core/type/type';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit{

  promocoes! : Promocao[];

 constructor (private servico : PromocaoService){

 }

  ngOnInit(): void {
    this.servico.listar().subscribe(listaPromocoes => {
        this.promocoes = listaPromocoes
    })
  }


}
