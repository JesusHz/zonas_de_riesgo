import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMunicipioPageRoutingModule } from './edit-municipio-routing.module';

import { EditMunicipioPage } from './edit-municipio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditMunicipioPageRoutingModule
  ],
  declarations: [EditMunicipioPage]
})
export class EditMunicipioPageModule {}
