import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Route } from '../models/route.model';

@Injectable()
export class MenuService {

  constructor(private http: HttpClient) { }

  getMenus(): Observable<Route[]> {
    return this.http.get<Route[]>('/api/menus');
  }
}
