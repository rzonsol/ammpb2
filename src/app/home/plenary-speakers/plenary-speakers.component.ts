import {Component, OnInit} from '@angular/core';
import {Participant} from '../../model/Participant';
import {SpeakersService} from '../../service/speakers.service';
import {AlertService} from '../../alert/alert.service';
import {Constants} from '../../model/Constants';

@Component({
  selector: 'app-plenary-speakers',
  templateUrl: './plenary-speakers.component.html',
  styleUrls: ['./plenary-speakers.component.css']
})
export class PlenarySpeakersComponent implements OnInit {

  errorService = false;
  speakers: Participant[] ;

  constructor(private speakersService: SpeakersService,
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
    }
  ];



  ngOnInit() {
    this.loadSpeakers();
  }

  loadSpeakers() {
    this.speakersService.getSpeakers()
      .subscribe(
        p => {
          this.participants = p;
          if (p.length === 0) {
            this.alertService.error('There no speakers on server or the conection faild');
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


