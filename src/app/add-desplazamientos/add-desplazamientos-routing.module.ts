import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDesplazamientosPage } from './add-desplazamientos.page';

const routes: Routes = [
  {
    path: '',
    component: AddDesplazamientosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDesplazamientosPageRoutingModule {}
