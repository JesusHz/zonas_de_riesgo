import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PobladosPage } from './poblados.page';

const routes: Routes = [
  {
    path: '',
    component: PobladosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PobladosPageRoutingModule {}
