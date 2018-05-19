import { Injectable } from '@angular/core';
import {ParticipantSignUpRequest} from '../model/ParticipantSignUpRequest';
import {Observable} from 'rxjs/Observable';
import {Constants} from '../model/Constants';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class FormService {

  constructor(private http: HttpClient) { }

  saveParticipant(participantSignUpRequest: ParticipantSignUpRequest): Observable<any> {
    return this.http.post(
      Constants.SIGN_UP_PARTICIPANT_URL,
      participantSignUpRequest,
      {headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }


}
