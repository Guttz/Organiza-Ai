import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-button-orange',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.sass']
})



export class MyButtonComponent {
  @Input() label;
}