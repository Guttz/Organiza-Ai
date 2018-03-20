import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, FormGroup, NgForm, Validators} from '@angular/forms';
import { Submissions} from './submissions';
import { Orca} from './../../common_components/schemas/orca';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';

import { OrcaDataService } from '../../services/orcaData/orca-data.service';
import { Observable } from 'rxjs/Rx';

// Importing CPF and CNPJ validators 
var CPF = require("cpf_cnpj").CPF;
var CNPJ = require("cpf_cnpj").CNPJ;

@Component({
  selector: 'form-dados-cliente',
  templateUrl: './form-dados-cliente.component.html',
  styleUrls: ['./form-dados-cliente.component.scss']
})

export class FormDadosClienteComponent implements OnInit {
  //url = "http://localhost:3000";
  //url = "http://localhost";
  //url = "http://ec2-54-210-153-102.compute-1.amazonaws.com:80";
  url = "http://myas.com.br"
  

  values = [ 
    {value: '0', viewValue: 'Manhã'},
    {value: '1', viewValue: 'Tarde'},
  ];

  //TEL    Validators.pattern(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/),
  //CEL  Validators.pattern(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/),
  //CPF    Validators.pattern(/^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/),
  user: Submissions = { cpf: '', nome: '', telPrimario: '', telSecundario: '', email: '', endereco: '' };
  orca : Orca = { cpf: '', defeito: '', marca: '', data: null, modelo: '', imei: '', observacoes: ''};
  update: Boolean = false;
  auxCliente: any;

  constructor(private http: HttpClient, public snackBar: MatSnackBar,private ordaDataService: OrcaDataService){
      if(window.location.href.match(/www/) != null){
        console.log("das me: " + window.location.href);
           this.url = "http://www.myas.com.br";
         }
        else{
          if(window.location.href.match(/local/) != null){
             this.url = "http://localhost";
           }
           else{
             this.url = "http://myas.com.br";
           }
           
        }
   }

  ngOnInit() {
  }

    //My validators
  nomeFormControl = new FormControl('', [
    Validators.required,
  ]);

  enderecoFormControl = new FormControl('', [  
  ]);

  //My validators
  cpfFormControl = new FormControl('', [
    Validators.required,
    this.cpfValidator
  ]);

    //My validators
  cpfOrcaFormControl = new FormControl('', [
    Validators.required,
    this.cpfValidator
  ]);

  emailFormControl = new FormControl('', [
    this.emailValidator
  ]);

  telFormControl = new FormControl('', [
    Validators.required,
    this.phoneValidator
  ]);

  telTwoFormControl = new FormControl('', [
    this.phoneValidator
  ]);


    cpfValidator(control: FormControl) { 
  let cpforcnpj = control.value; 
  if (!(CPF.isValid(cpforcnpj) || CNPJ.isValid(cpforcnpj)) ){ 
      return {
        cpfcnpjInvalid: "Invalid cpf/cnpj"
      }
  }

  return null; 
  }

  emailValidator(control: FormControl) { 
  let email = control.value; 

   if(control.value == null || control.value == ""){
      return null;
    }

  if ( email.length < 3 || email.indexOf("@") == -1 ){ 
      return {
        emailInvalid: "Invalid email"
      }
  }

  return null; 
  }

  phoneValidator(control: FormControl) { 
  let phone = control.value; 
  
  if(phone == null || phone == "")
    return null;

  if ( phone.substring(0, 1) != "(" || phone.substring(3, 4) != ")" || phone.substring(9, 10) != "-" || phone.length != 14){ 
      return {
        phoneInvalid: "Invalid phone"
      }
  }

  return null; 
  }

    typingPhone(){  

    //Inserting automatically parentesis and - in the phone
    if(this.form.value.telPrimario.length >= 1 && this.form.value.telPrimario.substring(0, 1) != "("){
      var aux = this.form.value;
      aux.telPrimario = "(" + aux.telPrimario;
      this.form.setValue(aux);
    }

    if(this.form.value.telPrimario.length >= 4 && this.form.value.telPrimario.substring(3, 4) != ")" ){
      var aux = this.form.value;
      aux.telPrimario = this.form.value.telPrimario.substring(0,3) + ")" + this.form.value.telPrimario.substring(3)
      this.form.setValue(aux);
    }

    if(this.form.value.telPrimario.length >= 10 && this.form.value.telPrimario.substring(9, 10) != "-" ){
      var aux = this.form.value;
      aux.telPrimario = this.form.value.telPrimario.substring(0,9) + "-" + this.form.value.telPrimario.substring(9)
      this.form.setValue(aux);
    }

  }

  typingPhoneTwo(){
    //Inserting automatically parentesis and - in the phone
    if(this.form.value.telSecundario.length >= 1 && this.form.value.telSecundario.substring(0, 1) != "("){
      var aux = this.form.value;
      aux.telSecundario = "(" + aux.telSecundario;
      this.form.setValue(aux);
    }

    if(this.form.value.telSecundario.length >= 4 && this.form.value.telSecundario.substring(3, 4) != ")" ){
      var aux = this.form.value;
      aux.telSecundario = this.form.value.telSecundario.substring(0,3) + ")" + this.form.value.telSecundario.substring(3)
      this.form.setValue(aux);
    }

    if(this.form.value.telSecundario.length >= 10 && this.form.value.telSecundario.substring(9, 10) != "-" ){
      var aux = this.form.value;
      aux.telSecundario = this.form.value.telSecundario.substring(0,9) + "-" + this.form.value.telSecundario.substring(9)
      this.form.setValue(aux);
    }

  }


  //Declaring the form group to interact with the form

  form = new FormGroup({
    cpf: this.cpfFormControl,
    nome: this.nomeFormControl,
    telPrimario: this.telFormControl,
    telSecundario: this.telTwoFormControl,
    email: this.emailFormControl,
    endereco: this.enderecoFormControl,
  });

  userForm() {

     console.log('status ' + this.form.status);

    if(this.form.status == "INVALID"){
          this.cpfFormControl.markAsTouched();
          this.nomeFormControl.markAsTouched();
          this.enderecoFormControl.markAsTouched();
          this.emailFormControl.markAsTouched();
          this.telFormControl.markAsTouched();
          this.telTwoFormControl.markAsTouched();
          
          let config = new MatSnackBarConfig();
          config.extraClasses = ['error-class'];
          config.duration = 3000;
          this.snackBar.open("Preencha os campos obrigatórios devidamente", "Fechar", config);
          return null;
    }
    
/*    if(this.form.value.cpf.length < 1 ||  this.form.value.nome.length < 1  || this.form.value.telPrimario.length < 1  || this.form.value.endereco.length < 1){
      console.log('entrei 2');
      let config = new MatSnackBarConfig();
      config.extraClasses = ['error-class'];
      config.duration = 3000;
      this.snackBar.open("Preencha os campos obrigatórios devidamente", "Fechar", config);
      return null;
    }*/

    console.log('entrei 3');

    const req = this.http.post(this.url + '/api/add_cli', this.form.value)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
           let config = new MatSnackBarConfig();
          config.extraClasses = ['custom-class'];
          config.duration = 3000;
          this.snackBar.open("Erro no cadastro: " + err.error.message, "Fechar", config);

          console.log("Error occured: " + err.error.message);
        }
      );

    this.update = false;
    this.orca.cpf = this.form.value.cpf;

    let config = new MatSnackBarConfig();
    config.extraClasses = ['custom-class'];
    config.duration = 3000;
    this.snackBar.open("Cliente Cadastrado com sucesso", "Fechar", config);

    this.form.reset();
  }

  getValues(){
    return this.values;
  }

  updateUser(myForm:NgForm) {
    //cheking if any required field is empty
    if(this.form.status == "INVALID")
    {
      let config = new MatSnackBarConfig();
      config.extraClasses = ['error-class'];
      config.duration = 3000;
      this.snackBar.open("Preencha os campos obrigatórios devidamente", "Fechar", config);
      return null;
    }

    console.log(this.form.value);

    const req = this.http.post(this.url + '/api/update_cli', this.form.value)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          let config = new MatSnackBarConfig();
          config.extraClasses = ['error-class'];
          config.duration = 3000;
          this.snackBar.open("Erro na atualização de cadastro: " + err.error.message, "Fechar", config);

          console.log("Error occured: " + err.error.message);
        }
      );
      this.update = false;
      this.orca.cpf = this.form.value.cpf;
      let config = new MatSnackBarConfig();
      config.extraClasses = ['custom-class'];
      config.duration = 3000;
      this.snackBar.open("Cadastro atualizado com sucesso", "Fechar", config);

      this.form.reset();
  }

  orcaForm(myForm:NgForm)
  {
    //cheking if any required field is empty
    if(myForm.status == "INVALID" || this.cpfOrcaFormControl.status == "INVALID")
    {
      let config = new MatSnackBarConfig();
      config.extraClasses = ['error-class'];
      config.duration = 3000;
      this.snackBar.open("Preencha todos os campos de orçamento", "Fechar", config);
      return null;
    }

    this.http.post(this.url + '/api/get_cli', {cpf: this.orca.cpf}).subscribe(
      resCliente => {
        this.auxCliente = resCliente;

        //Put the current date in the date field
        myForm.value.data = new Date();

        //Acrescentando os campos que compoem um orçamento
        myForm.value.cpf = this.orca.cpf;
        myForm.value.nome = this.auxCliente.nome;
        myForm.value.telPrimario = this.auxCliente.telPrimario;
        myForm.value.telSecundario = this.auxCliente.telSecundario;
        myForm.value.email = this.auxCliente.email;
        myForm.value.endereco = this.auxCliente.endereco;
          
        this.ordaDataService.addNewCard(myForm.value, 0);
      }, err => 
      {
        console.log(err.error.message)
      }
    );
    let config = new MatSnackBarConfig();
    config.extraClasses = ['custom-class'];
    config.duration = 3000;
    this.snackBar.open("Orçamento criado com sucesso", "Fechar", config);
  }

  checkUser()
  {
     this.http.post<ItemsResponseUser>("/api/get_cli", this.form.value ).subscribe(data => {
      
      if(data != null )
      {
        //Setting the form values
        this.form.setValue( { cpf: data.cpf, nome: data.nome, telPrimario: data.telPrimario, telSecundario: data.telSecundario,
                              email: data.email, endereco: data.endereco});
        this.orca.cpf = data.cpf;
        this.update = true;
      }
      else
      {
        this.update = false;
      }
    });

  }

    checkUserWForm(myForm:NgForm)
  {
     this.http.post<ItemsResponseUser>("/api/get_cli", {cpf: this.orca.cpf} ).subscribe(data => {
      
      if(data != null )
      {
        delete data._id; 
        
        //Setting the form values
        this.form.setValue( { cpf: data.cpf, nome: data.nome, telPrimario: data.telPrimario, telSecundario: data.telSecundario,
                              email: data.email, endereco: data.endereco});
        this.orca.cpf = data.cpf;
        this.update = true;
      }
      else
      {
        this.update = false;
      }
    });

  }

  resetForm(){
    this.form.reset();
    this.form.markAsUntouched();
    this.form.markAsPristine();
    this.form.clearValidators();
  }

}
//Definindo o que sera a resposta do getCards
interface ItemsResponseUser {
  _id: string;
  cpf: string;
  nome: string;
  telPrimario: string;
  telSecundario: string;
  email: string;
  endereco: string;
  observacoes: string;
}