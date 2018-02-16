import { Component, OnInit, Inject } from '@angular/core';
import { CardSchema } from '../../common_components/schemas/cardSchema';
import { CardStore } from '../../common_components/schemas/cardStore';
import { ListSchema } from '../../common_components/schemas/listSchema';
import { HttpClient } from '@angular/common/http';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-cliente-atender',
  templateUrl: './cliente-atender.component.html',
  styleUrls: ['./cliente-atender.component.scss']
})
export class ClienteAtenderComponent implements OnInit {
    periodos = [
    {value: 'Manhã'},
    {value: 'Tarde'}
  ];

constructor(
    public dialogRef: MatDialogRef<ClienteAtenderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  


  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }


}


@Component({
  selector: 'my-acompanhamento',
  templateUrl: './acompanhamento.component.html',
  styleUrls: ['./acompanhamento.component.scss']
})

export class AcompanhamentoComponent implements OnInit {
	cardStore: CardStore;
  lists: ListSchema[];
  animal: string;
  name: string;

  auxData: any;



  constructor(private http: HttpClient, public dialog: MatDialog) {
  this.getOrcs();
  }

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
        name: 'Clientes finalizados',
        cards: [],
        id : "l2"
      }
    ];

    this.lists = lists;
  }

  ngOnInit() {
    this.makeMockData();
  }


  getOrcs()
  {
    this.http.get<ItemsResponse>("/api/get_orcas").subscribe(data => {
      //Agora todos os dados estao na variavel data
      this.auxData = data;

      for (var i = 0; i < this.auxData.length ; i++) {
        console.log("o id "+ data[i]._id);
          const cardId = this.cardStore.newCard("Orçamento",  data[i]._id, data[i].defeito, data[i].nome, data[i].telPrimario, new Date(data[i].data) , data[i].periodo, data[i].endereco, data[i].marca, data[i].modelo, data[i].telSecundario, data[i].email, null, null, null, null, null, null);
          this.lists[0].cards.push(cardId)
      }

    });
  }
  
    openDialogAtender(): void {
    let dialogRef = this.dialog.open(ClienteAtenderComponent, {
      width: '44vw',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed' + result.marca );
      
      this.animal = result;
    });
  }

  clickOrcamento(idCard): void {

    var card = this.cardStore.getCard(idCard);

    let dialogRef = this.dialog.open(ClienteAtenderComponent, {
      width: '44vw',
      data: { marca: card.marca, defeito: card.defeito, modelo: card.modelo, data: card.data, periodo: card.periodo }
    });

    dialogRef.afterClosed().subscribe(result => {
      
      //console.log('The dialog was closed' + result.defeito );

      if(result!=null){
          result.bd_id = card.bd_id;
/*           estado: string;
            id: string;
            bd_id: string;

            nome: string;
            telPrimario: string;
 
            dia: number;
            mes: number;
            periodo: string;
            endereco: string;
            telSecundario: string;
            email: string;
            realizado: string;
            pecas: string;
            servico: string;
            maoObra: string;
            valorFinal: string;
            metPag: string;*/

          console.log(card);
          card = result;
          console.log(card);
            const req = this.http.post('http://localhost:3000/api/update_orca', result)
            .subscribe(
              res => {
                console.log(res);
              },
              err => {
                console.log("Error occured: " + err.error.message);
              }
            );

      }

    });
  }

  clicked(event){
    this.clickOrcamento(event.target.id);

  }

  drop($event) {
  

    let target = $event.target;

    //Get from the the dom transfer the id of the card that was transfered and the list it came from
    let cardNlist = $event.dataTransfer.getData('text');

    while (target.className !== 'list') {
      target = target.parentNode;
    }

    //Old list ID, the one it came from
    var oldList = parseInt( cardNlist.substring(2,3));

    //New list ID, the one that the card is being dropped
    var newList = parseInt(target.id.substring(1,2));

    if(oldList == 0 && newList == 1){
        this.openDialogAtender();
    }

    else{
      
    }
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


//Definindo o que sera a resposta do getCards
interface ItemsResponse {
    cpf: string,
    defeito: string,
    marca: string,
    data: Date,
    modelo: string,
    periodo: string,
    nome: string,
    telPrimario: string,
    telSecundario: string,
    email: string,
    endereco: string
}
