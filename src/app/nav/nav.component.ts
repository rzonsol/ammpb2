import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public isNavbarCollapsed = true;
  public isFormCollapsed = true;
  public isAccommodationCollapsed = true;
  public isTravelCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onHomeBtn() {
    this.closeAll();
    this.router.navigate(['/']);
  }
  onProgramBtn() {
    this.closeAll();
    this.router.navigate(['program']);
  }
  onAbstractsBtn() {
    this.closeAll();
    this.router.navigate(['abstracts']);
  }
  onParticipantsBtn() {
    this.closeAll();
    this.router.navigate(['participants']);
  }
  onFormBtn() {
    this.closeAll();
    this.router.navigate(['form']);
  }
  onFeeBtn() {
    this.closeAll();
    this.router.navigate(['fee']);
  }
  onBankTransferBtn() {
    this.closeAll();
    this.router.navigate(['bank-transfer']);
  }
  onConferenceSiteBtn() {
    this.closeAll();
    window.open('https://www.impan.pl/EN/Bedlewo/about.html', '_blank');
  }
  onAccommodationBtn() {
    this.closeAll();
    this.router.navigate(['accommodation']);
  }
  onMoneyBankingBtn() {
    this.closeAll();
    this.router.navigate(['money-banking']);
  }
  onTravelBtn() {
    this.closeAll();
    this.router.navigate(['travel']);
  }
  onContactBtn() {
    this.closeAll();
    this.router.navigate(['contact']);
  }
  setActiveClass(btn: string): boolean {
    return this.router.url === btn;
  }
  closeAll() {
    this.isNavbarCollapsed = true;
    this.closeSubMenu();
  }
  closeSubMenu() {
    this.isFormCollapsed = true;
    this.isAccommodationCollapsed = true;
    this.isTravelCollapsed = true;
  }
  showSubMenu(b: boolean): boolean{
    this.closeSubMenu();
    return !b;
  }

}
