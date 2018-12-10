import { Component, OnInit } from '@angular/core';
import { Alert } from '../shared/models/alert.model';
import { AlertService } from '../shared/services/alert.service';

@Component({
  selector: 'app-management-panel',
  templateUrl: './management-panel.component.html',
  styleUrls: ['./management-panel.component.scss']
})
export class ManagementPanelComponent implements OnInit {
  alerts: Alert[];

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService
      .getAlerts()
      .subscribe(data => {
        this.alerts = data;
      }, error => {
        console.error(error);
      });
  }

}
