import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiesgosPage } from './riesgos.page';

const routes: Routes = [
  {
    path: '',
    component: RiesgosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiesgosPageRoutingModule {}
