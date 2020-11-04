import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditInviernosPageRoutingModule } from './edit-inviernos-routing.module';

import { EditInviernosPage } from './edit-inviernos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditInviernosPageRoutingModule
  ],
  declarations: [EditInviernosPage]
})
export class EditInviernosPageModule {}
