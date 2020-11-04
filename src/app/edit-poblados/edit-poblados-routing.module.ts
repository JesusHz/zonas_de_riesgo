import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPobladosPage } from './edit-poblados.page';

const routes: Routes = [
  {
    path: '',
    component: EditPobladosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPobladosPageRoutingModule {}
