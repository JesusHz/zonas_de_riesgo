import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMunicipioPageRoutingModule } from './add-municipio-routing.module';

import { AddMunicipioPage } from './add-municipio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMunicipioPageRoutingModule
  ],
  declarations: [AddMunicipioPage]
})
export class AddMunicipioPageModule {}
