import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-radio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ui-radio.component.html',
  styleUrls: ['./ui-radio.component.scss']
})
export class UiRadioComponent {

  @Input() value!: string;
  @Input() label!: string;
  @Input() name!: string;
  @Input() checked: boolean = false;

  @Output() change = new EventEmitter<string>();

  onRadioChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.change.emit(target.value);
  }
}
