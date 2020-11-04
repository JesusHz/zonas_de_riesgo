import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditMenosExtensosPage } from './edit-menos-extensos.page';

const routes: Routes = [
  {
    path: '',
    component: EditMenosExtensosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMenosExtensosPageRoutingModule {}
