import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiInputPreviewComponent } from './ui-input-preview.component';

describe('UiInputPreviewComponent', () => {
  let component: UiInputPreviewComponent;
  let fixture: ComponentFixture<UiInputPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiInputPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiInputPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
