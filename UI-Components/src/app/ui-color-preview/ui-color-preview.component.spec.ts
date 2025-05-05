import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiColorPreviewComponent } from './ui-color-preview.component';

describe('UiColorPreviewComponent', () => {
  let component: UiColorPreviewComponent;
  let fixture: ComponentFixture<UiColorPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiColorPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiColorPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
