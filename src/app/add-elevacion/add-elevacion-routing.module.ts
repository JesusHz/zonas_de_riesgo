import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddElevacionPage } from './add-elevacion.page';

const routes: Routes = [
  {
    path: '',
    component: AddElevacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddElevacionPageRoutingModule {}
