import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFracturasPage } from './add-fracturas.page';

const routes: Routes = [
  {
    path: '',
    component: AddFracturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFracturasPageRoutingModule {}
