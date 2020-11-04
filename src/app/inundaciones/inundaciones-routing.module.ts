import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InundacionesPage } from './inundaciones.page';

const routes: Routes = [
  {
    path: '',
    component: InundacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InundacionesPageRoutingModule {}
