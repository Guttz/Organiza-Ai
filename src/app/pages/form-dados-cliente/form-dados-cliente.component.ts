import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Submissions} from './submissions';
import { Orca} from './../../../../schemas/orca';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';

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
  orca : Orca = { cpf: '', defeito: '', marca: '', data: null, modelo: '', periodo: ''};
  update: Boolean = false;
  auxCliente: any;

  constructor(private http: HttpClient, public snackBar: MatSnackBar){
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

  userForm(myForm:NgForm) {
    //cheking if any required field is empty
    if(myForm.value.cpf == "" || myForm.value.nome == "" || myForm.value.telefone == "" || myForm.value.endereco == "")
    {
      let config = new MatSnackBarConfig();
      config.extraClasses = ['error-class'];
      config.duration = 3000;
      this.snackBar.open("Preencha os campos obrigatórios", "Fechar", config);
      return null;
    }
    const req = this.http.post(this.url + '/api/add_cli', myForm.value)
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
    this.orca.cpf = myForm.value.cpf;
    this.user.cpf = '';
    this.user.nome = '';
    this.user.telPrimario = '';
    this.user.telSecundario = '';
    this.user.email = '';
    this.user.endereco = '';

    let config = new MatSnackBarConfig();
    config.extraClasses = ['custom-class'];
    config.duration = 3000;
    this.snackBar.open("Cliente Cadastrado com sucesso", "Fechar", config);

  }

  getValues(){
    return this.values;
  }

  updateUser(myForm:NgForm) {
    //cheking if any required field is empty
    if(myForm.value.cpf == "" || myForm.value.nome == "" || myForm.value.telPrimario == "" || myForm.value.endereco == "")
    {
      let config = new MatSnackBarConfig();
      config.extraClasses = ['error-class'];
      config.duration = 3000;
      this.snackBar.open("Os campos com * devem ser preenchidos.", "Fechar", config);
      return null;
    }
    const req = this.http.post(this.url + '/api/update_cli', myForm.value)
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
      this.orca.cpf = myForm.value.cpf;
      this.user.cpf = '';
      this.user.nome = '';
      this.user.telPrimario = '';
      this.user.telSecundario = '';
      this.user.email = '';
      this.user.endereco = '';
      let config = new MatSnackBarConfig();
      config.extraClasses = ['custom-class'];
      config.duration = 3000;
      this.snackBar.open("Cadastro atualizado com sucesso", "Fechar", config);
  }

  orcaForm(myForm:NgForm) {
    //cheking if any required field is empty
    if(myForm.value.cpf == "" || myForm.value.defeito == "" || myForm.value.marca == "" || myForm.value.data == "" || myForm.value.modelo == "" || myForm.value.periodo == "" ){
      let config = new MatSnackBarConfig();
      config.extraClasses = ['error-class'];
      config.duration = 3000;
      this.snackBar.open("Preencha os campos obrigatórios", "Fechar", config);
      return null;
    }

    this.http.post(this.url + '/api/get_cli', myForm.value).subscribe(
        resCliente => {
          this.auxCliente = resCliente;

          if(myForm.value.periodo == "0"){
            myForm.value.periodo = "Manhã";
          }else{
            myForm.value.periodo = "Tarde";
          }

          //Acrescentando os campos que compoem um orçamento
          myForm.value.nome = this.auxCliente.nome;
          myForm.value.telPrimario = this.auxCliente.telPrimario;
          myForm.value.telSecundario = this.auxCliente.telSecundario;
          myForm.value.email = this.auxCliente.email;
          myForm.value.endereco = this.auxCliente.endereco;
           
            this.http.post(this.url + '/api/add_orca', myForm.value)
              .subscribe(
                res => {
                   this.orca.cpf = "";
                   this.orca.data = null;
                   this.orca.marca = null
                   this.orca.modelo = null
                   this.orca.periodo = null;
                   this.orca.defeito = null;
                    this.update = false;
                    this.user.cpf = '';
                    this.user.nome = '';
                    this.user.telPrimario = '';
                    this.user.telSecundario = '';
                    this.user.email = '';
                    this.user.endereco = '';
                },
                err => {
                  let config = new MatSnackBarConfig();
                  config.extraClasses = ['error-class'];
                  config.duration = 3000;
                  this.snackBar.open("Erro na criação do orçamento: " + err.error.message, "Fechar", config);
                  console.log("Error occured: " + err.error.message);
                }
              );
        },
        err => {
          console.log("Error occured: " + err.error.message);
        }
      );
      let config = new MatSnackBarConfig();
      config.extraClasses = ['custom-class'];
      config.duration = 3000;
      this.snackBar.open("Orçamento criado com sucesso", "Fechar", config);
  }

  checkUser(myForm:NgForm)
  {
     this.http.post<ItemsResponseUser>("/api/get_cli", myForm.value ).subscribe(data => {
      
      if(data != null )
      {
        this.user.cpf = data.cpf;
        this.orca.cpf = data.cpf;
        this.user.nome = data.nome;
        this.user.telPrimario = data.telPrimario;
        this.user.telSecundario = data.telSecundario;
        this.user.email = data.email;
        this.user.endereco = data.endereco;
        this.update = true;
      }
      else
      {
        this.update = false;
      }
    });

  }

}
//Definindo o que sera a resposta do getCards
interface ItemsResponseUser {
  cpf: string;
  nome: string;
  telPrimario: string;
  telSecundario: string;
  email: string;
  endereco: string;
}