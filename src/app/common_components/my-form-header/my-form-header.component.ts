import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-form-header',
  templateUrl: './my-form-header.component.html',
  styleUrls: ['./my-form-header.component.scss']
})
export class MyFormHeaderComponent implements OnInit {
	@Input() label;

  	constructor() { }

  	ngOnInit() {
  }

}
