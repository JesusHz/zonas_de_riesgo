import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditErupcionesPageRoutingModule } from './edit-erupciones-routing.module';

import { EditErupcionesPage } from './edit-erupciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditErupcionesPageRoutingModule
  ],
  declarations: [EditErupcionesPage]
})
export class EditErupcionesPageModule {}
