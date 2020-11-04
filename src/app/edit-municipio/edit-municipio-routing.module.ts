import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMunicipioPage } from './edit-municipio.page';

const routes: Routes = [
  {
    path: '',
    component: EditMunicipioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMunicipioPageRoutingModule {}
