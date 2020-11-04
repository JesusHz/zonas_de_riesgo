import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsentamientosPageRoutingModule } from './asentamientos-routing.module';

import { AsentamientosPage } from './asentamientos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsentamientosPageRoutingModule
  ],
  declarations: [AsentamientosPage]
})
export class AsentamientosPageModule {}
