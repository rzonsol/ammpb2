import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {FormService} from '../service/form.service';
import {AlertService} from '../alert/alert.service';
import {ParticipantSignUpRequest} from '../model/ParticipantSignUpRequest';
import {Constants} from '../model/Constants';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  signupForm: FormGroup;
  disableBtn = false;


  constructor(private router: Router, private formService: FormService, private alertService: AlertService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'affiliation': new FormControl(null, Validators.required),
      'phoneNumber': new FormControl(null),
      'specialRequest': new FormControl(null),
      'citizenship': new FormControl(null, Validators.required),
      'arrivalDate': new FormControl(null),
      'departureDate': new FormControl(null)
    });
  }
  onGoBack() {
    this.router.navigate(['/']);
  }

  onClearForm() {
    this.signupForm.reset();
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      this.disableBtn = true;
      this.alertService.info('Your application has been sent.');
      this.formService.saveParticipant(this.createdRequestDto()).subscribe(
        data => {
          this.successRegistration(data);
          console.log(data);
        },
        err => {
          this.errorRegistration(err);
          console.log(err);
        }
      );
    } else {
      this.disableBtn = false;
      (<any>Object).values(this.signupForm.controls).forEach(
        c => {
          c.markAsTouched();
        }
      );
    }
  }

  private errorRegistration(err) {
    console.log(err);
    if (err.status === 400 ) {
      this.alertService.error(err.error);
    } else {
      this.alertService.error(Constants.SERVER_ERROR);
    }
    this.disableBtn = err.ok;
  }

  private successRegistration(data) {
    console.log(data);
    this.disableBtn = true;
    this.alertService.success('Thank you for registration, within 48 hours you will receive an e-mail with confirmation of registration');
  }

  private createdRequestDto(): ParticipantSignUpRequest {
    return new ParticipantSignUpRequest(
      this.signupForm.get('firstName').value,
      this.signupForm.get('lastName').value,
      this.signupForm.get('email').value,
      this.signupForm.get('phoneNumber').value,
      this.signupForm.get('specialRequest').value,
      Constants.CONFERENCE_ID,
      this.signupForm.get('affiliation').value,
      this.signupForm.get('citizenship').value,
      this.signupForm.get('arrivalDate').value,
      this.signupForm.get('departureDate').value,
    );
  }

}
