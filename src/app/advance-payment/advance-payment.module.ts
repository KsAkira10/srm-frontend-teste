import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancePaymentRoutingModule } from './advance-payment-routing.module';
import { AdvancePaymentComponent } from './advance-payment.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AdvancePaymentComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdvancePaymentRoutingModule
  ]
})
export class AdvancePaymentModule { }
