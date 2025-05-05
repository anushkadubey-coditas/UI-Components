import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiToggleButtonComponent } from './ui-toggle-button.component';

describe('UiToggleButtonComponent', () => {
  let component: UiToggleButtonComponent;
  let fixture: ComponentFixture<UiToggleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiToggleButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
