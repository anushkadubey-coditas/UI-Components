import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCustomInputPreviewComponent } from './ui-custom-input-preview.component';

describe('UiCustomInputPreviewComponent', () => {
  let component: UiCustomInputPreviewComponent;
  let fixture: ComponentFixture<UiCustomInputPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiCustomInputPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiCustomInputPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
