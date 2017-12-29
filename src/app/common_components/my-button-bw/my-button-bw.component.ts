import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-button-bw',
  templateUrl: './my-button-bw.component.html',
  styleUrls: ['./my-button-bw.component.sass']
})

export class MyButtonBwComponent {
  @Input() label;
}