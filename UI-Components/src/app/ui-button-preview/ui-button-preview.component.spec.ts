import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiButtonPreviewComponent } from './ui-button-preview.component';

describe('UiButtonPreviewComponent', () => {
  let component: UiButtonPreviewComponent;
  let fixture: ComponentFixture<UiButtonPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiButtonPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiButtonPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
