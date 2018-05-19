import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { AimsScopeComponent } from './home/aims-scope/aims-scope.component';
import { ScientificCommitteeComponent } from './home/scientific-committee/scientific-committee.component';
import { OrganizersComponent } from './home/organizers/organizers.component';
import { AlertComponent } from './alert/alert.component';
import {AlertService} from './alert/alert.service';
import {SpeakersService} from './service/speakers.service';
import { SpeakerComponent } from './home/plenary-speakers/speaker/speaker.component';
import {PlenarySpeakersComponent} from './home/plenary-speakers/plenary-speakers.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ProgramComponent } from './program/program.component';
import { AbstractsComponent } from './abstracts/abstracts.component';
import { ParticipantsComponent } from './participants/participants.component';
import {DropdownModule} from 'angular-custom-dropdown';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './form/form.component';
import { FeeComponent } from './fee/fee.component';
import { BankTransferComponent } from './bank-transfer/bank-transfer.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { MoneyBankingComponent } from './money-banking/money-banking.component';
import { TravelComponent } from './travel/travel.component';
import { ContactComponent } from './contact/contact.component';
import { ParticipantComponent } from './participants/participant/participant.component';
import {ParticipantsService} from './service/participants.service';
import {FormService} from './service/form.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'program', component: ProgramComponent},
  {path: 'abstracts', component: AbstractsComponent},
  {path: 'participants', component: ParticipantsComponent},
  {path: 'form', component: FormComponent},
  {path: 'fee', component: FeeComponent},
  {path: 'bank-transfer', component: BankTransferComponent},
  {path: 'accommodation', component: AccommodationComponent},
  {path: 'money-banking', component: MoneyBankingComponent},
  {path: 'travel', component: TravelComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    WelcomeComponent,
    AimsScopeComponent,
    ScientificCommitteeComponent,
    OrganizersComponent,
    AlertComponent,
    PlenarySpeakersComponent,
    SpeakerComponent,
    SponsorsComponent,
    ProgramComponent,
    AbstractsComponent,
    ParticipantsComponent,
    FormComponent,
    FeeComponent,
    BankTransferComponent,
    AccommodationComponent,
    MoneyBankingComponent,
    TravelComponent,
    ContactComponent,
    ParticipantComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DropdownModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [AlertService, SpeakersService, ParticipantsService, FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
