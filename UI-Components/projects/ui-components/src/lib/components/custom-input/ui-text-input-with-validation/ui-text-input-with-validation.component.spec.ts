import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiInputValidatedComponent } from './ui-text-input-with-validation.component';
import { FormsModule } from '@angular/forms';

describe('UiInputValidatedComponent', () => {
  let component: UiInputValidatedComponent;
  let fixture: ComponentFixture<UiInputValidatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, UiInputValidatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiInputValidatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show required validation error when field is required', () => {
    component.required = true;
    fixture.detectChanges();
    
    // Simulate user interaction
    const inputEl = fixture.nativeElement.querySelector('input');
    inputEl.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    
    const errorMessage = fixture.nativeElement.querySelector('.text-danger');
    expect(errorMessage).toBeTruthy();
  });
});
