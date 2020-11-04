import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenosExtensosPage } from './menos-extensos.page';

const routes: Routes = [
  {
    path: '',
    component: MenosExtensosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenosExtensosPageRoutingModule {}
