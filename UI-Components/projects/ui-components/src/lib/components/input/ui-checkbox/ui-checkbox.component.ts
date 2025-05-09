import { Component, EventEmitter, forwardRef, Input, Output  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ui-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ui-checkbox.component.html',
  styleUrls: ['./ui-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiCheckboxComponent),
      multi: true
    }
  ]
})
export class UiCheckboxComponent {
  @Output() checkedChange = new EventEmitter<boolean>();
  @Input() label = '';
  @Input() value: string = '';
  @Input() disabled = false;

  checked = false;

  private selectedValues: string[] = [];
  private onChange: (value: string[]) => void = () => {};
  private onTouched: () => void = () => {};

  
  writeValue(obj: string[]): void {
    this.selectedValues = obj || [];
    this.checked = this.selectedValues.includes(this.value);
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

  onCheckboxChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.checked = input.checked;

    if (this.checked) {
      this.selectedValues.push(this.value);
    } else {
      this.selectedValues = this.selectedValues.filter(val => val !== this.value);
    }

    this.onChange(this.selectedValues);
    this.onTouched();
  }

  // onCheckboxChange(event: any) {
  //   this.checked = event.target.checked;
  //   this.checkedChange.emit(this.checked);
  // }
}
