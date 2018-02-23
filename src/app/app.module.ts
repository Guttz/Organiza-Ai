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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatNativeDateModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from 'primeng/primeng';
import { MatTableModule } from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material';

/*Import dos componentes simples*/
import { MyInputTextComponent } from './common_components/my-input-text/my-input-text.component';
import { CardComponent } from './common_components/card/card.component';
import { ListComponent } from './common_components/list/list.component';
import { MyButtonComponent } from './common_components/my-button/my-button.component';
import { MyButtonBwComponent } from './common_components/my-button-bw/my-button-bw.component';
import { MyInputSelectComponent } from './common_components/my-input-select/my-input-select.component';
import { MyFormHeaderComponent } from './common_components/my-form-header/my-form-header.component';

/*Import dos formularios*/
import { FormDadosClienteComponent } from './pages/form-dados-cliente/form-dados-cliente.component';
import { AppRoutingModule }     from './app-routing.module';

/*Import de bibliotecas*/
import { FlexLayoutModule } from '@angular/flex-layout';

/*Import das Páginas*/
import { HeaderToolbarComponent } from './pages/header-toolbar/header-toolbar.component';
import { AcompanhamentoComponent } from './pages/acompanhamento/acompanhamento.component';
import { HistoricoComponent } from './pages/historico/historico.component';
import { HistoricPopupComponent } from './pages/historico/historico.component';
import { ClienteAtenderComponent } from './pages/acompanhamento/acompanhamento.component';
import { AtendimentoComponent } from './pages/acompanhamento/acompanhamento.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { AuthGuard } from './common_components/_guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    MyInputTextComponent,
    MyButtonComponent,
    MyButtonBwComponent,
    CardComponent,
    ListComponent,
    MyInputSelectComponent,
    FormDadosClienteComponent,
    MyFormHeaderComponent,
    HeaderToolbarComponent,
    AcompanhamentoComponent,
    HistoricoComponent,
    ClienteAtenderComponent,
    AtendimentoComponent,
    HistoricPopupComponent,
    LoginComponent,
    ForgotPasswordComponent
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
    MatTableModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  entryComponents: [
  AcompanhamentoComponent,
  ClienteAtenderComponent,
  AtendimentoComponent,
  LoginComponent,
  HistoricoComponent,
  HistoricPopupComponent],
  providers: [
    LoginComponent,
    AuthGuard
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
