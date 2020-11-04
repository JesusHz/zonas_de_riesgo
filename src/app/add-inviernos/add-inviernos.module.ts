import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddInviernosPageRoutingModule } from './add-inviernos-routing.module';

import { AddInviernosPage } from './add-inviernos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddInviernosPageRoutingModule
  ],
  declarations: [AddInviernosPage]
})
export class AddInviernosPageModule {}
