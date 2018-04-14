import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Card } from '../schemas/card';
import { ListSchema } from '../schemas/listSchema';
import { HttpClient } from '@angular/common/http';
import {AfterViewInit, Directive, ViewChild } from '@angular/core';

@Directive({selector: 'input'})
export class input {
  @Input() id: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, AfterViewInit {
    @ViewChild(input)
  set pane(v: input) {
    
  }

  url = "http://myas.com.br"
  @Input() list: ListSchema;
  init: boolean = false;
    //Value inputed on the filter
  filter: string;
  filteredList = [];

  //Variable to decide if the search box is going to show
  appearSearch: boolean = false;

  sourceList = [];

  constructor(private http: HttpClient) {
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

  ngAfterViewInit() {

  }

  ngOnInit() {
      console.log("List size:" + this.list );
/*      while(this.list){
        
      }*/
      console.log("sai")

      for(var i = 0; i < this.list.cards.length; i++){
        this.filteredList.push(this.list.cards[i]);    
      }

      console.log(this.filteredList);
  }

  allowDrop($event) {
    $event.preventDefault();
  }

  dragStart($event) {
    $event.dataTransfer.setData('text',this.list.id + $event.dataTransfer.getData('text'));
  }

  drop($event) {
    $event.preventDefault();
  }

  filtering(){
    if(!this.init){
      this.init = true;
      this.sourceList = this.list.cards;
    }

    this.filteredList = [];
    console.log("List size:" + this.sourceList.length );
      for(var i = 0; i<this.sourceList.length; i++){
        this.filteredList.push(this.sourceList[i]);    
      }

    var listLen = this.sourceList.length;
    //this.filteredList.cards = this.list.cards;
    //Variable to follow right index when removing multiple itens from array
    var found = 0;

    console.log("filter value: "+ this.filter.toLowerCase());

    for(var i = 0; i < listLen; i++){
      //console.log("all values: " + this.list.cards[i].alldata);
      if(!(this.sourceList[i].alldata.includes(this.filter.toLowerCase()))){
        //Exclui o elemento nessa posicao
        console.log("entrei");
        this.filteredList.splice(i - found, 1);
        found = found + 1;
      }
    }

      this.list.cards = this.filteredList;

        console.log("Lista aux:" + this.filteredList);

    //this.filteredList.cards = auxList;
    //var str = "Hello world, welcome to the universe.";
    //var n = str.includes("world");

  }

  searchOnList(){
    this.appearSearch = true;
    
  }

  quitSearch(){
    this.filter = "";
    this.filtering();
    this.appearSearch = false;
  }

  changHeader(){
   var toSend = Object();
   toSend[this.list.id] = this.list.name;

    this.http.post(this.url + "/api/set_list_headers", toSend).subscribe(data => 
    {
      console.log(data);
    }, err =>{
      console.log("Erro na mudança de cabeçalho: " + err);
    });
  }

  compare(a,b) {
      if (a.id < b.id)
        return -1;
      if (a.id > b.id)
        return 1;
      return 0;
  }


}
