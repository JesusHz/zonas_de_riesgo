import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAsentamientosPageRoutingModule } from './add-asentamientos-routing.module';

import { AddAsentamientosPage } from './add-asentamientos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAsentamientosPageRoutingModule
  ],
  declarations: [AddAsentamientosPage]
})
export class AddAsentamientosPageModule {}
