import { Component, OnInit } from '@angular/core';
import { CardSchema } from '../../common_components/schemas/cardSchema';
import { CardStore } from '../../common_components/schemas/cardStore';
import { ListSchema } from '../../common_components/schemas/listSchema';

@Component({
  selector: 'my-acompanhamento',
  templateUrl: './acompanhamento.component.html',
  styleUrls: ['./acompanhamento.component.scss']
})
export class AcompanhamentoComponent implements OnInit {
	cardStore: CardStore;
  lists: ListSchema[];

  constructor() { }

  makeMockData() {
    
    this.cardStore = new CardStore();
    
    const lists: ListSchema[] = [
      {
        name: 'Orçamento',
        cards: []
      },
      {
        name: 'Clientes a atender',
        cards: []
      },
      {
        name: 'Aguardando autorização',
        cards: []
      },
      {
        name: 'Clientes finalizados',
        cards: []
      }
    ];

    this.lists = lists;
  }

  ngOnInit() {
    this.makeMockData();
  }

}
