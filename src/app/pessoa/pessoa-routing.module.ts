import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaListComponent } from '../empresa/empresa-list/empresa-list.component';
import { EmpresaDetailComponent } from '../empresa/empresa-detail/empresa-detail.component';

const routes: Routes = [
  {
    path: '', component: EmpresaListComponent
  },
  {
    path: 'detail', component: EmpresaDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
