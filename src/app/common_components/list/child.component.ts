import { Component, Input, ViewChild } from '@angular/core';
//Child Component
@Component({
    selector: 'app-child',//Child component Selector
    template: `
    <div *ngIf="showFilter" fxLayout="row">
      <mat-form-field fxFlex="grow" style="padding-top: 0px; margin-top: 0px; border-width: 0px; color: blue;">
        <input matInput #someInput autofocus (keyup)="filtering()" (blur)="quitSearch()" [(ngModel)]="filter" style="padding-top: 0px; margin-top: 0px; border: 0px; background: transparent;" >

        <mat-placeholder style="font-size: 12px;">
          Filtrar...
        </mat-placeholder>

      </mat-form-field>

      <button (click)="someInput.focus()">hehe </button>
    </div>  
  `,
    styles: [`
  `]
})
export class ChildComponent {
  @Input() listHide: boolean;
  @ViewChild('someInput') someInput: any;

  private showFilter = false;

  private filter : String;
  
  searchOnList(){
      this.showFilter = true;
      console.log("hehehe: " + this.someInput.nativeElement.value);
  }

  quitSearch(){
      this.showFilter = false;
  }

  getFilterValue(){
    return this.filter;
  }


}
