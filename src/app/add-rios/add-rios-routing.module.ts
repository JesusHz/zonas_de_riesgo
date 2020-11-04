import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRiosPage } from './add-rios.page';

const routes: Routes = [
  {
    path: '',
    component: AddRiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRiosPageRoutingModule {}
