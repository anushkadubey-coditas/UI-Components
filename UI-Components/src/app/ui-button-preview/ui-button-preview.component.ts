import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UiButtonComponent } from '../../../projects/ui-components/src/lib/components/button/ui-button/ui-button.component';

@Component({
  selector: 'lib-ui-button-preview',
  standalone: true,
  imports: [CommonModule, UiButtonComponent],
  templateUrl: './ui-button-preview.component.html',
  styleUrl: './ui-button-preview.component.scss'
})
export class UiButtonPreviewComponent {

}
