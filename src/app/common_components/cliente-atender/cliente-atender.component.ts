import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-cliente-atender',
  templateUrl: './cliente-atender.component.html',
  styleUrls: ['./cliente-atender.component.scss']
})
export class ClienteAtenderComponent implements OnInit {

constructor(
    public dialogRef: MatDialogRef<ClienteAtenderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
