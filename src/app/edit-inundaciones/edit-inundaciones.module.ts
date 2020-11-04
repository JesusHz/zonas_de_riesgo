import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditInundacionesPageRoutingModule } from './edit-inundaciones-routing.module';

import { EditInundacionesPage } from './edit-inundaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditInundacionesPageRoutingModule
  ],
  declarations: [EditInundacionesPage]
})
export class EditInundacionesPageModule {}
