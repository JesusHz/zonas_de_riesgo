import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddErupcionesPageRoutingModule } from './add-erupciones-routing.module';

import { AddErupcionesPage } from './add-erupciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddErupcionesPageRoutingModule
  ],
  declarations: [AddErupcionesPage]
})
export class AddErupcionesPageModule {}
