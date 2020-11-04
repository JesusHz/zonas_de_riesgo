import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiesgosPageRoutingModule } from './riesgos-routing.module';

import { RiesgosPage } from './riesgos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiesgosPageRoutingModule
  ],
  declarations: [RiesgosPage]
})
export class RiesgosPageModule {}
