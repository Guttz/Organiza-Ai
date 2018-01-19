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
        cards: [],
        id : "l0"
      },
      {
        name: 'Clientes a atender',
        cards: [],
        id : "l1"
      },
      {
        name: 'Aguardando autorização',
        cards: [],
        id : "l2"
      },
      {
        name: 'Clientes finalizados',
        cards: [],
        id : "l3"
      }
    ];

    this.lists = lists;
  }

  ngOnInit() {
    this.makeMockData();
    this.lists[0].cards.sort();

  }

  drop($event) {    
    let target = $event.target;

    //Get from the the dom transfer the id of the card that was transfered and the list it came from
    let cardNlist = $event.dataTransfer.getData('text');

    while (target.className !== 'list') {
      target = target.parentNode;
    }

    var oldList = parseInt( cardNlist.substring(2,3));
    var newList = parseInt(target.id.substring(1,2));
    var inserted = false;
    if(oldList != newList){


      var listLenght = this.lists[newList].cards.length;
      //this.lists[ parseInt(target.id.substring(1,2)) ].cards.push( this.cardStore.newCard(this.cardStore.getCard(cardNlist.substring(0,1)).description)); 
      var i;
      for (i = 0; i < listLenght; i++) {
          if(this.cardStore.getCard(cardNlist.substring(0,1)).date < this.cardStore.getCard( this.lists[newList].cards[i] ).date){
              this.lists[newList].cards.splice(i, 0, this.cardStore.getCard(cardNlist.substring(0,1)).id );
              inserted = true;
              break;
          }
      }

      if(!inserted){
        this.lists[newList].cards.splice(i, 0, this.cardStore.getCard(cardNlist.substring(0,1)).id );
      }


      //window.alert(this.cardStore.getCard(cardNlist.substring(0,1)).date >= this.cardStore.getCard( this.lists[newList].cards[0] ).date);
      //this.lists[newList].cards.push( this.cardStore.getCard(cardNlist.substring(0,1)).id ); 
      this.lists[oldList].cards.splice( this.lists[ parseInt( cardNlist.substring(2,3)) ].cards.indexOf( this.cardStore.getCard(cardNlist.substring(0,1)).id ), 1);

    //window.alert(  this.lists[ parseInt( cardNlist.substring(2,3)) ].cards );

    }

  }

}
