import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*Import dos formularios*/
import { FormInfoOrcamentoComponent } from './forms/form-info-orcamento/form-info-orcamento.component';
import { FormDadosClienteComponent } from './forms/form-dados-cliente/form-dados-cliente.component';

const routes: Routes = [
  { path: '', redirectTo: '/cadastro-cliente', pathMatch: 'full' },
  { 	path: 'orcamento',
   		component: FormInfoOrcamentoComponent },
  {
    	path: 'cadastro-cliente',
    	component: FormDadosClienteComponent
  },  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
