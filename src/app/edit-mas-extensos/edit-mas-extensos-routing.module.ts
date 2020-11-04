import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMasExtensosPage } from './edit-mas-extensos.page';

const routes: Routes = [
  {
    path: '',
    component: EditMasExtensosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMasExtensosPageRoutingModule {}
