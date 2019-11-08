import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogactivitysheetComponent } from './logactivitysheet.component';

describe('LogactivitysheetComponent', () => {
  let component: LogactivitysheetComponent;
  let fixture: ComponentFixture<LogactivitysheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogactivitysheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogactivitysheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
