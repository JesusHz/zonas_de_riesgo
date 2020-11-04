import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditInviernosPage } from './edit-inviernos.page';

const routes: Routes = [
  {
    path: '',
    component: EditInviernosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditInviernosPageRoutingModule {}
