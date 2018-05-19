import { Injectable } from '@angular/core';
import {AlertService} from '../alert/alert.service';
import {Participant} from '../model/Participant';
import {Observable} from 'rxjs/Observable';
import {Constants} from '../model/Constants';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SpeakersService {

  constructor(private http: HttpClient,
              private alertServiceService: AlertService) { }

  getSpeakers(): Observable<Participant[]> {
    return this.http
      .get(Constants.SPEAKERS_URL)
      .map(response => response as Participant[]);
  }

  private handleError(error: any) {
    this.alertServiceService.error('An error occurred: ', error);
    return Promise.reject(error.message || error);
  }

}
