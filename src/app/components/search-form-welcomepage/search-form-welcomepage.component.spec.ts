import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormWelcomepageComponent } from './search-form-welcomepage.component';

describe('SearchFormWelcomepageComponent', () => {
  let component: SearchFormWelcomepageComponent;
  let fixture: ComponentFixture<SearchFormWelcomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFormWelcomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormWelcomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
