import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditRiosPageRoutingModule } from './edit-rios-routing.module';

import { EditRiosPage } from './edit-rios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditRiosPageRoutingModule
  ],
  declarations: [EditRiosPage]
})
export class EditRiosPageModule {}
