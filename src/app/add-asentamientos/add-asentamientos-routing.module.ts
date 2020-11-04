import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAsentamientosPage } from './add-asentamientos.page';

const routes: Routes = [
  {
    path: '',
    component: AddAsentamientosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAsentamientosPageRoutingModule {}
