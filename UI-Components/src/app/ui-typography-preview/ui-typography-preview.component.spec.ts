import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTypographyPreviewComponent } from './ui-typography-preview.component';

describe('UiTypographyPreviewComponent', () => {
  let component: UiTypographyPreviewComponent;
  let fixture: ComponentFixture<UiTypographyPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiTypographyPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiTypographyPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
