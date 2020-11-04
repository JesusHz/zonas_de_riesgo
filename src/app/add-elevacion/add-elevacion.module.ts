import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddElevacionPageRoutingModule } from './add-elevacion-routing.module';

import { AddElevacionPage } from './add-elevacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddElevacionPageRoutingModule
  ],
  declarations: [AddElevacionPage]
})
export class AddElevacionPageModule {}
