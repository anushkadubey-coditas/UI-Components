import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-color-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-color-box.component.html',
  styleUrls: ['./ui-color-box.component.scss']
})
export class UiColorBoxComponent {
  @Input() colorName = '';
  @Input() variable = '';
}
