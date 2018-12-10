import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'management-panel'
    },
    {
      path: 'management-panel',
      loadChildren: './management-panel/management-panel.module#ManagementPanelModule'
    },
    {
      path: 'digital-account',
      loadChildren: './digital-account/digital-account.module#DigitalAccountModule'
    },
    {
      path: 'advance-payment',
      loadChildren: './advance-payment/advance-payment.module#AdvancePaymentModule'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
