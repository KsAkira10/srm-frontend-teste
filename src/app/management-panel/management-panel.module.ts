import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ManagementPanelRoutingModule } from './management-panel-routing.module';
import { ManagementPanelComponent } from './management-panel.component';

@NgModule({
  declarations: [ManagementPanelComponent],
  imports: [
    CommonModule,
    SharedModule,
    ManagementPanelRoutingModule
  ]
})
export class ManagementPanelModule { }
