import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesplazamientosPageRoutingModule } from './desplazamientos-routing.module';

import { DesplazamientosPage } from './desplazamientos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesplazamientosPageRoutingModule
  ],
  declarations: [DesplazamientosPage]
})
export class DesplazamientosPageModule {}
