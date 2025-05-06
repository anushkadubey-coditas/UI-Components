import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSidebarPreviewComponent } from './ui-sidebar-preview.component';

describe('UiSidebarPreviewComponent', () => {
  let component: UiSidebarPreviewComponent;
  let fixture: ComponentFixture<UiSidebarPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiSidebarPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiSidebarPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
