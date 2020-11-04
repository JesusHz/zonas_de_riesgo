import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditAsentamientosPage } from './edit-asentamientos.page';

const routes: Routes = [
  {
    path: '',
    component: EditAsentamientosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditAsentamientosPageRoutingModule {}
