import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*Import dos formularios*/
import { FormDadosClienteComponent } from './pages/form-dados-cliente/form-dados-cliente.component';
import { AcompanhamentoComponent } from './pages/acompanhamento/acompanhamento.component';
import { HistoricoComponent } from './pages/historico/historico.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { AuthGuard } from './common_components/_guard/auth.guard';

const routes: Routes = [
   { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    	path: 'cadastro-cliente',
    	component: FormDadosClienteComponent,
      canActivate: [LoginComponent]
  },
  {
    	path: 'acompanhamento',
    	component: AcompanhamentoComponent,
      canActivate: [LoginComponent]
  },
  {
      path: 'historico',
      component: HistoricoComponent,
      canActivate: [LoginComponent]
  },
  {
      path: 'login',
      component: LoginComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'esqueci-senha',
      component: ForgotPasswordComponent,
      canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '/acompanhamento', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
