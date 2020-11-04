import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasExtensosPage } from './mas-extensos.page';

const routes: Routes = [
  {
    path: '',
    component: MasExtensosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasExtensosPageRoutingModule {}
