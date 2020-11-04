import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElevacionesPageRoutingModule } from './elevaciones-routing.module';

import { ElevacionesPage } from './elevaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElevacionesPageRoutingModule
  ],
  declarations: [ElevacionesPage]
})
export class ElevacionesPageModule {}
