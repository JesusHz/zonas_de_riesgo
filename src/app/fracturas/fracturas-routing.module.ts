import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FracturasPage } from './fracturas.page';

const routes: Routes = [
  {
    path: '',
    component: FracturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FracturasPageRoutingModule {}
