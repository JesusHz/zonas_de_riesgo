import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMasExtensosPage } from './add-mas-extensos.page';

const routes: Routes = [
  {
    path: '',
    component: AddMasExtensosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMasExtensosPageRoutingModule {}
