import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCuerposPageRoutingModule } from './add-cuerpos-routing.module';

import { AddCuerposPage } from './add-cuerpos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCuerposPageRoutingModule
  ],
  declarations: [AddCuerposPage]
})
export class AddCuerposPageModule {}
