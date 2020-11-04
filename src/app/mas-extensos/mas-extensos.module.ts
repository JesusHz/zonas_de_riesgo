import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasExtensosPageRoutingModule } from './mas-extensos-routing.module';

import { MasExtensosPage } from './mas-extensos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasExtensosPageRoutingModule
  ],
  declarations: [MasExtensosPage]
})
export class MasExtensosPageModule {}
