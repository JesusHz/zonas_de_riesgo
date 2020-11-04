import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMasExtensosPageRoutingModule } from './add-mas-extensos-routing.module';

import { AddMasExtensosPage } from './add-mas-extensos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMasExtensosPageRoutingModule
  ],
  declarations: [AddMasExtensosPage]
})
export class AddMasExtensosPageModule {}
