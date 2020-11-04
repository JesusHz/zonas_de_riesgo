import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditAsentamientosPageRoutingModule } from './edit-asentamientos-routing.module';

import { EditAsentamientosPage } from './edit-asentamientos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditAsentamientosPageRoutingModule
  ],
  declarations: [EditAsentamientosPage]
})
export class EditAsentamientosPageModule {}
