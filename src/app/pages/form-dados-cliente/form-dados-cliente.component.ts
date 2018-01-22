import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Submissions} from './submissions';
import { HttpClient } from '@angular/common/http';


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

  submissions: Submissions = { cpf: '44786368857', nome: 'dssd', telefone: '4181161061',celular: '4181161061', email: 'a@h.c'  };

  matcherEmail = new MyErrorStateMatcher();
  matcherTel = new MyErrorStateMatcher();
  matcherTelCel = new MyErrorStateMatcher();
  matcherCPF = new MyErrorStateMatcher();


  constructor(private http: HttpClient) { }



  ngOnInit() {
  }

  submitForm(myForm:NgForm) {
    console.log(myForm.value);
    //const req = this.http.post('localhost:3000/add', myForm, {
    //  headers: new HttpHeaders().set('Content-Type', 'application/json')});
    const req = this.http.post('http://localhost:3000/add', myForm.value)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured: " + err);
        }
      );
    console.log("Output = " + req);
  }

}
