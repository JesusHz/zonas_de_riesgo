import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditDesplazamientosPage } from './edit-desplazamientos.page';

const routes: Routes = [
  {
    path: '',
    component: EditDesplazamientosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDesplazamientosPageRoutingModule {}
