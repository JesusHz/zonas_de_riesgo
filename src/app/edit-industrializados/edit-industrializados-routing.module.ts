import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditIndustrializadosPage } from './edit-industrializados.page';

const routes: Routes = [
  {
    path: '',
    component: EditIndustrializadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditIndustrializadosPageRoutingModule {}
