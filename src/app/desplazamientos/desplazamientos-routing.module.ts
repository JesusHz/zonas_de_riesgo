import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesplazamientosPage } from './desplazamientos.page';

const routes: Routes = [
  {
    path: '',
    component: DesplazamientosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesplazamientosPageRoutingModule {}
