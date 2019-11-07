import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewexerciseprogramComponent } from './newexerciseprogram.component';

describe('NewexerciseprogramComponent', () => {
  let component: NewexerciseprogramComponent;
  let fixture: ComponentFixture<NewexerciseprogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewexerciseprogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewexerciseprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
