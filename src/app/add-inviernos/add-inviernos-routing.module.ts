import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddInviernosPage } from './add-inviernos.page';

const routes: Routes = [
  {
    path: '',
    component: AddInviernosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddInviernosPageRoutingModule {}
