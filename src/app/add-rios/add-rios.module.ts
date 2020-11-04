import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddRiosPageRoutingModule } from './add-rios-routing.module';

import { AddRiosPage } from './add-rios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddRiosPageRoutingModule
  ],
  declarations: [AddRiosPage]
})
export class AddRiosPageModule {}
