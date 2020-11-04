import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InundacionesPageRoutingModule } from './inundaciones-routing.module';

import { InundacionesPage } from './inundaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InundacionesPageRoutingModule
  ],
  declarations: [InundacionesPage]
})
export class InundacionesPageModule {}
