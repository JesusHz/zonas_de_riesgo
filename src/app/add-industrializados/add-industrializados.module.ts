import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddIndustrializadosPageRoutingModule } from './add-industrializados-routing.module';

import { AddIndustrializadosPage } from './add-industrializados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddIndustrializadosPageRoutingModule
  ],
  declarations: [AddIndustrializadosPage]
})
export class AddIndustrializadosPageModule {}
