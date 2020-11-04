import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddInundacionesPageRoutingModule } from './add-inundaciones-routing.module';

import { AddInundacionesPage } from './add-inundaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddInundacionesPageRoutingModule
  ],
  declarations: [AddInundacionesPage]
})
export class AddInundacionesPageModule {}
