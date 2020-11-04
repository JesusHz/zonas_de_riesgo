import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditRiosPage } from './edit-rios.page';

const routes: Routes = [
  {
    path: '',
    component: EditRiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditRiosPageRoutingModule {}
