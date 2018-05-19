import { Injectable } from '@angular/core';
import {AlertService} from '../alert/alert.service';
import {Observable} from 'rxjs/Observable';
import {Participant} from '../model/Participant';
import {Constants} from '../model/Constants';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ParticipantsService {

  constructor(private http: HttpClient,
              private alertServiceService: AlertService) { }

  getParticipants(): Observable<Participant[]> {
    return this.http
      .get(Constants.PARTICIPANTS_URL)
      .map(response => response as Participant[]);
  }

  private handleError(error: any) {
    this.alertServiceService.error('An error occurred: ', error);
    return Promise.reject(error.message || error);
  }

}
