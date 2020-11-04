import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElevacionesPage } from './elevaciones.page';

const routes: Routes = [
  {
    path: '',
    component: ElevacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElevacionesPageRoutingModule {}
