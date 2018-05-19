import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyBankingComponent } from './money-banking.component';

describe('MoneyBankingComponent', () => {
  let component: MoneyBankingComponent;
  let fixture: ComponentFixture<MoneyBankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyBankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
