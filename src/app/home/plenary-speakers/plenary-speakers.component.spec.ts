import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlenarySpeakersComponent } from './plenary-speakers.component';

describe('PlenarySpeakersComponent', () => {
  let component: PlenarySpeakersComponent;
  let fixture: ComponentFixture<PlenarySpeakersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlenarySpeakersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlenarySpeakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
