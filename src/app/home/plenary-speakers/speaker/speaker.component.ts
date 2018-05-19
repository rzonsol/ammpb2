import {Component, Input, OnInit} from '@angular/core';
import {Participant} from '../../../model/Participant';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.css']
})
export class SpeakerComponent implements OnInit {


  @Input()
  participant: Participant;
  constructor() { }

  ngOnInit() {
  }

}


