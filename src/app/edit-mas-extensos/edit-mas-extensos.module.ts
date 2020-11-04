import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMasExtensosPageRoutingModule } from './edit-mas-extensos-routing.module';

import { EditMasExtensosPage } from './edit-mas-extensos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditMasExtensosPageRoutingModule
  ],
  declarations: [EditMasExtensosPage]
})
export class EditMasExtensosPageModule {}
