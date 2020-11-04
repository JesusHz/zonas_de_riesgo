import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMenosExtensosPageRoutingModule } from './edit-menos-extensos-routing.module';

import { EditMenosExtensosPage } from './edit-menos-extensos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditMenosExtensosPageRoutingModule
  ],
  declarations: [EditMenosExtensosPage]
})
export class EditMenosExtensosPageModule {}
