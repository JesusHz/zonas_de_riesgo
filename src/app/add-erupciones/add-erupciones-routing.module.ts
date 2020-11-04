import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddErupcionesPage } from './add-erupciones.page';

const routes: Routes = [
  {
    path: '',
    component: AddErupcionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddErupcionesPageRoutingModule {}
