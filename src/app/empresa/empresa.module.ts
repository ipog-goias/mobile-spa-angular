import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaDetailComponent } from './empresa-detail/empresa-detail.component';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';


@NgModule({
  declarations: [
    EmpresaDetailComponent,
    EmpresaListComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule
  ],
  exports:[
    EmpresaDetailComponent,
    EmpresaListComponent
  ]
})
export class EmpresaModule { }
