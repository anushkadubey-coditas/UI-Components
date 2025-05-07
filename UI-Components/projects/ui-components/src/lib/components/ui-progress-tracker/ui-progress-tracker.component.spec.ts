import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiProgressTrackerComponent } from './ui-progress-tracker.component';

describe('UiProgressTrackerComponent', () => {
  let component: UiProgressTrackerComponent;
  let fixture: ComponentFixture<UiProgressTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiProgressTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiProgressTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
