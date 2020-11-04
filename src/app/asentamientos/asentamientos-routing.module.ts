import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsentamientosPage } from './asentamientos.page';

const routes: Routes = [
  {
    path: '',
    component: AsentamientosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsentamientosPageRoutingModule {}
