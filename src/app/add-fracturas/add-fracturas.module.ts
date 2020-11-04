import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFracturasPageRoutingModule } from './add-fracturas-routing.module';

import { AddFracturasPage } from './add-fracturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFracturasPageRoutingModule
  ],
  declarations: [AddFracturasPage]
})
export class AddFracturasPageModule {}
