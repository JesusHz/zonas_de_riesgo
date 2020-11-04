import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddIndustrializadosPage } from './add-industrializados.page';

const routes: Routes = [
  {
    path: '',
    component: AddIndustrializadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddIndustrializadosPageRoutingModule {}
