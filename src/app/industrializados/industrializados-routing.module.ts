import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndustrializadosPage } from './industrializados.page';

const routes: Routes = [
  {
    path: '',
    component: IndustrializadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndustrializadosPageRoutingModule {}
