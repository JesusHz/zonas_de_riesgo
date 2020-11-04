import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddInundacionesPage } from './add-inundaciones.page';

const routes: Routes = [
  {
    path: '',
    component: AddInundacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddInundacionesPageRoutingModule {}
