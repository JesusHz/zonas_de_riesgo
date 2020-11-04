import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndustrializadosPageRoutingModule } from './industrializados-routing.module';

import { IndustrializadosPage } from './industrializados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndustrializadosPageRoutingModule
  ],
  declarations: [IndustrializadosPage]
})
export class IndustrializadosPageModule {}
