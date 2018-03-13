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
    this.reducedID = this.card.bd_id.substring(17, 24);
    
  }

  dragStart(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
  }
  
}
