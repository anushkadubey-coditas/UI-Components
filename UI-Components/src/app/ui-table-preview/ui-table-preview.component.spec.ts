import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTablePreviewComponent } from './ui-table-preview.component';

describe('UiTablePreviewComponent', () => {
  let component: UiTablePreviewComponent;
  let fixture: ComponentFixture<UiTablePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiTablePreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiTablePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
