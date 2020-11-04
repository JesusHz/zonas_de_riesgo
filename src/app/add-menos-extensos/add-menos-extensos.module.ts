import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMenosExtensosPageRoutingModule } from './add-menos-extensos-routing.module';

import { AddMenosExtensosPage } from './add-menos-extensos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMenosExtensosPageRoutingModule
  ],
  declarations: [AddMenosExtensosPage]
})
export class AddMenosExtensosPageModule {}
