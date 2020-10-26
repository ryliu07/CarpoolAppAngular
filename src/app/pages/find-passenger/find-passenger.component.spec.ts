import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPassengerComponent } from './find-passenger.component';

describe('FindPassengerComponent', () => {
  let component: FindPassengerComponent;
  let fixture: ComponentFixture<FindPassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindPassengerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
