import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FracturasPageRoutingModule } from './fracturas-routing.module';

import { FracturasPage } from './fracturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FracturasPageRoutingModule
  ],
  declarations: [FracturasPage]
})
export class FracturasPageModule {}
