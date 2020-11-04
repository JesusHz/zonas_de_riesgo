import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenosExtensosPageRoutingModule } from './menos-extensos-routing.module';

import { MenosExtensosPage } from './menos-extensos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenosExtensosPageRoutingModule
  ],
  declarations: [MenosExtensosPage]
})
export class MenosExtensosPageModule {}
