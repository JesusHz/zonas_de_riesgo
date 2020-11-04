import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditCuerposPageRoutingModule } from './edit-cuerpos-routing.module';

import { EditCuerposPage } from './edit-cuerpos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCuerposPageRoutingModule
  ],
  declarations: [EditCuerposPage]
})
export class EditCuerposPageModule {}
