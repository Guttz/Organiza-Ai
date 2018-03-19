import { Component, Input, OnInit } from '@angular/core';
import { CardSchema } from '../schemas/cardSchema';
import { CardStore } from '../schemas/cardStore';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: CardSchema;
  
  reducedID;

  constructor() {
    
  }

  ngOnInit() {
    console.log(this.card);
    this.reducedID = this.card.ordServ.substring(17, 24);
    
  }

  dragStart(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
  }
  
}
