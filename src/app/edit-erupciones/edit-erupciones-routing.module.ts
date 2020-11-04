import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditErupcionesPage } from './edit-erupciones.page';

const routes: Routes = [
  {
    path: '',
    component: EditErupcionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditErupcionesPageRoutingModule {}
