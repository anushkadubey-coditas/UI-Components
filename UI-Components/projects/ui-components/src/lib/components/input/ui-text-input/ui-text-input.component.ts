import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-text-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ui-text-input.component.html',
  styleUrls: ['./ui-text-input.component.scss']
})
export class UiTextInputComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() disabled = false;
  @Input() required = false;
  @Input() inputId: string = 'text-input';

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

  onInputChange(event: any) {
    this.value = event.target.value;
  }
}
