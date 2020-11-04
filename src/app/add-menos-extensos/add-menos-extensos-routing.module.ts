import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMenosExtensosPage } from './add-menos-extensos.page';

const routes: Routes = [
  {
    path: '',
    component: AddMenosExtensosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMenosExtensosPageRoutingModule {}
