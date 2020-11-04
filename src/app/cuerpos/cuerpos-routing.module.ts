import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuerposPage } from './cuerpos.page';

const routes: Routes = [
  {
    path: '',
    component: CuerposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuerposPageRoutingModule {}
