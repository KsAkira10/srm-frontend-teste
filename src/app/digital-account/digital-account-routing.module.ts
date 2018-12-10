import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DigitalAccountComponent } from './digital-account.component';

const routes: Routes = [{
  path: '',
  component: DigitalAccountComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigitalAccountRoutingModule { }
