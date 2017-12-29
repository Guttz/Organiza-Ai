import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-input-text',
  templateUrl: './my-input-text.component.html',
  styleUrls: ['./my-input-text.component.sass']
})

export class MyInputTextComponent {
	@Input() label;
	@Input() width;
}

