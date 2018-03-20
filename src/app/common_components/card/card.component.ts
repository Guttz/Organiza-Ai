import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../schemas/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  
  reducedID;

  constructor() {
    
  }

  ngOnInit() {
    this.reducedID = this.card.getOrdServ().substring(17, 24);
    
  }

  dragStart(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
  }
  
}
