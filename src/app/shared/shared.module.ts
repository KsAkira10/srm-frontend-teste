import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuService } from './services/menu.service';
import { MainPainelComponent } from './components/main-painel/main-painel.component';
import { CardComponent } from './components/card/card.component';
import { AlertService } from './services/alert.service';

@NgModule({
  declarations: [SidebarComponent, MainPainelComponent, CardComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [SidebarComponent, MainPainelComponent, CardComponent],
  providers: [MenuService, AlertService]
})
export class SharedModule { }
