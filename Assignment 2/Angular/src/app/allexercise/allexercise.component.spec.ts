import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllexerciseComponent } from './allexercise.component';

describe('AllexerciseComponent', () => {
  let component: AllexerciseComponent;
  let fixture: ComponentFixture<AllexerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllexerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllexerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
