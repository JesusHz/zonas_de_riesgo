import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErupcionesPage } from './erupciones.page';

const routes: Routes = [
  {
    path: '',
    component: ErupcionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErupcionesPageRoutingModule {}
