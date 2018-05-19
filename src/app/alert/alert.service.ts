///<reference path="alert.ts"/>
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Alert} from './alert';
import {NavigationStart, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AlertType} from './alert-type.enum';

@Injectable()
export class AlertService {

  private subject = new Subject<Alert>();
  private keepAfterRouteChange = false;

  constructor(private router: Router) {
    // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          // only keep for a single route change
          this.keepAfterRouteChange = false;
        } else {
          // clear alert messages
          this.clear();
        }
      }
    });
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  success(message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Success, message, keepAfterRouteChange);
  }

  error(message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Error, message, keepAfterRouteChange);
  }

  info(message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Info, message, keepAfterRouteChange);
  }

  finctionNotImpl(){
    this.info('Function not impl');
  }

  warn(message: string, keepAfterRouteChange = false) {
    this.alert(AlertType.Warning, message, keepAfterRouteChange);
  }

  alert(type: AlertType, message: string, keepAfterRouteChange = false) {
    this.clear();
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next( { type: type, message: message } );
  }

  clear() {
    // clear alerts
    this.subject.next();
  }
}
