import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAutocompleteInputComponent } from './ui-autocomplete-input.component';

describe('UiAutocompleteInputComponent', () => {
  let component: UiAutocompleteInputComponent;
  let fixture: ComponentFixture<UiAutocompleteInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiAutocompleteInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiAutocompleteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
