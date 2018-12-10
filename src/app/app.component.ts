import { Component, OnInit } from '@angular/core';
import { Route } from './shared/models/route.model';
import { MenuService } from './shared/services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'srm-frontend-teste';
  routes: Route[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService
      .getMenus()
      .subscribe(data => {
        this.routes = data;
      }, error => {
        console.error(error);
      });
  }

}
