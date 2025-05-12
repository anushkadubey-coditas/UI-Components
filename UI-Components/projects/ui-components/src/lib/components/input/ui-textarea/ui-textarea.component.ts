import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-textarea',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ui-textarea.component.html',
  styleUrls: ['./ui-textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiTextareaComponent),
      multi: true
    }
  ]
})
export class UiTextareaComponent implements ControlValueAccessor {
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() required = false;
  @Input() rows: number = 3;
  @Input() inputId: string = 'textarea-input';

  private _value: string = '';

  @Input()
  get value(): string {
    return this._value;
  }
  set value(val: string) {
    this._value = val;
    this.valueChange.emit(this._value);
  }

  @Output() valueChange = new EventEmitter<string>();

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this._value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  handleInput(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    const newValue = target?.value ?? '';
    this.value = newValue;
    this.onChange(newValue);
  }

  handleBlur(): void {
    this.onTouched();
  }
}
