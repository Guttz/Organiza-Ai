import { Component, OnInit } from '@angular/core';


/*Import dos componentes simples*/
import { MyInputTextComponent } from '../../common_components/my-input-text/my-input-text.component';
import { MyButtonComponent } from '../../common_components/my-button/my-button.component';
import { MyButtonBwComponent } from '../../common_components/my-button-bw/my-button-bw.component';


@Component({
  selector: 'form-info-orcamento',
  templateUrl: './form-info-orcamento.component.html',
  styleUrls: ['./form-info-orcamento.component.sass']
})
export class FormInfoOrcamentoComponent implements OnInit {
  values = [ 
    {value: '0', viewValue: 'Marca 0'},
    {value: '1', viewValue: 'Marca 1'},
    {value: '2', viewValue: 'Marca 2'}
  ];
  constructor() {}

  getValues(){
    return this.values;
  }
  ngOnInit() {
  }

}
