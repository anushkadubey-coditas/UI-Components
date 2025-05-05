import { Component, Input, Output, EventEmitter, forwardRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';

@Component({
  selector: 'ui-input-validated',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ui-text-input-with-validation.component.html',
  styleUrls: ['./ui-text-input-with-validation.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiInputValidatedComponent),
      multi: true
    }
  ]
})
export class UiInputValidatedComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() required = false;
  @Input() model: any = '';
  @Output() modelChange = new EventEmitter<any>();
  @ViewChild('input') input!: NgModel;

  disabled = false;
  touched = false;
  
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.model = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  
  onModelChange(value: any): void {
    this.modelChange.emit(value);
    this.onChange(value);
  }
  
  onBlur(): void {
    if (!this.touched) {
      this.touched = true;
      this.onTouched();
    }
  }
}
