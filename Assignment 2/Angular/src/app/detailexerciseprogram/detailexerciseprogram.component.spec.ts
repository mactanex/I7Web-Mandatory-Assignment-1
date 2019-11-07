import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailexerciseprogramComponent } from './detailexerciseprogram.component';

describe('DetailexerciseprogramComponent', () => {
  let component: DetailexerciseprogramComponent;
  let fixture: ComponentFixture<DetailexerciseprogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailexerciseprogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailexerciseprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
