import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificCommitteeComponent } from './scientific-committee.component';

describe('ScientificCommitteeComponent', () => {
  let component: ScientificCommitteeComponent;
  let fixture: ComponentFixture<ScientificCommitteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScientificCommitteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScientificCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
