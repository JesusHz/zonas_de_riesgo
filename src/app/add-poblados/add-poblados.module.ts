import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPobladosPageRoutingModule } from './add-poblados-routing.module';

import { AddPobladosPage } from './add-poblados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPobladosPageRoutingModule
  ],
  declarations: [AddPobladosPage]
})
export class AddPobladosPageModule {}
