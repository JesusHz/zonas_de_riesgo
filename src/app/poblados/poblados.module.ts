import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PobladosPageRoutingModule } from './poblados-routing.module';

import { PobladosPage } from './poblados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PobladosPageRoutingModule
  ],
  declarations: [PobladosPage]
})
export class PobladosPageModule {}
