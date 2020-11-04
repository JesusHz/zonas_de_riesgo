import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMunicipioPage } from './add-municipio.page';

const routes: Routes = [
  {
    path: '',
    component: AddMunicipioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMunicipioPageRoutingModule {}
