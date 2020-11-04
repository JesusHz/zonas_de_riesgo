import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditIndustrializadosPageRoutingModule } from './edit-industrializados-routing.module';

import { EditIndustrializadosPage } from './edit-industrializados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditIndustrializadosPageRoutingModule
  ],
  declarations: [EditIndustrializadosPage]
})
export class EditIndustrializadosPageModule {}
