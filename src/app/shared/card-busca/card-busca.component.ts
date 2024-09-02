import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.scss']
})
export class CardBuscaComponent {
  @Input() id!: number;
  @Input() destino!: string;
  @Input() imagem!: string;
  @Input() preco!: number;
}
