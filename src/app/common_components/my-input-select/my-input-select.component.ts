import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-select',
  templateUrl: './my-input-select.component.html',
  styleUrls: ['./my-input-select.component.sass']
})
export class MyInputSelectComponent implements OnInit {
  @Input() values;
  @Input() label;
  @Input() width;
  constructor() {console.log("Valor de values: ", this.values); }

  ngOnInit() {
  }

}