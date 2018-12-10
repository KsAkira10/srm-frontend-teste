import { Component, OnInit, Input } from '@angular/core';
import { Route } from '../../models/route.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() routes: Route[];

  constructor() { }

  ngOnInit() { }

  getIcon(alias: string): string {
    if (alias == null) {
      return '';
    }

    return `nc-${alias}`;
  }

}
