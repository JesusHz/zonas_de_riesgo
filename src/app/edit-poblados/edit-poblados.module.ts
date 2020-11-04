import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPobladosPageRoutingModule } from './edit-poblados-routing.module';

import { EditPobladosPage } from './edit-poblados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPobladosPageRoutingModule
  ],
  declarations: [EditPobladosPage]
})
export class EditPobladosPageModule {}
