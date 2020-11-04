import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCuerposPage } from './add-cuerpos.page';

const routes: Routes = [
  {
    path: '',
    component: AddCuerposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCuerposPageRoutingModule {}
