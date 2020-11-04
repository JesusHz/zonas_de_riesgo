import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditElevacionPage } from './edit-elevacion.page';

const routes: Routes = [
  {
    path: '',
    component: EditElevacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditElevacionPageRoutingModule {}
