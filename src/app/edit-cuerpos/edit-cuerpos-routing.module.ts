import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditCuerposPage } from './edit-cuerpos.page';

const routes: Routes = [
  {
    path: '',
    component: EditCuerposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditCuerposPageRoutingModule {}
