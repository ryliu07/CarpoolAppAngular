import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPostingCardComponent } from './car-posting-card.component';

describe('CarPostingCardComponent', () => {
  let component: CarPostingCardComponent;
  let fixture: ComponentFixture<CarPostingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarPostingCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarPostingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
