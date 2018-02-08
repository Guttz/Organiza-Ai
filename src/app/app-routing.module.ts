import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*Import dos formularios*/
import { FormDadosClienteComponent } from './pages/form-dados-cliente/form-dados-cliente.component';
import { AcompanhamentoComponent } from './pages/acompanhamento/acompanhamento.component';
import { HistoricoComponent } from './pages/historico/historico.component';

const routes: Routes = [
   { path: '', redirectTo: '/cadastro-cliente', pathMatch: 'full' },
  {
    	path: 'cadastro-cliente',
    	component: FormDadosClienteComponent
  },
  {
    	path: 'acompanhamento',
    	component: AcompanhamentoComponent
  },
  {
      path: 'historico',
      component: HistoricoComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
