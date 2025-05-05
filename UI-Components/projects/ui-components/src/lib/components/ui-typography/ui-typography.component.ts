import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-typography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-typography.component.html',
  styleUrls: ['./ui-typography.component.scss']
})
export class UiTypographyComponent {
  @Input() tag: string = 'p';
  @Input() text: string = '';
  @Input() className: string = '';
}
