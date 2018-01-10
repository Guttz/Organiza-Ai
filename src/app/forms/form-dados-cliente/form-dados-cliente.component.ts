import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'form-dados-cliente',
  templateUrl: './form-dados-cliente.component.html',
  styleUrls: ['./form-dados-cliente.component.scss']
})

export class FormDadosClienteComponent implements OnInit {
	emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  telFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/),
  ]);

  telCelFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/),
  ]);

  cpfFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/),
  ]);

  matcherEmail = new MyErrorStateMatcher();
  matcherTel = new MyErrorStateMatcher();
  matcherTelCel = new MyErrorStateMatcher();
  matcherCPF = new MyErrorStateMatcher();
  constructor() { }

  ngOnInit() {
  }

}
