import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alert } from '../models/alert.model';

@Injectable()
export class AlertService {

  constructor(private http: HttpClient) { }

  getAlerts(): Observable<Alert[]> {
    return this.http.get<Alert[]>('/api/alerts');
  }
}
