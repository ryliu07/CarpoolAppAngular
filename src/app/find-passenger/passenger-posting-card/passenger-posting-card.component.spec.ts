import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerPostingCardComponent } from './passenger-posting-card.component';

describe('PassengerPostingCardComponent', () => {
  let component: PassengerPostingCardComponent;
  let fixture: ComponentFixture<PassengerPostingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerPostingCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerPostingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
