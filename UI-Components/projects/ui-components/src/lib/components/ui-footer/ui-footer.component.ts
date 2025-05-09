import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ui-footer',
  imports: [CommonModule],
  templateUrl: './ui-footer.component.html',
  styleUrl: './ui-footer.component.scss'
})
export class UiFooterComponent {
  @Input({ required: true }) text!: string;

  ngOnChanges(changes: SimpleChanges): void {
  }
}
