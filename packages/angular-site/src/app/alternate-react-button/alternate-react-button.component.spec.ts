import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternateReactButtonComponent } from './alternate-react-button.component';

describe('AlternateReactButtonComponent', () => {
  let component: AlternateReactButtonComponent;
  let fixture: ComponentFixture<AlternateReactButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlternateReactButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternateReactButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
