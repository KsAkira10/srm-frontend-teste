import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigitalAccountRoutingModule } from './digital-account-routing.module';
import { DigitalAccountComponent } from './digital-account.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DigitalAccountComponent],
  imports: [
    CommonModule,
    SharedModule,
    DigitalAccountRoutingModule
  ]
})
export class DigitalAccountModule { }
