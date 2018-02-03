import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Submissions} from './submissions';
import { Orca} from './../../../../schemas/orca';
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

  values = [ 
    {value: '0', viewValue: 'Marca 0'},
    {value: '1', viewValue: 'Marca 1'},
    {value: '2', viewValue: 'Marca 2'}
  ];


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

  user: Submissions = { cpf: '', nome: '', telefone: '',celular: '', email: '', endereco: '' };
  orca : Orca = { cpf: '', defeito: '', marca: '', data: new Date(1995, 10, 7), modelo: '', periodo: ''};
  update: Boolean = false;
  

  matcherEmail = new MyErrorStateMatcher();
  matcherTel = new MyErrorStateMatcher();
  matcherTelCel = new MyErrorStateMatcher();
  matcherCPF = new MyErrorStateMatcher();


  constructor(private http: HttpClient) { }



  ngOnInit() {
  }

  userForm(myForm:NgForm) {

    const req = this.http.post('http://localhost:3000/add_cli', myForm.value)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured: " + err.error.message);
        }
      );
    this.update = false;
    this.user.nome = '';
    this.user.telefone = '';
    this.user.celular = '';
    this.user.email = '';
    this.user.endereco = '';
    this.orca.cpf = myForm.value.cpf;
  }



  getValues(){
    return this.values;
  }

  updateUser(myForm:NgForm) {

    const req = this.http.post('http://localhost:3000/update_cli', myForm.value)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured: " + err.error.message);
        }
      );
    this.update = false;
    this.user.nome = '';
    this.user.telefone = '';
    this.user.celular = '';
    this.user.email = '';
    this.user.endereco = '';
    this.orca.cpf = myForm.value.cpf;
  }

  orcaForm(myForm:NgForm) {
    console.log(myForm.value);

    const req = this.http.post('http://localhost:3000/add_orca', myForm.value)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured: " + err.error.message);
        }
      );
    console.log("Output = " + req);
  }

  checkUser(myForm:NgForm)
  {
    this.http.post<ItemsResponseUser>("/get_user", myForm.value ).subscribe(data => {
      
      if(data != null )
      {
        this.user.cpf = data.cpf;
        this.orca.cpf = data.cpf;
        this.user.nome = data.nome;
        this.user.telefone = data.telefone;
        this.user.celular = data.celular;
        this.user.email = data.email;
        this.user.endereco = data.endereco;
        this.update = true;
      }
      else
      {
        this.update = false;
        this.user.nome = '';
        this.user.telefone = '';
        this.user.celular = '';
        this.user.email = '';
        this.user.endereco = '';
      }
    });
  }
}
//Definindo o que sera a resposta do getCards
interface ItemsResponseUser {
  cpf: string;
  nome: string;
  telefone: string;
  celular: string;
  email: string;
  endereco: string;
}