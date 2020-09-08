import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactButtonComponent } from './react-button.component';

describe('ReactButtonComponent', () => {
  let component: ReactButtonComponent;
  let fixture: ComponentFixture<ReactButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
