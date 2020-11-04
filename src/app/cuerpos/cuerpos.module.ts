import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuerposPageRoutingModule } from './cuerpos-routing.module';

import { CuerposPage } from './cuerpos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuerposPageRoutingModule
  ],
  declarations: [CuerposPage]
})
export class CuerposPageModule {}
