import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-toggle-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-toggle-button.component.html',
  styleUrls: ['./ui-toggle-button.component.scss']
})
export class UiToggleButtonComponent {
  @Input() checked = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  toggle() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
