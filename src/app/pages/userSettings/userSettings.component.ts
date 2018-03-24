import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, FormGroup, NgForm, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';

import { OrcaDataService } from '../../services/orcaData/orca-data.service';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'form-dados-cliente',
  templateUrl: './userSettings.component.html',
  styleUrls: ['./userSettings.component.scss']
})

export class UserSettingsComponent implements OnInit {
  url = "http://myas.com.br"

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

  updateSettings(){
    
  }

}