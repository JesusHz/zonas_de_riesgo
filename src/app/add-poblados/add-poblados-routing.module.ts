import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPobladosPage } from './add-poblados.page';

const routes: Routes = [
  {
    path: '',
    component: AddPobladosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPobladosPageRoutingModule {}
