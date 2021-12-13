import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeActualComponent } from './resume-actual.component';

describe('ResumeActualComponent', () => {
  let component: ResumeActualComponent;
  let fixture: ComponentFixture<ResumeActualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeActualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
