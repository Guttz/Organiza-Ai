import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import { Submissions} from './submissions';
import { Orca} from './../../../../schemas/orca';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'form-dados-cliente',
  templateUrl: './form-dados-cliente.component.html',
  styleUrls: ['./form-dados-cliente.component.scss']
})

export class FormDadosClienteComponent implements OnInit {
  url = "http://localhost";
  //url = "http://ec2-54-210-153-102.compute-1.amazonaws.com:80";
  //url = "http://myas.com.br"
    myform: FormGroup;


  values = [ 
    {value: '0', viewValue: 'Manhã'},
    {value: '1', viewValue: 'Tarde'},
  ];
  //TEL    Validators.pattern(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/),
  //CEL  Validators.pattern(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/),
  //CPF    Validators.pattern(/^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/),

  user: Submissions = { cpf: '', nome: '', telPrimario: '', telSecundario: '', email: '', endereco: '' };
  orca : Orca = { cpf: '', defeito: '', marca: '', data: new Date(), modelo: '', periodo: ''};
  update: Boolean = false;
  auxCliente: any;
  activeForm: boolean = true;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  email = new FormControl('', [Validators.required, Validators.email]);

    getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  userForm(myForm:NgForm) {

    //cheking if any required field is empty
    if(myForm.value.cpf == "" || myForm.value.nome == "" || myForm.value.telefone == "" || myForm.value.endereco == "")
    {
      return null;
    }
    const req = this.http.post(this.url + '/api/add_cli', myForm.value)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured: " + err.error.message);
        }
      );
    this.update = false;


/*    this.user.cpf = '';
    this.user.nome = '';
    this.user.telPrimario = '';
    this.user.telSecundario = '';
    this.user.email = '';
    this.user.endereco = '';*/

    this.orca.cpf = myForm.value.cpf;

/*    myForm.reset();
    this.activeForm=false;
    setTimeout(() => this.activeForm = true, 0);
*/
  }

  getValues(){
    return this.values;
  }

  updateUser(myForm:NgForm) {
    //cheking if any required field is empty
    if(myForm.value.cpf == "" || myForm.value.nome == "" || myForm.value.telPrimario == "" || myForm.value.endereco == "")
    {
      alert("Os campos com * devem ser preenchidos.");
      return null;
    }
    const req = this.http.post(this.url + '/api/update_cli', myForm.value)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured: " + err.error.message);
        }
      );
    this.update = false;
    this.user.cpf = ' ';
    this.user.nome = ' ';
    this.user.telPrimario = ' ';
    this.user.telSecundario = ' ';
    this.user.email = ' ';
    this.user.endereco = ' ';
    this.orca.cpf = myForm.value.cpf;
  }

  orcaForm(myForm:NgForm) {
    //cheking if any required field is empty
    if(myForm.value.cpf == "" || myForm.value.defeito == "" || myForm.value.marca == "" || myForm.value.data == "" 
      || myForm.value.modelo == "" || myForm.value.periodo == "" )
    {
      alert("Preencha os campos devidamente");
      return null;
    }

    //Add other values to the orca
    myForm.value.test = "test2";

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
                  console.log(res);
                },
                err => {
                  console.log("Error occured: " + err.error.message);
                }
              );
        },
        err => {
          console.log("Error occured: " + err.error.message);
        }
      );
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
        this.user.nome = '';
        this.user.telPrimario = '';
        this.user.telSecundario = '';
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
  telPrimario: string;
  telSecundario: string;
  email: string;
  endereco: string;
}