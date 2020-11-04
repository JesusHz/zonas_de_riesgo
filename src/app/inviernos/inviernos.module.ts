import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InviernosPageRoutingModule } from './inviernos-routing.module';

import { InviernosPage } from './inviernos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InviernosPageRoutingModule
  ],
  declarations: [InviernosPage]
})
export class InviernosPageModule {}
