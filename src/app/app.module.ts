import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/*Angular material components*/
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


/*Import dos componentes simples*/
import { MyInputTextComponent } from './common_components/my-input-text/my-input-text.component';
import { MyButtonComponent } from './common_components/my-button/my-button.component';
import { MyButtonBwComponent } from './common_components/my-button-bw/my-button-bw.component';
import { MyInputSelectComponent } from './common_components/my-input-select/my-input-select.component';

/*Import dos formularios*/
import { FormInfoOrcamentoComponent } from './forms/form-info-orcamento/form-info-orcamento.component';
import { FormDadosClienteComponent } from './forms/form-dados-cliente/form-dados-cliente.component';






@NgModule({
  declarations: [
    AppComponent,
    MyInputTextComponent,
    MyButtonComponent,
    MyButtonBwComponent,
    FormInfoOrcamentoComponent,
    MyInputSelectComponent,
    FormDadosClienteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
