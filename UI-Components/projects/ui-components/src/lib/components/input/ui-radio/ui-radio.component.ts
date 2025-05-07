import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ui-radio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ui-radio.component.html',
  styleUrls: ['./ui-radio.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UiRadioComponent),
    multi: true
  }]
})
export class UiRadioComponent {

  @Input() value!: string;
  @Input() label!: string;
  @Input() name!: string;
  @Input() checked: boolean = false;
  @Input() disabled = false;

  @Output() change = new EventEmitter<string>();

  Value = '';

  onRadioChange(event: Event) {
    this.checked = true;
    this.onChange(this.value);
    this.onTouched();
  }

 

  // Angular-provided callbacks
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};



  // ControlValueAccessor methods
  writeValue(obj: any): void {
    this.checked = obj === this.value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
