import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { PessoaDetailComponent } from './pessoa-detail/pessoa-detail.component';


@NgModule({
  declarations: [
    PessoaListComponent,
    PessoaDetailComponent
  ],
  imports: [
    CommonModule,
    PessoaRoutingModule
  ]
})
export class PessoaModule { }
