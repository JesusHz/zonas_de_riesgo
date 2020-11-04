import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDesplazamientosPageRoutingModule } from './add-desplazamientos-routing.module';

import { AddDesplazamientosPage } from './add-desplazamientos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDesplazamientosPageRoutingModule
  ],
  declarations: [AddDesplazamientosPage]
})
export class AddDesplazamientosPageModule {}
