import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDesplazamientosPageRoutingModule } from './edit-desplazamientos-routing.module';

import { EditDesplazamientosPage } from './edit-desplazamientos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditDesplazamientosPageRoutingModule
  ],
  declarations: [EditDesplazamientosPage]
})
export class EditDesplazamientosPageModule {}
