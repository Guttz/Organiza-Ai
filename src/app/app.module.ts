import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

/*Angular material components*/
import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatNativeDateModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from 'primeng/primeng';

/*Import dos componentes simples*/
import { MyInputTextComponent } from './common_components/my-input-text/my-input-text.component';
import { CardComponent } from './common_components/card/card.component';
import { ListComponent } from './common_components/list/list.component';
import { MyButtonComponent } from './common_components/my-button/my-button.component';
import { MyButtonBwComponent } from './common_components/my-button-bw/my-button-bw.component';
import { MyInputSelectComponent } from './common_components/my-input-select/my-input-select.component';

/*Import dos formularios*/
import { FormInfoOrcamentoComponent } from './pages/form-info-orcamento/form-info-orcamento.component';
import { FormDadosClienteComponent } from './pages/form-dados-cliente/form-dados-cliente.component';
import { AppRoutingModule }     from './app-routing.module';

/*Import de bibliotecas*/
import { FlexLayoutModule } from '@angular/flex-layout';
import { MyFormHeaderComponent } from './common_components/my-form-header/my-form-header.component';
import { HeaderToolbarComponent } from './pages/header-toolbar/header-toolbar.component';
import { AcompanhamentoComponent } from './pages/acompanhamento/acompanhamento.component';

@NgModule({
  declarations: [
    AppComponent,
    MyInputTextComponent,
    MyButtonComponent,
    MyButtonBwComponent,
    CardComponent,
    ListComponent,
    FormInfoOrcamentoComponent,
    MyInputSelectComponent,
    FormDadosClienteComponent,
    MyFormHeaderComponent,
    HeaderToolbarComponent,
    AcompanhamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
