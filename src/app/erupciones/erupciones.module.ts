import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErupcionesPageRoutingModule } from './erupciones-routing.module';

import { ErupcionesPage } from './erupciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErupcionesPageRoutingModule
  ],
  declarations: [ErupcionesPage]
})
export class ErupcionesPageModule {}
