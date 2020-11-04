import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditElevacionPageRoutingModule } from './edit-elevacion-routing.module';

import { EditElevacionPage } from './edit-elevacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditElevacionPageRoutingModule
  ],
  declarations: [EditElevacionPage]
})
export class EditElevacionPageModule {}
