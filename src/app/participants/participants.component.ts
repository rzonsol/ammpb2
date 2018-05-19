import { Component, OnInit } from '@angular/core';
import {ParticipantsService} from '../service/participants.service';
import {AlertService} from '../alert/alert.service';
import {Participant} from '../model/Participant';
import {Constants} from '../model/Constants';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {

  errorService = false;

  constructor(private participantsService: ParticipantsService,
              private alertService: AlertService) {
  }

  participants: Participant[] = [
    {
      'id': 27,
      'firstName': 'Rasha',
      'lastName': 'Abu-Eid',
      'affiliation': 'University of Aberdeen, UK'
    },
    {
      'id': 28,
      'firstName': 'Banaszak',
      'lastName': 'Grzegorz',
      'affiliation': 'Adam Mickiewicz University, Poznań, Poland'
    },
    {
      'id': 29,
      'firstName': 'Andreas',
      'lastName': 'Deutsch',
      'affiliation': 'Technical University, Dresden, Germany'
    },
    {
      'id': 30,
      'firstName': 'Andrei',
      'lastName': 'Kirilyuk',
      'affiliation': 'National Academy of Sciences of Ukraine, Kiev, Ukraine'
    },
    {
      'id': 31,
      'firstName': 'Helmut',
      'lastName': 'Ahammer',
      'affiliation': 'University of Graz, Austria'
    },
    {
      'id': 32,
      'firstName': 'Piotr',
      'lastName': 'Krasoń',
      'affiliation': 'Szczecin University, Poland'
    },
    {
      'id': 33,
      'firstName': 'Gabriel',
      'lastName': 'Landini',
      'affiliation': 'University of Birmingham, UK'
    },
    {
      'id': 34,
      'firstName': 'Tadeusz',
      'lastName': 'Lulek',
      'affiliation': 'Adam Mickiewicz University, Poznań, Poland'
    },
    {
      'id': 35,
      'firstName': 'Preda',
      'lastName': 'Mihailescu',
      'affiliation': 'Georg-August-Universität, Göttingen, Germany'
    },
    {
      'id': 36,
      'firstName': 'Jan',
      'lastName': 'Milewski',
      'affiliation': 'Poznań University of Technology, Poland'
    },
    {
      'id': 37,
      'firstName': 'Nebojsa',
      'lastName': 'Milosevic',
      'affiliation': 'University of Belgrade, Serbia'
    },
    {
      'id': 38,
      'firstName': 'Valerij',
      'lastName': 'Romanovskij',
      'affiliation': 'University of Maribor, Slovenia'
    },
    {
      'id': 39,
      'firstName': 'Andrij',
      'lastName': 'Rovenchak',
      'affiliation': 'University of Lviv, Ukraine'
    },
    {
      'id': 40,
      'firstName': 'Mihail',
      'lastName': 'Tanase',
      'affiliation': 'Georg-August-Universität, Göttingen, Germany'
    },
    {
      'id': 41,
      'firstName': 'Herbert',
      'lastName': 'Yelinek',
      'affiliation': 'Charles Sturt University, Albury, Australia'
    },
    {
      'id': 42,
      'firstName': 'Bruce',
      'lastName': 'West',
      'affiliation': 'US Army Research Laboratory, USA'
    },
    {
      'id': 43,
      'firstName': 'Przemysław',
      'lastName': 'Wojtaszczyk',
      'affiliation': 'Warsaw University, Poland'
    },
    {
      'id': 44,
      'firstName': 'Przemysław',
      'lastName': 'Waliszewski',
      'affiliation': 'Department of Urology, Lahn-Dill Clinics, Dillenburg'
    },
    {
      'id': 45,
      'firstName': 'Andreas',
      'lastName': 'Dominik',
      'affiliation': 'Justus-Liebig-University, Giessen, Germany'
    },
    {
      'id': 46,
      'firstName': 'Dorota',
      'lastName': 'Blinkiewicz',
      'affiliation': 'Adam Mickiewicz University, Poznań, Poland'
    },
    {
      'id': 47,
      'firstName': 'Martha',
      'lastName': 'Borowska',
      'affiliation': 'University of Białystok, Poland'
    },
    {
      'id': 48,
      'firstName': 'Reinhard',
      'lastName': 'Laubenbacher',
      'affiliation': 'University of Connecticut, USA'
    },
    {
      'id': 49,
      'firstName': 'Edward',
      'lastName': 'Oczeretko',
      'affiliation': 'University of Białystok, Poland'
    },
    {
      'id': 50,
      'firstName': 'Yoichi',
      'lastName': 'Uetake',
      'affiliation': 'Adam Mickiewicz University, Poznań, Poland'
    },
    {
      'id': 51,
      'firstName': 'Stefan',
      'lastName': 'Barańczuk',
      'affiliation': 'Adam Mickiewicz University, Poznań, Poland'
    }
  ];


  ngOnInit() {
    this.loadParticipants();
  }

  loadParticipants() {
    this.participantsService.getParticipants()
      .subscribe(
        p => {
          this.participants = p;
          if (p.length === 0) {
            this.alertService.error('There no participants on server or the connection failed');
          } else {
            this.participants.sort(function (a, b) {
              return a.lastName.localeCompare(b.lastName);
            });
          }
        },
        err => {
          this.errorRegistration(Constants.SERVER_ERROR);
          this.participants.sort(function (a, b) {
            return a.lastName.localeCompare(b.lastName);
          });
        }
      );
  }
  private errorRegistration(err) {
    console.log(err);
    this.alertService.error(err);
  }

}
