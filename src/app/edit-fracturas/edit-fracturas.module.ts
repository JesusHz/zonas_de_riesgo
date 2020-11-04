import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditFracturasPageRoutingModule } from './edit-fracturas-routing.module';

import { EditFracturasPage } from './edit-fracturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditFracturasPageRoutingModule
  ],
  declarations: [EditFracturasPage]
})
export class EditFracturasPageModule {}
