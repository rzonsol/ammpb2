import {Component, OnInit} from '@angular/core';
import {Alert} from './alert';
import {AlertService} from './alert.service';
import {AlertType} from './alert-type.enum';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  alerts: Alert[] = [];

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
    this.alertService.getAlert().subscribe((alert: Alert) => {
      if (!alert) {
        // clear alerts when an empty alert is received
        this.alerts = [];
        return;
      }

      // add alert to array
      this.alerts.push(alert);
    });
  }


  removeAlert(alert: Alert) {
    this.alerts = this.alerts.filter(x => x !== alert);
  }

  cssClass(alert: Alert) {
    if (!alert) {
      return;
    }

    // return css class based on alert type
    switch (alert.type) {
      case AlertType.Success.valueOf():
        return 'alert alert-success';
      case AlertType.Error.valueOf():
        return 'alert alert-danger';
      case AlertType.Info.valueOf():
        return 'alert alert-info';
      case AlertType.Warning.valueOf():
        return 'alert alert-warning';
    }
  }

}
